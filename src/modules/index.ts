// src/index.ts
import path from 'path';
import fs from 'fs';
import { generateModelFunctions } from './generator';
import { exit } from 'process';

// Define paths
const MODELS_PATH = path.join(__dirname, '../generated/typegraphql-prisma/models');
const INPUTS_PATH = path.join(__dirname, '../generated/typegraphql-prisma/resolvers/inputs');
const FUNCTIONS_OUTPUT_PATH = path.join(__dirname, '../');

// Ensure the output directory exists
if (!fs.existsSync(FUNCTIONS_OUTPUT_PATH)) {
  fs.mkdirSync(FUNCTIONS_OUTPUT_PATH, { recursive: true });
}

// Delete all files within the output directory (excluding the server.ts and utils.ts files, and ignore directories)
const files = fs.readdirSync(FUNCTIONS_OUTPUT_PATH);
for (const file of files) {
  if (file !== 'server.ts' && file !== 'utils.ts' && file !== 'client.ts' && file !== 'client-esm.ts' && file !== 'prismaClient.ts' && file !== 'getToken.ts') {
    const filePath = path.join(FUNCTIONS_OUTPUT_PATH, file);
    const stat = fs.statSync(filePath as fs.PathLike);
    if (stat.isFile()) {
      fs.unlinkSync(filePath);
    }
  }
}

// Initialize index file content
let indexContent = `// This file is auto-generated by modules/index.d.ts
export type * as types from './generated/typegraphql-prisma/models/index.d.ts';
export type * as enums from './generated/typegraphql-prisma/enums/index.d.ts';
export * from './generated/typeStrings/index';
`;

// Initialize arrays for import and export statements
const importStatements: string[] = [];
const exportStatements: string[] = [];

// Retrieve all model files
let modelFiles: string[] = [];
try {
  modelFiles = fs
    .readdirSync(MODELS_PATH)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts');
} catch (error) {
  console.error(`Failed to read models directory at ${MODELS_PATH}:`, error);
  exit(1);
}

if (modelFiles.length === 0) {
  console.error('No model files found in the models directory.');
  exit(1);
}

// Iterate over the models and generate functions
modelFiles.forEach((file) => {
  const modelName = path.basename(file, '.ts');
  const capitalModelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);

  const modelFunctions = generateModelFunctions(capitalModelName, MODELS_PATH, INPUTS_PATH, FUNCTIONS_OUTPUT_PATH);

  if (modelFunctions === null) {
    // Skip models that couldn't generate functions
    return;
  }

  // Add import and export statements
  importStatements.push(`import { ${modelName} } from './${modelName}';`);
  exportStatements.push(`  ${modelName[0].toLowerCase()}${modelName.slice(1)}: ${modelName},`);
});

// Append import statements to indexContent
indexContent += `
${importStatements.join('\n')}

const adaptic = {
${exportStatements.join('\n')}
};

export default adaptic;
`;

// Write the index.ts file
const indexFilePath = path.join(FUNCTIONS_OUTPUT_PATH, 'index.ts');
try {
  fs.writeFileSync(indexFilePath, indexContent, 'utf-8');
} catch (error) {
  console.error('Failed to write index.ts:', error);
}

console.log('Function generation completed successfully.');

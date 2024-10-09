import { PrismaClient } from "@prisma/client";


declare global {
  // Allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  // Optional: Configure connection pool settings if needed
  // datasources: { db: { url: process.env.DATABASE_URL } },
});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;

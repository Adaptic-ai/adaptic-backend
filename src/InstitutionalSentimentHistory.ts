
  
import { InstitutionalSentimentHistory as InstitutionalSentimentHistoryType } from './generated/typegraphql-prisma/models/InstitutionalSentimentHistory';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the InstitutionalSentimentHistory model.
   */

  const selectionSet = `
    
  id
  timestamp
  symbol
  overallSentiment
  confidence
  secFilingsSentiment
  secFilingsConfidence
  secInsiderTradingSignal
  secInstitutionalFlowSignal
  secAnalystRevisionsSignal
  secGuidanceChangesSignal
  secShortTrend
  secMediumTrend
  secLongTrend
  insiderTradingOverall
  insiderBuyingSentiment
  insiderSellingSentiment
  insiderSignificantCount
  insiderTotalValue
  insiderRecentActivity
  analystOverall
  analystAverageRating
  analystAverageTarget
  analystUpgrades
  analystDowngrades
  analystTargetChanges
  analystConsensus
  optionsFlowOverall
  optionsCallFlow
  optionsPutFlow
  optionsUnusualActivity
  optionsBlockActivity
  optionsSweepActivity
  optionsSentimentScore
  institutionalFlowOverall
  institutionalNetFlow
  institutionalIncreasingPositions
  institutionalDecreasingPositions
  institutionalNewPositions
  institutionalClosedPositions
  darkPoolOverall
  darkPoolBuyPressure
  darkPoolSellPressure
  darkPoolVolumeSignificance
  darkPoolPriceImpact
  createdAt
  updatedAt

  `;

  export const InstitutionalSentimentHistory = {

    /**
     * Create a new InstitutionalSentimentHistory record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created InstitutionalSentimentHistory or null.
     */

    /**
     * Create a new InstitutionalSentimentHistory record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created InstitutionalSentimentHistory or null.
     */
    async create(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentHistoryType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: any = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : importedClient
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_INSTITUTIONALSENTIMENTHISTORY = gql`
              mutation createOneInstitutionalSentimentHistory($data: InstitutionalSentimentHistoryCreateInput!) {
                createOneInstitutionalSentimentHistory(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  overallSentiment: props.overallSentiment !== undefined ? props.overallSentiment : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  secFilingsSentiment: props.secFilingsSentiment !== undefined ? props.secFilingsSentiment : undefined,
  secFilingsConfidence: props.secFilingsConfidence !== undefined ? props.secFilingsConfidence : undefined,
  secInsiderTradingSignal: props.secInsiderTradingSignal !== undefined ? props.secInsiderTradingSignal : undefined,
  secInstitutionalFlowSignal: props.secInstitutionalFlowSignal !== undefined ? props.secInstitutionalFlowSignal : undefined,
  secAnalystRevisionsSignal: props.secAnalystRevisionsSignal !== undefined ? props.secAnalystRevisionsSignal : undefined,
  secGuidanceChangesSignal: props.secGuidanceChangesSignal !== undefined ? props.secGuidanceChangesSignal : undefined,
  secShortTrend: props.secShortTrend !== undefined ? props.secShortTrend : undefined,
  secMediumTrend: props.secMediumTrend !== undefined ? props.secMediumTrend : undefined,
  secLongTrend: props.secLongTrend !== undefined ? props.secLongTrend : undefined,
  insiderTradingOverall: props.insiderTradingOverall !== undefined ? props.insiderTradingOverall : undefined,
  insiderBuyingSentiment: props.insiderBuyingSentiment !== undefined ? props.insiderBuyingSentiment : undefined,
  insiderSellingSentiment: props.insiderSellingSentiment !== undefined ? props.insiderSellingSentiment : undefined,
  insiderSignificantCount: props.insiderSignificantCount !== undefined ? props.insiderSignificantCount : undefined,
  insiderTotalValue: props.insiderTotalValue !== undefined ? props.insiderTotalValue : undefined,
  insiderRecentActivity: props.insiderRecentActivity !== undefined ? props.insiderRecentActivity : undefined,
  analystOverall: props.analystOverall !== undefined ? props.analystOverall : undefined,
  analystAverageRating: props.analystAverageRating !== undefined ? props.analystAverageRating : undefined,
  analystAverageTarget: props.analystAverageTarget !== undefined ? props.analystAverageTarget : undefined,
  analystUpgrades: props.analystUpgrades !== undefined ? props.analystUpgrades : undefined,
  analystDowngrades: props.analystDowngrades !== undefined ? props.analystDowngrades : undefined,
  analystTargetChanges: props.analystTargetChanges !== undefined ? props.analystTargetChanges : undefined,
  analystConsensus: props.analystConsensus !== undefined ? props.analystConsensus : undefined,
  optionsFlowOverall: props.optionsFlowOverall !== undefined ? props.optionsFlowOverall : undefined,
  optionsCallFlow: props.optionsCallFlow !== undefined ? props.optionsCallFlow : undefined,
  optionsPutFlow: props.optionsPutFlow !== undefined ? props.optionsPutFlow : undefined,
  optionsUnusualActivity: props.optionsUnusualActivity !== undefined ? props.optionsUnusualActivity : undefined,
  optionsBlockActivity: props.optionsBlockActivity !== undefined ? props.optionsBlockActivity : undefined,
  optionsSweepActivity: props.optionsSweepActivity !== undefined ? props.optionsSweepActivity : undefined,
  optionsSentimentScore: props.optionsSentimentScore !== undefined ? props.optionsSentimentScore : undefined,
  institutionalFlowOverall: props.institutionalFlowOverall !== undefined ? props.institutionalFlowOverall : undefined,
  institutionalNetFlow: props.institutionalNetFlow !== undefined ? props.institutionalNetFlow : undefined,
  institutionalIncreasingPositions: props.institutionalIncreasingPositions !== undefined ? props.institutionalIncreasingPositions : undefined,
  institutionalDecreasingPositions: props.institutionalDecreasingPositions !== undefined ? props.institutionalDecreasingPositions : undefined,
  institutionalNewPositions: props.institutionalNewPositions !== undefined ? props.institutionalNewPositions : undefined,
  institutionalClosedPositions: props.institutionalClosedPositions !== undefined ? props.institutionalClosedPositions : undefined,
  darkPoolOverall: props.darkPoolOverall !== undefined ? props.darkPoolOverall : undefined,
  darkPoolBuyPressure: props.darkPoolBuyPressure !== undefined ? props.darkPoolBuyPressure : undefined,
  darkPoolSellPressure: props.darkPoolSellPressure !== undefined ? props.darkPoolSellPressure : undefined,
  darkPoolVolumeSignificance: props.darkPoolVolumeSignificance !== undefined ? props.darkPoolVolumeSignificance : undefined,
  darkPoolPriceImpact: props.darkPoolPriceImpact !== undefined ? props.darkPoolPriceImpact : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_INSTITUTIONALSENTIMENTHISTORY,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneInstitutionalSentimentHistory) {
            return response.data.createOneInstitutionalSentimentHistory;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check if this is a database connection error that we should retry
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && error.networkError.message?.includes('Failed to fetch'));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            console.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          console.error("Database error occurred:", error);
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple InstitutionalSentimentHistory records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentHistory objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: InstitutionalSentimentHistoryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_INSTITUTIONALSENTIMENTHISTORY = gql`
          mutation createManyInstitutionalSentimentHistory($data: [InstitutionalSentimentHistoryCreateManyInput!]!) {
            createManyInstitutionalSentimentHistory(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  overallSentiment: prop.overallSentiment !== undefined ? prop.overallSentiment : undefined,
  confidence: prop.confidence !== undefined ? prop.confidence : undefined,
  secFilingsSentiment: prop.secFilingsSentiment !== undefined ? prop.secFilingsSentiment : undefined,
  secFilingsConfidence: prop.secFilingsConfidence !== undefined ? prop.secFilingsConfidence : undefined,
  secInsiderTradingSignal: prop.secInsiderTradingSignal !== undefined ? prop.secInsiderTradingSignal : undefined,
  secInstitutionalFlowSignal: prop.secInstitutionalFlowSignal !== undefined ? prop.secInstitutionalFlowSignal : undefined,
  secAnalystRevisionsSignal: prop.secAnalystRevisionsSignal !== undefined ? prop.secAnalystRevisionsSignal : undefined,
  secGuidanceChangesSignal: prop.secGuidanceChangesSignal !== undefined ? prop.secGuidanceChangesSignal : undefined,
  secShortTrend: prop.secShortTrend !== undefined ? prop.secShortTrend : undefined,
  secMediumTrend: prop.secMediumTrend !== undefined ? prop.secMediumTrend : undefined,
  secLongTrend: prop.secLongTrend !== undefined ? prop.secLongTrend : undefined,
  insiderTradingOverall: prop.insiderTradingOverall !== undefined ? prop.insiderTradingOverall : undefined,
  insiderBuyingSentiment: prop.insiderBuyingSentiment !== undefined ? prop.insiderBuyingSentiment : undefined,
  insiderSellingSentiment: prop.insiderSellingSentiment !== undefined ? prop.insiderSellingSentiment : undefined,
  insiderSignificantCount: prop.insiderSignificantCount !== undefined ? prop.insiderSignificantCount : undefined,
  insiderTotalValue: prop.insiderTotalValue !== undefined ? prop.insiderTotalValue : undefined,
  insiderRecentActivity: prop.insiderRecentActivity !== undefined ? prop.insiderRecentActivity : undefined,
  analystOverall: prop.analystOverall !== undefined ? prop.analystOverall : undefined,
  analystAverageRating: prop.analystAverageRating !== undefined ? prop.analystAverageRating : undefined,
  analystAverageTarget: prop.analystAverageTarget !== undefined ? prop.analystAverageTarget : undefined,
  analystUpgrades: prop.analystUpgrades !== undefined ? prop.analystUpgrades : undefined,
  analystDowngrades: prop.analystDowngrades !== undefined ? prop.analystDowngrades : undefined,
  analystTargetChanges: prop.analystTargetChanges !== undefined ? prop.analystTargetChanges : undefined,
  analystConsensus: prop.analystConsensus !== undefined ? prop.analystConsensus : undefined,
  optionsFlowOverall: prop.optionsFlowOverall !== undefined ? prop.optionsFlowOverall : undefined,
  optionsCallFlow: prop.optionsCallFlow !== undefined ? prop.optionsCallFlow : undefined,
  optionsPutFlow: prop.optionsPutFlow !== undefined ? prop.optionsPutFlow : undefined,
  optionsUnusualActivity: prop.optionsUnusualActivity !== undefined ? prop.optionsUnusualActivity : undefined,
  optionsBlockActivity: prop.optionsBlockActivity !== undefined ? prop.optionsBlockActivity : undefined,
  optionsSweepActivity: prop.optionsSweepActivity !== undefined ? prop.optionsSweepActivity : undefined,
  optionsSentimentScore: prop.optionsSentimentScore !== undefined ? prop.optionsSentimentScore : undefined,
  institutionalFlowOverall: prop.institutionalFlowOverall !== undefined ? prop.institutionalFlowOverall : undefined,
  institutionalNetFlow: prop.institutionalNetFlow !== undefined ? prop.institutionalNetFlow : undefined,
  institutionalIncreasingPositions: prop.institutionalIncreasingPositions !== undefined ? prop.institutionalIncreasingPositions : undefined,
  institutionalDecreasingPositions: prop.institutionalDecreasingPositions !== undefined ? prop.institutionalDecreasingPositions : undefined,
  institutionalNewPositions: prop.institutionalNewPositions !== undefined ? prop.institutionalNewPositions : undefined,
  institutionalClosedPositions: prop.institutionalClosedPositions !== undefined ? prop.institutionalClosedPositions : undefined,
  darkPoolOverall: prop.darkPoolOverall !== undefined ? prop.darkPoolOverall : undefined,
  darkPoolBuyPressure: prop.darkPoolBuyPressure !== undefined ? prop.darkPoolBuyPressure : undefined,
  darkPoolSellPressure: prop.darkPoolSellPressure !== undefined ? prop.darkPoolSellPressure : undefined,
  darkPoolVolumeSignificance: prop.darkPoolVolumeSignificance !== undefined ? prop.darkPoolVolumeSignificance : undefined,
  darkPoolPriceImpact: prop.darkPoolPriceImpact !== undefined ? prop.darkPoolPriceImpact : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyInstitutionalSentimentHistory) {
          return response.data.createManyInstitutionalSentimentHistory;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single InstitutionalSentimentHistory record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentHistory or null.
   */
  async update(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentHistoryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_INSTITUTIONALSENTIMENTHISTORY = gql`
          mutation updateOneInstitutionalSentimentHistory($data: InstitutionalSentimentHistoryUpdateInput!, $where: InstitutionalSentimentHistoryWhereUniqueInput!) {
            updateOneInstitutionalSentimentHistory(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  overallSentiment: props.overallSentiment !== undefined ? {
            set: props.overallSentiment 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  secFilingsSentiment: props.secFilingsSentiment !== undefined ? {
            set: props.secFilingsSentiment 
           } : undefined,
  secFilingsConfidence: props.secFilingsConfidence !== undefined ? {
            set: props.secFilingsConfidence 
           } : undefined,
  secInsiderTradingSignal: props.secInsiderTradingSignal !== undefined ? {
            set: props.secInsiderTradingSignal 
           } : undefined,
  secInstitutionalFlowSignal: props.secInstitutionalFlowSignal !== undefined ? {
            set: props.secInstitutionalFlowSignal 
           } : undefined,
  secAnalystRevisionsSignal: props.secAnalystRevisionsSignal !== undefined ? {
            set: props.secAnalystRevisionsSignal 
           } : undefined,
  secGuidanceChangesSignal: props.secGuidanceChangesSignal !== undefined ? {
            set: props.secGuidanceChangesSignal 
           } : undefined,
  secShortTrend: props.secShortTrend !== undefined ? {
            set: props.secShortTrend 
           } : undefined,
  secMediumTrend: props.secMediumTrend !== undefined ? {
            set: props.secMediumTrend 
           } : undefined,
  secLongTrend: props.secLongTrend !== undefined ? {
            set: props.secLongTrend 
           } : undefined,
  insiderTradingOverall: props.insiderTradingOverall !== undefined ? {
            set: props.insiderTradingOverall 
           } : undefined,
  insiderBuyingSentiment: props.insiderBuyingSentiment !== undefined ? {
            set: props.insiderBuyingSentiment 
           } : undefined,
  insiderSellingSentiment: props.insiderSellingSentiment !== undefined ? {
            set: props.insiderSellingSentiment 
           } : undefined,
  insiderSignificantCount: props.insiderSignificantCount !== undefined ? {
            set: props.insiderSignificantCount 
           } : undefined,
  insiderTotalValue: props.insiderTotalValue !== undefined ? {
            set: props.insiderTotalValue 
           } : undefined,
  insiderRecentActivity: props.insiderRecentActivity !== undefined ? {
            set: props.insiderRecentActivity 
           } : undefined,
  analystOverall: props.analystOverall !== undefined ? {
            set: props.analystOverall 
           } : undefined,
  analystAverageRating: props.analystAverageRating !== undefined ? {
            set: props.analystAverageRating 
           } : undefined,
  analystAverageTarget: props.analystAverageTarget !== undefined ? {
            set: props.analystAverageTarget 
           } : undefined,
  analystUpgrades: props.analystUpgrades !== undefined ? {
            set: props.analystUpgrades 
           } : undefined,
  analystDowngrades: props.analystDowngrades !== undefined ? {
            set: props.analystDowngrades 
           } : undefined,
  analystTargetChanges: props.analystTargetChanges !== undefined ? {
            set: props.analystTargetChanges 
           } : undefined,
  analystConsensus: props.analystConsensus !== undefined ? {
            set: props.analystConsensus 
           } : undefined,
  optionsFlowOverall: props.optionsFlowOverall !== undefined ? {
            set: props.optionsFlowOverall 
           } : undefined,
  optionsCallFlow: props.optionsCallFlow !== undefined ? {
            set: props.optionsCallFlow 
           } : undefined,
  optionsPutFlow: props.optionsPutFlow !== undefined ? {
            set: props.optionsPutFlow 
           } : undefined,
  optionsUnusualActivity: props.optionsUnusualActivity !== undefined ? {
            set: props.optionsUnusualActivity 
           } : undefined,
  optionsBlockActivity: props.optionsBlockActivity !== undefined ? {
            set: props.optionsBlockActivity 
           } : undefined,
  optionsSweepActivity: props.optionsSweepActivity !== undefined ? {
            set: props.optionsSweepActivity 
           } : undefined,
  optionsSentimentScore: props.optionsSentimentScore !== undefined ? {
            set: props.optionsSentimentScore 
           } : undefined,
  institutionalFlowOverall: props.institutionalFlowOverall !== undefined ? {
            set: props.institutionalFlowOverall 
           } : undefined,
  institutionalNetFlow: props.institutionalNetFlow !== undefined ? {
            set: props.institutionalNetFlow 
           } : undefined,
  institutionalIncreasingPositions: props.institutionalIncreasingPositions !== undefined ? {
            set: props.institutionalIncreasingPositions 
           } : undefined,
  institutionalDecreasingPositions: props.institutionalDecreasingPositions !== undefined ? {
            set: props.institutionalDecreasingPositions 
           } : undefined,
  institutionalNewPositions: props.institutionalNewPositions !== undefined ? {
            set: props.institutionalNewPositions 
           } : undefined,
  institutionalClosedPositions: props.institutionalClosedPositions !== undefined ? {
            set: props.institutionalClosedPositions 
           } : undefined,
  darkPoolOverall: props.darkPoolOverall !== undefined ? {
            set: props.darkPoolOverall 
           } : undefined,
  darkPoolBuyPressure: props.darkPoolBuyPressure !== undefined ? {
            set: props.darkPoolBuyPressure 
           } : undefined,
  darkPoolSellPressure: props.darkPoolSellPressure !== undefined ? {
            set: props.darkPoolSellPressure 
           } : undefined,
  darkPoolVolumeSignificance: props.darkPoolVolumeSignificance !== undefined ? {
            set: props.darkPoolVolumeSignificance 
           } : undefined,
  darkPoolPriceImpact: props.darkPoolPriceImpact !== undefined ? {
            set: props.darkPoolPriceImpact 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneInstitutionalSentimentHistory) {
          return response.data.updateOneInstitutionalSentimentHistory;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single InstitutionalSentimentHistory record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated InstitutionalSentimentHistory or null.
   */
  async upsert(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentHistoryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_INSTITUTIONALSENTIMENTHISTORY = gql`
          mutation upsertOneInstitutionalSentimentHistory($where: InstitutionalSentimentHistoryWhereUniqueInput!, $create: InstitutionalSentimentHistoryCreateInput!, $update: InstitutionalSentimentHistoryUpdateInput!) {
            upsertOneInstitutionalSentimentHistory(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
          create: {
        timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  overallSentiment: props.overallSentiment !== undefined ? props.overallSentiment : undefined,
  confidence: props.confidence !== undefined ? props.confidence : undefined,
  secFilingsSentiment: props.secFilingsSentiment !== undefined ? props.secFilingsSentiment : undefined,
  secFilingsConfidence: props.secFilingsConfidence !== undefined ? props.secFilingsConfidence : undefined,
  secInsiderTradingSignal: props.secInsiderTradingSignal !== undefined ? props.secInsiderTradingSignal : undefined,
  secInstitutionalFlowSignal: props.secInstitutionalFlowSignal !== undefined ? props.secInstitutionalFlowSignal : undefined,
  secAnalystRevisionsSignal: props.secAnalystRevisionsSignal !== undefined ? props.secAnalystRevisionsSignal : undefined,
  secGuidanceChangesSignal: props.secGuidanceChangesSignal !== undefined ? props.secGuidanceChangesSignal : undefined,
  secShortTrend: props.secShortTrend !== undefined ? props.secShortTrend : undefined,
  secMediumTrend: props.secMediumTrend !== undefined ? props.secMediumTrend : undefined,
  secLongTrend: props.secLongTrend !== undefined ? props.secLongTrend : undefined,
  insiderTradingOverall: props.insiderTradingOverall !== undefined ? props.insiderTradingOverall : undefined,
  insiderBuyingSentiment: props.insiderBuyingSentiment !== undefined ? props.insiderBuyingSentiment : undefined,
  insiderSellingSentiment: props.insiderSellingSentiment !== undefined ? props.insiderSellingSentiment : undefined,
  insiderSignificantCount: props.insiderSignificantCount !== undefined ? props.insiderSignificantCount : undefined,
  insiderTotalValue: props.insiderTotalValue !== undefined ? props.insiderTotalValue : undefined,
  insiderRecentActivity: props.insiderRecentActivity !== undefined ? props.insiderRecentActivity : undefined,
  analystOverall: props.analystOverall !== undefined ? props.analystOverall : undefined,
  analystAverageRating: props.analystAverageRating !== undefined ? props.analystAverageRating : undefined,
  analystAverageTarget: props.analystAverageTarget !== undefined ? props.analystAverageTarget : undefined,
  analystUpgrades: props.analystUpgrades !== undefined ? props.analystUpgrades : undefined,
  analystDowngrades: props.analystDowngrades !== undefined ? props.analystDowngrades : undefined,
  analystTargetChanges: props.analystTargetChanges !== undefined ? props.analystTargetChanges : undefined,
  analystConsensus: props.analystConsensus !== undefined ? props.analystConsensus : undefined,
  optionsFlowOverall: props.optionsFlowOverall !== undefined ? props.optionsFlowOverall : undefined,
  optionsCallFlow: props.optionsCallFlow !== undefined ? props.optionsCallFlow : undefined,
  optionsPutFlow: props.optionsPutFlow !== undefined ? props.optionsPutFlow : undefined,
  optionsUnusualActivity: props.optionsUnusualActivity !== undefined ? props.optionsUnusualActivity : undefined,
  optionsBlockActivity: props.optionsBlockActivity !== undefined ? props.optionsBlockActivity : undefined,
  optionsSweepActivity: props.optionsSweepActivity !== undefined ? props.optionsSweepActivity : undefined,
  optionsSentimentScore: props.optionsSentimentScore !== undefined ? props.optionsSentimentScore : undefined,
  institutionalFlowOverall: props.institutionalFlowOverall !== undefined ? props.institutionalFlowOverall : undefined,
  institutionalNetFlow: props.institutionalNetFlow !== undefined ? props.institutionalNetFlow : undefined,
  institutionalIncreasingPositions: props.institutionalIncreasingPositions !== undefined ? props.institutionalIncreasingPositions : undefined,
  institutionalDecreasingPositions: props.institutionalDecreasingPositions !== undefined ? props.institutionalDecreasingPositions : undefined,
  institutionalNewPositions: props.institutionalNewPositions !== undefined ? props.institutionalNewPositions : undefined,
  institutionalClosedPositions: props.institutionalClosedPositions !== undefined ? props.institutionalClosedPositions : undefined,
  darkPoolOverall: props.darkPoolOverall !== undefined ? props.darkPoolOverall : undefined,
  darkPoolBuyPressure: props.darkPoolBuyPressure !== undefined ? props.darkPoolBuyPressure : undefined,
  darkPoolSellPressure: props.darkPoolSellPressure !== undefined ? props.darkPoolSellPressure : undefined,
  darkPoolVolumeSignificance: props.darkPoolVolumeSignificance !== undefined ? props.darkPoolVolumeSignificance : undefined,
  darkPoolPriceImpact: props.darkPoolPriceImpact !== undefined ? props.darkPoolPriceImpact : undefined,
      },
          update: {
      timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  overallSentiment: props.overallSentiment !== undefined ? {
            set: props.overallSentiment 
           } : undefined,
  confidence: props.confidence !== undefined ? {
            set: props.confidence 
           } : undefined,
  secFilingsSentiment: props.secFilingsSentiment !== undefined ? {
            set: props.secFilingsSentiment 
           } : undefined,
  secFilingsConfidence: props.secFilingsConfidence !== undefined ? {
            set: props.secFilingsConfidence 
           } : undefined,
  secInsiderTradingSignal: props.secInsiderTradingSignal !== undefined ? {
            set: props.secInsiderTradingSignal 
           } : undefined,
  secInstitutionalFlowSignal: props.secInstitutionalFlowSignal !== undefined ? {
            set: props.secInstitutionalFlowSignal 
           } : undefined,
  secAnalystRevisionsSignal: props.secAnalystRevisionsSignal !== undefined ? {
            set: props.secAnalystRevisionsSignal 
           } : undefined,
  secGuidanceChangesSignal: props.secGuidanceChangesSignal !== undefined ? {
            set: props.secGuidanceChangesSignal 
           } : undefined,
  secShortTrend: props.secShortTrend !== undefined ? {
            set: props.secShortTrend 
           } : undefined,
  secMediumTrend: props.secMediumTrend !== undefined ? {
            set: props.secMediumTrend 
           } : undefined,
  secLongTrend: props.secLongTrend !== undefined ? {
            set: props.secLongTrend 
           } : undefined,
  insiderTradingOverall: props.insiderTradingOverall !== undefined ? {
            set: props.insiderTradingOverall 
           } : undefined,
  insiderBuyingSentiment: props.insiderBuyingSentiment !== undefined ? {
            set: props.insiderBuyingSentiment 
           } : undefined,
  insiderSellingSentiment: props.insiderSellingSentiment !== undefined ? {
            set: props.insiderSellingSentiment 
           } : undefined,
  insiderSignificantCount: props.insiderSignificantCount !== undefined ? {
            set: props.insiderSignificantCount 
           } : undefined,
  insiderTotalValue: props.insiderTotalValue !== undefined ? {
            set: props.insiderTotalValue 
           } : undefined,
  insiderRecentActivity: props.insiderRecentActivity !== undefined ? {
            set: props.insiderRecentActivity 
           } : undefined,
  analystOverall: props.analystOverall !== undefined ? {
            set: props.analystOverall 
           } : undefined,
  analystAverageRating: props.analystAverageRating !== undefined ? {
            set: props.analystAverageRating 
           } : undefined,
  analystAverageTarget: props.analystAverageTarget !== undefined ? {
            set: props.analystAverageTarget 
           } : undefined,
  analystUpgrades: props.analystUpgrades !== undefined ? {
            set: props.analystUpgrades 
           } : undefined,
  analystDowngrades: props.analystDowngrades !== undefined ? {
            set: props.analystDowngrades 
           } : undefined,
  analystTargetChanges: props.analystTargetChanges !== undefined ? {
            set: props.analystTargetChanges 
           } : undefined,
  analystConsensus: props.analystConsensus !== undefined ? {
            set: props.analystConsensus 
           } : undefined,
  optionsFlowOverall: props.optionsFlowOverall !== undefined ? {
            set: props.optionsFlowOverall 
           } : undefined,
  optionsCallFlow: props.optionsCallFlow !== undefined ? {
            set: props.optionsCallFlow 
           } : undefined,
  optionsPutFlow: props.optionsPutFlow !== undefined ? {
            set: props.optionsPutFlow 
           } : undefined,
  optionsUnusualActivity: props.optionsUnusualActivity !== undefined ? {
            set: props.optionsUnusualActivity 
           } : undefined,
  optionsBlockActivity: props.optionsBlockActivity !== undefined ? {
            set: props.optionsBlockActivity 
           } : undefined,
  optionsSweepActivity: props.optionsSweepActivity !== undefined ? {
            set: props.optionsSweepActivity 
           } : undefined,
  optionsSentimentScore: props.optionsSentimentScore !== undefined ? {
            set: props.optionsSentimentScore 
           } : undefined,
  institutionalFlowOverall: props.institutionalFlowOverall !== undefined ? {
            set: props.institutionalFlowOverall 
           } : undefined,
  institutionalNetFlow: props.institutionalNetFlow !== undefined ? {
            set: props.institutionalNetFlow 
           } : undefined,
  institutionalIncreasingPositions: props.institutionalIncreasingPositions !== undefined ? {
            set: props.institutionalIncreasingPositions 
           } : undefined,
  institutionalDecreasingPositions: props.institutionalDecreasingPositions !== undefined ? {
            set: props.institutionalDecreasingPositions 
           } : undefined,
  institutionalNewPositions: props.institutionalNewPositions !== undefined ? {
            set: props.institutionalNewPositions 
           } : undefined,
  institutionalClosedPositions: props.institutionalClosedPositions !== undefined ? {
            set: props.institutionalClosedPositions 
           } : undefined,
  darkPoolOverall: props.darkPoolOverall !== undefined ? {
            set: props.darkPoolOverall 
           } : undefined,
  darkPoolBuyPressure: props.darkPoolBuyPressure !== undefined ? {
            set: props.darkPoolBuyPressure 
           } : undefined,
  darkPoolSellPressure: props.darkPoolSellPressure !== undefined ? {
            set: props.darkPoolSellPressure 
           } : undefined,
  darkPoolVolumeSignificance: props.darkPoolVolumeSignificance !== undefined ? {
            set: props.darkPoolVolumeSignificance 
           } : undefined,
  darkPoolPriceImpact: props.darkPoolPriceImpact !== undefined ? {
            set: props.darkPoolPriceImpact 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneInstitutionalSentimentHistory) {
          return response.data.upsertOneInstitutionalSentimentHistory;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple InstitutionalSentimentHistory records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of InstitutionalSentimentHistory objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: InstitutionalSentimentHistoryType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_INSTITUTIONALSENTIMENTHISTORY = gql`
          mutation updateManyInstitutionalSentimentHistory($data: [InstitutionalSentimentHistoryCreateManyInput!]!) {
            updateManyInstitutionalSentimentHistory(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  overallSentiment: prop.overallSentiment !== undefined ? {
            set: prop.overallSentiment 
           } : undefined,
  confidence: prop.confidence !== undefined ? {
            set: prop.confidence 
           } : undefined,
  secFilingsSentiment: prop.secFilingsSentiment !== undefined ? {
            set: prop.secFilingsSentiment 
           } : undefined,
  secFilingsConfidence: prop.secFilingsConfidence !== undefined ? {
            set: prop.secFilingsConfidence 
           } : undefined,
  secInsiderTradingSignal: prop.secInsiderTradingSignal !== undefined ? {
            set: prop.secInsiderTradingSignal 
           } : undefined,
  secInstitutionalFlowSignal: prop.secInstitutionalFlowSignal !== undefined ? {
            set: prop.secInstitutionalFlowSignal 
           } : undefined,
  secAnalystRevisionsSignal: prop.secAnalystRevisionsSignal !== undefined ? {
            set: prop.secAnalystRevisionsSignal 
           } : undefined,
  secGuidanceChangesSignal: prop.secGuidanceChangesSignal !== undefined ? {
            set: prop.secGuidanceChangesSignal 
           } : undefined,
  secShortTrend: prop.secShortTrend !== undefined ? {
            set: prop.secShortTrend 
           } : undefined,
  secMediumTrend: prop.secMediumTrend !== undefined ? {
            set: prop.secMediumTrend 
           } : undefined,
  secLongTrend: prop.secLongTrend !== undefined ? {
            set: prop.secLongTrend 
           } : undefined,
  insiderTradingOverall: prop.insiderTradingOverall !== undefined ? {
            set: prop.insiderTradingOverall 
           } : undefined,
  insiderBuyingSentiment: prop.insiderBuyingSentiment !== undefined ? {
            set: prop.insiderBuyingSentiment 
           } : undefined,
  insiderSellingSentiment: prop.insiderSellingSentiment !== undefined ? {
            set: prop.insiderSellingSentiment 
           } : undefined,
  insiderSignificantCount: prop.insiderSignificantCount !== undefined ? {
            set: prop.insiderSignificantCount 
           } : undefined,
  insiderTotalValue: prop.insiderTotalValue !== undefined ? {
            set: prop.insiderTotalValue 
           } : undefined,
  insiderRecentActivity: prop.insiderRecentActivity !== undefined ? {
            set: prop.insiderRecentActivity 
           } : undefined,
  analystOverall: prop.analystOverall !== undefined ? {
            set: prop.analystOverall 
           } : undefined,
  analystAverageRating: prop.analystAverageRating !== undefined ? {
            set: prop.analystAverageRating 
           } : undefined,
  analystAverageTarget: prop.analystAverageTarget !== undefined ? {
            set: prop.analystAverageTarget 
           } : undefined,
  analystUpgrades: prop.analystUpgrades !== undefined ? {
            set: prop.analystUpgrades 
           } : undefined,
  analystDowngrades: prop.analystDowngrades !== undefined ? {
            set: prop.analystDowngrades 
           } : undefined,
  analystTargetChanges: prop.analystTargetChanges !== undefined ? {
            set: prop.analystTargetChanges 
           } : undefined,
  analystConsensus: prop.analystConsensus !== undefined ? {
            set: prop.analystConsensus 
           } : undefined,
  optionsFlowOverall: prop.optionsFlowOverall !== undefined ? {
            set: prop.optionsFlowOverall 
           } : undefined,
  optionsCallFlow: prop.optionsCallFlow !== undefined ? {
            set: prop.optionsCallFlow 
           } : undefined,
  optionsPutFlow: prop.optionsPutFlow !== undefined ? {
            set: prop.optionsPutFlow 
           } : undefined,
  optionsUnusualActivity: prop.optionsUnusualActivity !== undefined ? {
            set: prop.optionsUnusualActivity 
           } : undefined,
  optionsBlockActivity: prop.optionsBlockActivity !== undefined ? {
            set: prop.optionsBlockActivity 
           } : undefined,
  optionsSweepActivity: prop.optionsSweepActivity !== undefined ? {
            set: prop.optionsSweepActivity 
           } : undefined,
  optionsSentimentScore: prop.optionsSentimentScore !== undefined ? {
            set: prop.optionsSentimentScore 
           } : undefined,
  institutionalFlowOverall: prop.institutionalFlowOverall !== undefined ? {
            set: prop.institutionalFlowOverall 
           } : undefined,
  institutionalNetFlow: prop.institutionalNetFlow !== undefined ? {
            set: prop.institutionalNetFlow 
           } : undefined,
  institutionalIncreasingPositions: prop.institutionalIncreasingPositions !== undefined ? {
            set: prop.institutionalIncreasingPositions 
           } : undefined,
  institutionalDecreasingPositions: prop.institutionalDecreasingPositions !== undefined ? {
            set: prop.institutionalDecreasingPositions 
           } : undefined,
  institutionalNewPositions: prop.institutionalNewPositions !== undefined ? {
            set: prop.institutionalNewPositions 
           } : undefined,
  institutionalClosedPositions: prop.institutionalClosedPositions !== undefined ? {
            set: prop.institutionalClosedPositions 
           } : undefined,
  darkPoolOverall: prop.darkPoolOverall !== undefined ? {
            set: prop.darkPoolOverall 
           } : undefined,
  darkPoolBuyPressure: prop.darkPoolBuyPressure !== undefined ? {
            set: prop.darkPoolBuyPressure 
           } : undefined,
  darkPoolSellPressure: prop.darkPoolSellPressure !== undefined ? {
            set: prop.darkPoolSellPressure 
           } : undefined,
  darkPoolVolumeSignificance: prop.darkPoolVolumeSignificance !== undefined ? {
            set: prop.darkPoolVolumeSignificance 
           } : undefined,
  darkPoolPriceImpact: prop.darkPoolPriceImpact !== undefined ? {
            set: prop.darkPoolPriceImpact 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyInstitutionalSentimentHistory) {
          return response.data.updateManyInstitutionalSentimentHistory;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single InstitutionalSentimentHistory record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted InstitutionalSentimentHistory or null.
   */
  async delete(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentHistoryType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_INSTITUTIONALSENTIMENTHISTORY = gql`
          mutation deleteOneInstitutionalSentimentHistory($where: InstitutionalSentimentHistoryWhereUniqueInput!) {
            deleteOneInstitutionalSentimentHistory(where: $where) {
              id
            }
          }`;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          }
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneInstitutionalSentimentHistory) {
          return response.data.deleteOneInstitutionalSentimentHistory;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single InstitutionalSentimentHistory record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved InstitutionalSentimentHistory or null.
   */
  async get(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InstitutionalSentimentHistoryType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_INSTITUTIONALSENTIMENTHISTORY = gql`
          query getInstitutionalSentimentHistory($where: InstitutionalSentimentHistoryWhereUniqueInput!) {
            getInstitutionalSentimentHistory(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getInstitutionalSentimentHistory ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentHistory found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all InstitutionalSentimentHistories records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of InstitutionalSentimentHistory records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<InstitutionalSentimentHistoryType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_INSTITUTIONALSENTIMENTHISTORY = gql`
          query getAllInstitutionalSentimentHistory {
            institutionalSentimentHistories {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_INSTITUTIONALSENTIMENTHISTORY,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.institutionalSentimentHistories ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentHistory found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple InstitutionalSentimentHistory records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found InstitutionalSentimentHistory records or null.
   */
  async findMany(props: InstitutionalSentimentHistoryType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<InstitutionalSentimentHistoryType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_INSTITUTIONALSENTIMENTHISTORY = gql`
          query findManyInstitutionalSentimentHistory($where: InstitutionalSentimentHistoryWhereInput!) {
            institutionalSentimentHistories(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_INSTITUTIONALSENTIMENTHISTORY,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.institutionalsentimenthistories) {
          return response.data.institutionalSentimentHistories;
        } else {
          return [] as InstitutionalSentimentHistoryType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No InstitutionalSentimentHistory found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};

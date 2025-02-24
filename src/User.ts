
  
import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the User model.
   */

  const selectionSet = `
    
  id
  name
  email
  emailVerified
  image
  createdAt
  updatedAt
  role
  bio
  jobTitle
  currentAccount
  customer {
    id
    authUserId
    name
    plan
    stripeCustomerId
    stripeSubscriptionId
    stripePriceId
    stripeCurrentPeriodEnd
    createdAt
    updatedAt
  }
  customerId
  accounts {
    id
    userId
    type
    provider
    providerAccountId
    refresh_token
    access_token
    expires_at
    token_type
    scope
    id_token
    session_state
    createdAt
    updatedAt
  }
  sessions {
    id
    sessionToken
    userId
    expires
    createdAt
    updatedAt
  }
  authenticators {
    id
    userId
    credentialID
    publicKey
    counter
    createdAt
    updatedAt
  }
  plan
  alpacaAccounts {
    id
    type
    APIKey
    APISecret
    configuration
    marketOpen
    realTime
    tradeAllocationPct
    minPercentageChange
    volumeThreshold
    enablePortfolioTrailingStop
    portfolioTrailPercent
    portfolioProfitThresholdPercent
    reducedPortfolioTrailPercent
    userId
    createdAt
    updatedAt
    alerts {
      id
      alpacaAccountId
      message
      type
      isRead
      createdAt
      updatedAt
    }
  }
  openaiAPIKey
  openaiModel

  `;

  export const User = {

    /**
     * Create a new User record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created User or null.
     */

    async create(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

    const CREATE_ONE_USER = gql`
        mutation createOneUser($data: UserCreateInput!) {
          createOneUser(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneUser) {
        return response.data.createOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple User records.
   * @param props - Array of User objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const CREATE_MANY_USER = gql`
      mutation createManyUser($data: [UserCreateManyInput!]!) {
        createManyUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentAccount: prop.currentAccount !== undefined ? prop.currentAccount : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? prop.openaiAPIKey : undefined,
  openaiModel: prop.openaiModel !== undefined ? prop.openaiModel : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyUser) {
        return response.data.createManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyUser:', error);
      throw error;
    }
  },

  /**
   * Update a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async update(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPDATE_ONE_USER = gql`
      mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateOneUser(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer ? 
  typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && (Object.keys(props.customer)[0] === 'id' || Object.keys(props.customer)[0] === 'symbol')
? {
  connect: {
    id: props.customer.id
  }
} : { upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id
          } : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            equals: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            equals: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name
          } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
  Array.isArray(props.accounts) && props.accounts.length > 0 && props.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            set: item.providerAccountId
          } : undefined,
        refresh_token: item.refresh_token !== undefined ? {
            set: item.refresh_token
          } : undefined,
        access_token: item.access_token !== undefined ? {
            set: item.access_token
          } : undefined,
        expires_at: item.expires_at !== undefined ? {
            set: item.expires_at
          } : undefined,
        token_type: item.token_type !== undefined ? {
            set: item.token_type
          } : undefined,
        scope: item.scope !== undefined ? {
            set: item.scope
          } : undefined,
        id_token: item.id_token !== undefined ? {
            set: item.id_token
          } : undefined,
        session_state: item.session_state !== undefined ? {
            set: item.session_state
          } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? 
  Array.isArray(props.sessions) && props.sessions.length > 0 && props.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sessionToken: item.sessionToken !== undefined ? {
            set: item.sessionToken
          } : undefined,
        expires: item.expires !== undefined ? {
            set: item.expires
          } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
  Array.isArray(props.authenticators) && props.authenticators.length > 0 && props.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        credentialID: item.credentialID !== undefined ? {
            set: item.credentialID
          } : undefined,
        publicKey: item.publicKey !== undefined ? {
            set: item.publicKey
          } : undefined,
        counter: item.counter !== undefined ? {
            set: item.counter
          } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
  Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 && props.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          message: item.message !== undefined ? {
              set: item.message
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          isRead: item.isRead !== undefined ? {
              set: item.isRead
            } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneUser) {
        return response.data.updateOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneUser:', error);
      throw error;
    }
  },

  /**
   * Upsert a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated User or null.
   */
  async upsert(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPSERT_ONE_USER = gql`
      mutation upsertOneUser($where: UserWhereUniqueInput!, $create: UserCreateInput!, $update: UserUpdateInput!) {
        upsertOneUser(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
      },
      create: {
    name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentAccount: props.currentAccount !== undefined ? props.currentAccount : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? props.openaiAPIKey : undefined,
  openaiModel: props.openaiModel !== undefined ? props.openaiModel : undefined,
  customer: props.customer ? 
    typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && Object.keys(props.customer)[0] === 'id'
    ? { connect: {
        id: props.customer.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
    Array.isArray(props.accounts) && props.accounts.length > 0 &&  props.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.accounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? 
    Array.isArray(props.sessions) && props.sessions.length > 0 &&  props.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.sessions.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
    Array.isArray(props.authenticators) && props.authenticators.length > 0 &&  props.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.authenticators.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
    Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 &&  props.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.alpacaAccounts.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId 
           } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  emailVerified: props.emailVerified !== undefined ? {
            set: props.emailVerified 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentAccount: props.currentAccount !== undefined ? {
            set: props.currentAccount 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  openaiAPIKey: props.openaiAPIKey !== undefined ? {
            set: props.openaiAPIKey 
           } : undefined,
  openaiModel: props.openaiModel !== undefined ? {
            set: props.openaiModel 
           } : undefined,
  customer: props.customer ? 
  typeof props.customer === 'object' && Object.keys(props.customer).length === 1 && (Object.keys(props.customer)[0] === 'id' || Object.keys(props.customer)[0] === 'symbol')
? {
  connect: {
    id: props.customer.id
  }
} : { upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id
          } : undefined,
        authUserId: props.customer.authUserId !== undefined ? {
            equals: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            equals: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            equals: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            equals: props.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId
          } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name
          } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan
          } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? 
  Array.isArray(props.accounts) && props.accounts.length > 0 && props.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            set: item.providerAccountId
          } : undefined,
        refresh_token: item.refresh_token !== undefined ? {
            set: item.refresh_token
          } : undefined,
        access_token: item.access_token !== undefined ? {
            set: item.access_token
          } : undefined,
        expires_at: item.expires_at !== undefined ? {
            set: item.expires_at
          } : undefined,
        token_type: item.token_type !== undefined ? {
            set: item.token_type
          } : undefined,
        scope: item.scope !== undefined ? {
            set: item.scope
          } : undefined,
        id_token: item.id_token !== undefined ? {
            set: item.id_token
          } : undefined,
        session_state: item.session_state !== undefined ? {
            set: item.session_state
          } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: props.sessions ? 
  Array.isArray(props.sessions) && props.sessions.length > 0 && props.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sessionToken: item.sessionToken !== undefined ? {
            set: item.sessionToken
          } : undefined,
        expires: item.expires !== undefined ? {
            set: item.expires
          } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? 
  Array.isArray(props.authenticators) && props.authenticators.length > 0 && props.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        credentialID: item.credentialID !== undefined ? {
            set: item.credentialID
          } : undefined,
        publicKey: item.publicKey !== undefined ? {
            set: item.publicKey
          } : undefined,
        counter: item.counter !== undefined ? {
            set: item.counter
          } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: props.alpacaAccounts ? 
  Array.isArray(props.alpacaAccounts) && props.alpacaAccounts.length > 0 && props.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: props.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: props.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          message: item.message !== undefined ? {
              set: item.message
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          isRead: item.isRead !== undefined ? {
              set: item.isRead
            } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneUser) {
        return response.data.upsertOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneUser:', error);
      throw error;
    }
  },

  /**
   * Update multiple User records.
   * @param props - Array of User objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: UserType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPDATE_MANY_USER = gql`
      mutation updateManyUser($data: [UserCreateManyInput!]!) {
        updateManyUser(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  email: prop.email !== undefined ? {
            set: prop.email 
           } : undefined,
  emailVerified: prop.emailVerified !== undefined ? {
            set: prop.emailVerified 
           } : undefined,
  image: prop.image !== undefined ? {
            set: prop.image 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  role: prop.role !== undefined ? {
            set: prop.role 
           } : undefined,
  bio: prop.bio !== undefined ? {
            set: prop.bio 
           } : undefined,
  jobTitle: prop.jobTitle !== undefined ? {
            set: prop.jobTitle 
           } : undefined,
  currentAccount: prop.currentAccount !== undefined ? {
            set: prop.currentAccount 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  openaiAPIKey: prop.openaiAPIKey !== undefined ? {
            set: prop.openaiAPIKey 
           } : undefined,
  openaiModel: prop.openaiModel !== undefined ? {
            set: prop.openaiModel 
           } : undefined,
  customer: prop.customer ? 
  typeof prop.customer === 'object' && Object.keys(prop.customer).length === 1 && (Object.keys(prop.customer)[0] === 'id' || Object.keys(prop.customer)[0] === 'symbol')
? {
  connect: {
    id: prop.customer.id
  }
} : { upsert: {
      where: {
        id: prop.customer.id !== undefined ? {
            equals: prop.customer.id
          } : undefined,
        authUserId: prop.customer.authUserId !== undefined ? {
            equals: prop.customer.authUserId
          } : undefined,
        name: prop.customer.name !== undefined ? {
            equals: prop.customer.name
          } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            equals: prop.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            equals: prop.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            equals: prop.customer.stripePriceId
          } : undefined,
      },
      update: {
        authUserId: prop.customer.authUserId !== undefined ? {
            set: prop.customer.authUserId
          } : undefined,
        name: prop.customer.name !== undefined ? {
            set: prop.customer.name
          } : undefined,
        plan: prop.customer.plan !== undefined ? {
            set: prop.customer.plan
          } : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? {
            set: prop.customer.stripeCustomerId
          } : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? {
            set: prop.customer.stripeSubscriptionId
          } : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? {
            set: prop.customer.stripePriceId
          } : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.customer.stripeCurrentPeriodEnd
          } : undefined,
      },
      create: {
        authUserId: prop.customer.authUserId !== undefined ? prop.customer.authUserId : undefined,
        name: prop.customer.name !== undefined ? prop.customer.name : undefined,
        plan: prop.customer.plan !== undefined ? prop.customer.plan : undefined,
        stripeCustomerId: prop.customer.stripeCustomerId !== undefined ? prop.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: prop.customer.stripeSubscriptionId !== undefined ? prop.customer.stripeSubscriptionId : undefined,
        stripePriceId: prop.customer.stripePriceId !== undefined ? prop.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: prop.customer.stripeCurrentPeriodEnd !== undefined ? prop.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: prop.accounts ? 
  Array.isArray(prop.accounts) && prop.accounts.length > 0 && prop.accounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.accounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            equals: item.providerAccountId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        provider: item.provider !== undefined ? {
            set: item.provider
          } : undefined,
        providerAccountId: item.providerAccountId !== undefined ? {
            set: item.providerAccountId
          } : undefined,
        refresh_token: item.refresh_token !== undefined ? {
            set: item.refresh_token
          } : undefined,
        access_token: item.access_token !== undefined ? {
            set: item.access_token
          } : undefined,
        expires_at: item.expires_at !== undefined ? {
            set: item.expires_at
          } : undefined,
        token_type: item.token_type !== undefined ? {
            set: item.token_type
          } : undefined,
        scope: item.scope !== undefined ? {
            set: item.scope
          } : undefined,
        id_token: item.id_token !== undefined ? {
            set: item.id_token
          } : undefined,
        session_state: item.session_state !== undefined ? {
            set: item.session_state
          } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        provider: item.provider !== undefined ? item.provider : undefined,
        providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
        refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
        access_token: item.access_token !== undefined ? item.access_token : undefined,
        expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
        token_type: item.token_type !== undefined ? item.token_type : undefined,
        scope: item.scope !== undefined ? item.scope : undefined,
        id_token: item.id_token !== undefined ? item.id_token : undefined,
        session_state: item.session_state !== undefined ? item.session_state : undefined,
      },
    }))
  } : undefined,
  sessions: prop.sessions ? 
  Array.isArray(prop.sessions) && prop.sessions.length > 0 && prop.sessions.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.sessions.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        sessionToken: item.sessionToken !== undefined ? {
            set: item.sessionToken
          } : undefined,
        expires: item.expires !== undefined ? {
            set: item.expires
          } : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: prop.authenticators ? 
  Array.isArray(prop.authenticators) && prop.authenticators.length > 0 && prop.authenticators.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.authenticators.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        credentialID: item.credentialID !== undefined ? {
            set: item.credentialID
          } : undefined,
        publicKey: item.publicKey !== undefined ? {
            set: item.publicKey
          } : undefined,
        counter: item.counter !== undefined ? {
            set: item.counter
          } : undefined,
      },
      create: {
        credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
        publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
        counter: item.counter !== undefined ? item.counter : undefined,
      },
    }))
  } : undefined,
  alpacaAccounts: prop.alpacaAccounts ? 
  Array.isArray(prop.alpacaAccounts) && prop.alpacaAccounts.length > 0 && prop.alpacaAccounts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
  connect: prop.alpacaAccounts.map((item: any) => ({
    id: item.id
  }))
} : { upsert: prop.alpacaAccounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        userId: item.userId !== undefined ? {
            equals: item.userId
          } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id
          } : undefined,
        type: item.type !== undefined ? {
            set: item.type
          } : undefined,
        APIKey: item.APIKey !== undefined ? {
            set: item.APIKey
          } : undefined,
        APISecret: item.APISecret !== undefined ? {
            set: item.APISecret
          } : undefined,
        configuration: item.configuration !== undefined ? {
            set: item.configuration
          } : undefined,
        marketOpen: item.marketOpen !== undefined ? {
            set: item.marketOpen
          } : undefined,
        realTime: item.realTime !== undefined ? {
            set: item.realTime
          } : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? {
            set: item.tradeAllocationPct
          } : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? {
            set: item.minPercentageChange
          } : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? {
            set: item.volumeThreshold
          } : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? {
            set: item.enablePortfolioTrailingStop
          } : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? {
            set: item.portfolioTrailPercent
          } : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? {
            set: item.portfolioProfitThresholdPercent
          } : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? {
            set: item.reducedPortfolioTrailPercent
          } : undefined,
    alerts: item.alerts ? 
    Array.isArray(item.alerts) && item.alerts.length > 0 && item.alerts.every((item: any) => typeof item === 'object' && ('id' in item || 'symbol' in item) && Object.keys(item).length === 1) ? {
    connect: item.alerts.map((item: any) => ({
      id: item.id
    }))
} : { upsert: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId
            } : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id
            } : undefined,
          message: item.message !== undefined ? {
              set: item.message
            } : undefined,
          type: item.type !== undefined ? {
              set: item.type
            } : undefined,
          isRead: item.isRead !== undefined ? {
              set: item.isRead
            } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
        APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
        configuration: item.configuration !== undefined ? item.configuration : undefined,
        marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        realTime: item.realTime !== undefined ? item.realTime : undefined,
        tradeAllocationPct: item.tradeAllocationPct !== undefined ? item.tradeAllocationPct : undefined,
        minPercentageChange: item.minPercentageChange !== undefined ? item.minPercentageChange : undefined,
        volumeThreshold: item.volumeThreshold !== undefined ? item.volumeThreshold : undefined,
        enablePortfolioTrailingStop: item.enablePortfolioTrailingStop !== undefined ? item.enablePortfolioTrailingStop : undefined,
        portfolioTrailPercent: item.portfolioTrailPercent !== undefined ? item.portfolioTrailPercent : undefined,
        portfolioProfitThresholdPercent: item.portfolioProfitThresholdPercent !== undefined ? item.portfolioProfitThresholdPercent : undefined,
        reducedPortfolioTrailPercent: item.reducedPortfolioTrailPercent !== undefined ? item.reducedPortfolioTrailPercent : undefined,
    alerts: item.alerts ? 
      Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alerts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          alpacaAccountId: item.alpacaAccountId !== undefined ? {
              equals: item.alpacaAccountId 
             } : undefined,
        },
        create: {
          message: item.message !== undefined ? item.message : undefined,
          type: item.type !== undefined ? item.type : undefined,
          isRead: item.isRead !== undefined ? item.isRead : undefined,
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyUser) {
        return response.data.updateManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single User record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted User or null.
   */
  async delete(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const DELETE_ONE_USER = gql`
      mutation deleteOneUser($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneUser) {
        return response.data.deleteOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single User record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved User or null.
   */
  async get(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<UserType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const GET_USER = gql`
      query getUser($where: UserWhereUniqueInput!) {
        getUser(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: whereInput ? whereInput : {
        id: props.id !== undefined ? props.id : undefined,
  email: props.email !== undefined ? props.email : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getUser ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Users records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of User records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<UserType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const GET_ALL_USER = gql`
      query getAllUser {
        users {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_USER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.users ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple User records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<UserType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const FIND_MANY_USER = gql`
      query findManyUser($where: UserWhereInput!) {
        users(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: whereInput ? whereInput : {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  email: props.email !== undefined ? {
    equals: props.email 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Users) {
        return response.data.users;
      } else {
       return [] as UserType[];
      }
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No User found') {
        return null;
      } else {
        console.error('Error in getUser:', error);
        throw error;
      }
    }
  }
};

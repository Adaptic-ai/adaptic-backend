

import { AlpacaAccount as AlpacaAccountType } from './generated/typegraphql-prisma/models/AlpacaAccount';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';

/**
 * CRUD operations for the AlpacaAccount model.
 */

export const AlpacaAccount = {

  /**
   * Create a new AlpacaAccount record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created AlpacaAccount or null.
   */

  async create(props: AlpacaAccountType): Promise<AlpacaAccountType> {

    const client = createApolloClient();

    const CREATE_ONE_ALPACAACCOUNT = gql`
      mutation createOneAlpacaAccount($data: AlpacaAccountCreateInput!) {
        createOneAlpacaAccount(data: $data) {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
        }
      }
   `;

    const variables = {
      data: {
        type: props.type !== undefined ? props.type : undefined,
        APIKey: props.APIKey !== undefined ? props.APIKey : undefined,
        APISecret: props.APISecret !== undefined ? props.APISecret : undefined,
        configuration: props.configuration !== undefined ? props.configuration : undefined,
        user: props.user ? {
          connectOrCreate: {
            where: {
              id: props.user.id !== undefined ? props.user.id : undefined,
              email: props.user.email !== undefined ? props.user.email : undefined,
              name: props.user.name !== undefined ? {
                equals: props.user.name
              } : undefined,
            },
            create: {
              name: props.user.name !== undefined ? props.user.name : undefined,
              email: props.user.email !== undefined ? props.user.email : undefined,
              emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
              image: props.user.image !== undefined ? props.user.image : undefined,
              role: props.user.role !== undefined ? props.user.role : undefined,
              bio: props.user.bio !== undefined ? props.user.bio : undefined,
              jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
              currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
              plan: props.user.plan !== undefined ? props.user.plan : undefined,
              customer: props.user.customer ? {
                connectOrCreate: {
                  where: {
                    id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
                    name: props.user.customer.name !== undefined ? {
                      equals: props.user.customer.name
                    } : undefined,
                  },
                  create: {
                    authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
                    name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
                    plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
                    stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
                    stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
                    stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
                    stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
                  },
                }
              } : undefined,
              accounts: props.user.accounts ? {
                connectOrCreate: props.user.accounts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              sessions: props.user.sessions ? {
                connectOrCreate: props.user.sessions.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
                    expires: item.expires !== undefined ? item.expires : undefined,
                  },
                }))
              } : undefined,
              authenticators: props.user.authenticators ? {
                connectOrCreate: props.user.authenticators.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
                    publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
                    counter: item.counter !== undefined ? item.counter : undefined,
                  },
                }))
              } : undefined,
              trades: props.user.trades ? {
                connectOrCreate: props.user.trades.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    total: item.total !== undefined ? item.total : undefined,
                    timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              orders: props.user.orders ? {
                connectOrCreate: props.user.orders.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    type: item.type !== undefined ? item.type : undefined,
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              aiRecommendations: props.user.aiRecommendations ? {
                connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    confidence: item.confidence !== undefined ? item.confidence : undefined,
                  },
                }))
              } : undefined,
              riskAllocations: props.user.riskAllocations ? {
                connectOrCreate: props.user.riskAllocations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    assetType: item.assetType !== undefined ? item.assetType : undefined,
                    allocation: item.allocation !== undefined ? item.allocation : undefined,
                  },
                }))
              } : undefined,
              alerts: props.user.alerts ? {
                connectOrCreate: props.user.alerts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    message: item.message !== undefined ? item.message : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    isRead: item.isRead !== undefined ? item.isRead : undefined,
                  },
                }))
              } : undefined,
              performanceMetrics: props.user.performanceMetrics ? {
                connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    label: item.label !== undefined ? item.label : undefined,
                    value: item.value !== undefined ? item.value : undefined,
                  },
                }))
              } : undefined,
              tradingAccount: props.user.tradingAccount ? {
                connectOrCreate: props.user.tradingAccount.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    name: item.name !== undefined ? {
                      equals: item.name
                    } : undefined,
                  },
                  create: {
                    name: item.name !== undefined ? item.name : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                  },
                }))
              } : undefined,
            },
          }
        } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAlpacaAccount) {
        return response.data.createOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Create multiple AlpacaAccount records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AlpacaAccountType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

    const CREATE_MANY_ALPACAACCOUNT = gql`
      mutation createManyAlpacaAccount($data: [AlpacaAccountCreateManyInput!]!) {
        createManyAlpacaAccount(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
        type: prop.type !== undefined ? prop.type : undefined,
        APIKey: prop.APIKey !== undefined ? prop.APIKey : undefined,
        APISecret: prop.APISecret !== undefined ? prop.APISecret : undefined,
        configuration: prop.configuration !== undefined ? prop.configuration : undefined,
        userId: prop.userId !== undefined ? prop.userId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAlpacaAccount) {
        return response.data.createManyAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Update a single AlpacaAccount record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated AlpacaAccount or null.
   */
  async update(props: AlpacaAccountType): Promise<AlpacaAccountType> {

    const client = createApolloClient();

    const UPDATE_ONE_ALPACAACCOUNT = gql`
      mutation updateOneAlpacaAccount($data: AlpacaAccountUpdateInput!, $where: AlpacaAccountWhereUniqueInput!) {
        updateOneAlpacaAccount(data: $data, where: $where) {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
      },
      data: {
        id: props.id !== undefined ? {
          set: props.id
        } : undefined,
        type: props.type !== undefined ? {
          set: props.type
        } : undefined,
        APIKey: props.APIKey !== undefined ? {
          set: props.APIKey
        } : undefined,
        APISecret: props.APISecret !== undefined ? {
          set: props.APISecret
        } : undefined,
        user: props.user ? {
          upsert: {
            where: {
              id: props.user.id !== undefined ? {
                equals: props.user.id
              } : undefined,
              name: props.user.name !== undefined ? {
                equals: props.user.name
              } : undefined,
              email: props.user.email !== undefined ? {
                equals: props.user.email
              } : undefined,
            },
            update: {
              id: props.user.id !== undefined ? {
                set: props.user.id
              } : undefined,
              name: props.user.name !== undefined ? {
                set: props.user.name
              } : undefined,
              email: props.user.email !== undefined ? {
                set: props.user.email
              } : undefined,
              emailVerified: props.user.emailVerified !== undefined ? {
                set: props.user.emailVerified
              } : undefined,
              image: props.user.image !== undefined ? {
                set: props.user.image
              } : undefined,
              role: props.user.role !== undefined ? {
                set: props.user.role
              } : undefined,
              bio: props.user.bio !== undefined ? {
                set: props.user.bio
              } : undefined,
              jobTitle: props.user.jobTitle !== undefined ? {
                set: props.user.jobTitle
              } : undefined,
              currentMode: props.user.currentMode !== undefined ? {
                set: props.user.currentMode
              } : undefined,
              plan: props.user.plan !== undefined ? {
                set: props.user.plan
              } : undefined,
              customer: props.user.customer ? {
                upsert: {
                  where: {
                    id: props.user.customer.id !== undefined ? {
                      equals: props.user.customer.id
                    } : undefined,
                    name: props.user.customer.name !== undefined ? {
                      equals: props.user.customer.name
                    } : undefined,
                  },
                  update: {
                    authUserId: props.user.customer.authUserId !== undefined ? {
                      set: props.user.customer.authUserId
                    } : undefined,
                    name: props.user.customer.name !== undefined ? {
                      set: props.user.customer.name
                    } : undefined,
                    plan: props.user.customer.plan !== undefined ? {
                      set: props.user.customer.plan
                    } : undefined,
                    stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
                      set: props.user.customer.stripeCustomerId
                    } : undefined,
                    stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
                      set: props.user.customer.stripeSubscriptionId
                    } : undefined,
                    stripePriceId: props.user.customer.stripePriceId !== undefined ? {
                      set: props.user.customer.stripePriceId
                    } : undefined,
                    stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
                      set: props.user.customer.stripeCurrentPeriodEnd
                    } : undefined,
                  },
                  create: {
                    authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
                    name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
                    plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
                    stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
                    stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
                    stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
                    stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
                  },
                }
              } : undefined,
              accounts: props.user.accounts ? {
                upsert: props.user.accounts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              sessions: props.user.sessions ? {
                upsert: props.user.sessions.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              authenticators: props.user.authenticators ? {
                upsert: props.user.authenticators.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              trades: props.user.trades ? {
                upsert: props.user.trades.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    action: item.action !== undefined ? {
                      set: item.action
                    } : undefined,
                    quantity: item.quantity !== undefined ? {
                      set: item.quantity
                    } : undefined,
                    price: item.price !== undefined ? {
                      set: item.price
                    } : undefined,
                    total: item.total !== undefined ? {
                      set: item.total
                    } : undefined,
                    timestamp: item.timestamp !== undefined ? {
                      set: item.timestamp
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    total: item.total !== undefined ? item.total : undefined,
                    timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              orders: props.user.orders ? {
                upsert: props.user.orders.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                    action: item.action !== undefined ? {
                      set: item.action
                    } : undefined,
                    quantity: item.quantity !== undefined ? {
                      set: item.quantity
                    } : undefined,
                    price: item.price !== undefined ? {
                      set: item.price
                    } : undefined,
                    status: item.status !== undefined ? {
                      set: item.status
                    } : undefined,
                  },
                  create: {
                    type: item.type !== undefined ? item.type : undefined,
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              aiRecommendations: props.user.aiRecommendations ? {
                upsert: props.user.aiRecommendations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    action: item.action !== undefined ? {
                      set: item.action
                    } : undefined,
                    confidence: item.confidence !== undefined ? {
                      set: item.confidence
                    } : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    confidence: item.confidence !== undefined ? item.confidence : undefined,
                  },
                }))
              } : undefined,
              riskAllocations: props.user.riskAllocations ? {
                upsert: props.user.riskAllocations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    assetType: item.assetType !== undefined ? {
                      set: item.assetType
                    } : undefined,
                    allocation: item.allocation !== undefined ? {
                      set: item.allocation
                    } : undefined,
                  },
                  create: {
                    assetType: item.assetType !== undefined ? item.assetType : undefined,
                    allocation: item.allocation !== undefined ? item.allocation : undefined,
                  },
                }))
              } : undefined,
              alerts: props.user.alerts ? {
                upsert: props.user.alerts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              performanceMetrics: props.user.performanceMetrics ? {
                upsert: props.user.performanceMetrics.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    label: item.label !== undefined ? {
                      set: item.label
                    } : undefined,
                    value: item.value !== undefined ? {
                      set: item.value
                    } : undefined,
                  },
                  create: {
                    label: item.label !== undefined ? item.label : undefined,
                    value: item.value !== undefined ? item.value : undefined,
                  },
                }))
              } : undefined,
              tradingAccount: props.user.tradingAccount ? {
                upsert: props.user.tradingAccount.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    name: item.name !== undefined ? {
                      equals: item.name
                    } : undefined,
                  },
                  update: {
                    id: item.id !== undefined ? {
                      set: item.id
                    } : undefined,
                    name: item.name !== undefined ? {
                      set: item.name
                    } : undefined,
                    slug: item.slug !== undefined ? {
                      set: item.slug
                    } : undefined,
                    type: item.type !== undefined ? {
                      set: item.type
                    } : undefined,
                  },
                  create: {
                    name: item.name !== undefined ? item.name : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                  },
                }))
              } : undefined,
            },
            create: {
              name: props.user.name !== undefined ? props.user.name : undefined,
              email: props.user.email !== undefined ? props.user.email : undefined,
              emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
              image: props.user.image !== undefined ? props.user.image : undefined,
              role: props.user.role !== undefined ? props.user.role : undefined,
              bio: props.user.bio !== undefined ? props.user.bio : undefined,
              jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
              currentMode: props.user.currentMode !== undefined ? props.user.currentMode : undefined,
              plan: props.user.plan !== undefined ? props.user.plan : undefined,
              customer: props.user.customer ? {
                connectOrCreate: {
                  where: {
                    id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
                    name: props.user.customer.name !== undefined ? {
                      equals: props.user.customer.name
                    } : undefined,
                  },
                  create: {
                    authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
                    name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
                    plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
                    stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
                    stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
                    stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
                    stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
                  },
                }
              } : undefined,
              accounts: props.user.accounts ? {
                connectOrCreate: props.user.accounts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
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
              sessions: props.user.sessions ? {
                connectOrCreate: props.user.sessions.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
                    expires: item.expires !== undefined ? item.expires : undefined,
                  },
                }))
              } : undefined,
              authenticators: props.user.authenticators ? {
                connectOrCreate: props.user.authenticators.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
                    publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
                    counter: item.counter !== undefined ? item.counter : undefined,
                  },
                }))
              } : undefined,
              trades: props.user.trades ? {
                connectOrCreate: props.user.trades.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    total: item.total !== undefined ? item.total : undefined,
                    timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              orders: props.user.orders ? {
                connectOrCreate: props.user.orders.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    type: item.type !== undefined ? item.type : undefined,
                    action: item.action !== undefined ? item.action : undefined,
                    quantity: item.quantity !== undefined ? item.quantity : undefined,
                    price: item.price !== undefined ? item.price : undefined,
                    status: item.status !== undefined ? item.status : undefined,
                  },
                }))
              } : undefined,
              aiRecommendations: props.user.aiRecommendations ? {
                connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    action: item.action !== undefined ? item.action : undefined,
                    confidence: item.confidence !== undefined ? item.confidence : undefined,
                  },
                }))
              } : undefined,
              riskAllocations: props.user.riskAllocations ? {
                connectOrCreate: props.user.riskAllocations.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    assetType: item.assetType !== undefined ? item.assetType : undefined,
                    allocation: item.allocation !== undefined ? item.allocation : undefined,
                  },
                }))
              } : undefined,
              alerts: props.user.alerts ? {
                connectOrCreate: props.user.alerts.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    message: item.message !== undefined ? item.message : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                    isRead: item.isRead !== undefined ? item.isRead : undefined,
                  },
                }))
              } : undefined,
              performanceMetrics: props.user.performanceMetrics ? {
                connectOrCreate: props.user.performanceMetrics.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                  },
                  create: {
                    label: item.label !== undefined ? item.label : undefined,
                    value: item.value !== undefined ? item.value : undefined,
                  },
                }))
              } : undefined,
              tradingAccount: props.user.tradingAccount ? {
                connectOrCreate: props.user.tradingAccount.map((item: any) => ({
                  where: {
                    id: item.id !== undefined ? item.id : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    name: item.name !== undefined ? {
                      equals: item.name
                    } : undefined,
                  },
                  create: {
                    name: item.name !== undefined ? item.name : undefined,
                    slug: item.slug !== undefined ? item.slug : undefined,
                    type: item.type !== undefined ? item.type : undefined,
                  },
                }))
              } : undefined,
            },
          }
        } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAlpacaAccount) {
        return response.data.updateOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Delete a single AlpacaAccount record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted AlpacaAccount or null.
   */
  async delete(props: AlpacaAccountType): Promise<AlpacaAccountType> {

    const client = createApolloClient();

    const DELETE_ONE_ALPACAACCOUNT = gql`
      mutation deleteOneAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        deleteOneAlpacaAccount(where: $where) {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAlpacaAccount) {
        return response.data.deleteOneAlpacaAccount;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAlpacaAccount:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single AlpacaAccount record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved AlpacaAccount or null.
   */
  async get(props: AlpacaAccountType): Promise<AlpacaAccountType | null> {

    const client = createApolloClient();

    const GET_ALPACAACCOUNT = gql`
      query getAlpacaAccount($where: AlpacaAccountWhereUniqueInput!) {
        getAlpacaAccount(where: $where) {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
      },
    };
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAlpacaAccount ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all AlpacaAccounts records.
   * @param client - Apollo Client instance.
   * @returns An array of AlpacaAccount records or null.
   */
  async getAll(): Promise<AlpacaAccountType[] | null> {

    const client = createApolloClient();

    const GET_ALL_ALPACAACCOUNT = gql`
      query getAllAlpacaAccount {
        alpacaAccounts {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ALPACAACCOUNT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.alpacaAccounts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple AlpacaAccount records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found AlpacaAccount records or null.
   */
  async findMany(props: AlpacaAccountType): Promise<AlpacaAccountType[] | null> {

    const client = createApolloClient();

    const FIND_MANY_ALPACAACCOUNT = gql`
      query findManyAlpacaAccount($where: AlpacaAccountWhereInput!) {
        alpacaAccounts(where: $where) {
          id
          type
          APIKey
          APISecret
          configuration
          updatedAt
          user {
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
            currentMode
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
              users {
                id
              }
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
              createdAt
              updatedAt
            }
            plan
            trades {
              id
              userId
              portfolioId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              status
              user {
                id
              }
              portfolio {
                id
                name
                slug
                type
                user {
                  id
                }
                userId
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                riskAllocations {
                  id
                }
                alerts {
                  id
                }
                performanceMetrics {
                  id
                }
                environmentVariables {
                  id
                }
                createdAt
                updatedAt
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
                description
                cik
                exchange
                currency
                country
                sector
                industry
                address
                officialSite
                fiscalYearEnd
                latestQuarter
                marketCapitalization
                ebitda
                peRatio
                pegRatio
                bookValue
                dividendPerShare
                dividendYield
                eps
                revenuePerShareTTM
                profitMargin
                operatingMarginTTM
                returnOnAssetsTTM
                returnOnEquityTTM
                revenueTTM
                grossProfitTTM
                dilutedEPSTTM
                quarterlyEarningsGrowthYOY
                quarterlyRevenueGrowthYOY
                analystTargetPrice
                analystRatingStrongBuy
                analystRatingBuy
                analystRatingHold
                analystRatingSell
                analystRatingStrongSell
                trailingPE
                forwardPE
                priceToSalesRatioTTM
                priceToBookRatio
                evToRevenue
                evToEbitda
                beta
                week52High
                week52Low
                day50MovingAverage
                day200MovingAverage
                sharesOutstanding
                dividendDate
                exDividendDate
                createdAt
                updatedAt
                holdings {
                  id
                }
                trades {
                  id
                }
                orders {
                  id
                }
                aiRecommendations {
                  id
                }
                newsMentions {
                  id
                }
              }
              steps {
                id
                tradeId
                sequence
                action
                hedgeType
                hedgePrice
                buyPrice
                sellPrice
                qty
                side
                type
                stopLoss
                targetPrice
                note
                executionTime
                status
                fee
                trade {
                  id
                }
              }
            }
            orders {
              id
              userId
              portfolioId
              assetId
              type
              action
              quantity
              price
              status
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              portfolioId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              portfolioId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            alerts {
              id
              userId
              portfolioId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            performanceMetrics {
              id
              userId
              portfolioId
              label
              value
              createdAt
              updatedAt
              user {
                id
              }
              portfolio {
                id
              }
            }
            tradingAccount {
              id
            }
            alpacaAccounts {
              id
            }
          }
          userId
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
          equals: props.id
        } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ALPACAACCOUNT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.AlpacaAccounts) {
        return response.data.alpacaAccounts;
      } else {
        return [] as AlpacaAccountType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No AlpacaAccount found') {
        return null;
      } else {
        console.error('Error in getAlpacaAccount:', error);
        throw error;
      }
    }
  }
};

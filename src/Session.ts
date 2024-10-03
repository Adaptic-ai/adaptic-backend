

import { Session as SessionType } from './generated/typegraphql-prisma/models/Session';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Session model.
 */

export const Session = {
  /**
   * Create a new Session record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Session or null.
   */
  async create(props: SessionType, client: ApolloClient<NormalizedCacheObject>): Promise<SessionType> {
    const CREATE_ONE_SESSION = gql`
      mutation createOneSession($data: SessionCreateInput!) {
        createOneSession(data: $data) {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
        }
      }
   `;

    const variables = {
      data: {
          sessionToken: props.sessionToken !== undefined ? props.sessionToken : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    workspaces: props.user.workspaces ? {
      connectOrCreate: props.user.workspaces.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
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
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneSession: SessionType }>({ mutation: CREATE_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneSession) {
        return response.data.createOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneSession:', error);
      throw error;
    }
  },

  /**
   * Create multiple Session records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: SessionType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_SESSION = gql`
      mutation createManySession($data: [SessionCreateManyInput!]!) {
        createManySession(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  sessionToken: prop.sessionToken !== undefined ? prop.sessionToken : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  expires: prop.expires !== undefined ? prop.expires : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManySession: { count: number } }>({ mutation: CREATE_MANY_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManySession) {
        return response.data.createManySession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManySession:', error);
      throw error;
    }
  },

  /**
   * Update a single Session record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Session or null.
   */
  async update(props: SessionType, client: ApolloClient<NormalizedCacheObject>): Promise<SessionType> {
    const UPDATE_ONE_SESSION = gql`
      mutation updateOneSession($data: SessionUpdateInput!, $where: SessionWhereUniqueInput!) {
        updateOneSession(data: $data, where: $where) {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? {
            set: props.user.currentWorkspace  
           } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan  
           } : undefined,
    workspaces: props.user.workspaces ? {
      upsert: props.user.workspaces.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          role: item.role !== undefined ? {
              set: item.role  
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
    holdings: props.user.holdings ? {
      upsert: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          quantity: item.quantity !== undefined ? {
              set: item.quantity  
             } : undefined,
          averagePrice: item.averagePrice !== undefined ? {
              set: item.averagePrice  
             } : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      upsert: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      upsert: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    workspaces: props.user.workspaces ? {
      connectOrCreate: props.user.workspaces.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
        },
      }))
    } : undefined,
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
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
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneSession: SessionType }>({ mutation: UPDATE_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneSession) {
        return response.data.updateOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneSession:', error);
      throw error;
    }
  },

  /**
   * Delete a single Session record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Session or null.
   */
  async delete(props: SessionType, client: ApolloClient<NormalizedCacheObject>): Promise<SessionType> {
    const DELETE_ONE_SESSION = gql`
      mutation deleteOneSession($where: SessionWhereUniqueInput!) {
        deleteOneSession(where: $where) {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneSession: SessionType }>({ mutation: DELETE_ONE_SESSION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneSession) {
        return response.data.deleteOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneSession:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Session record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Session or null.
   */
  async get(props: SessionType, client: ApolloClient<NormalizedCacheObject>): Promise<SessionType> {
    const GET_ONE_SESSION = gql`
      query getOneSession($where: SessionWhereUniqueInput!) {
        Session(where: $where) {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ Session: SessionType }>({ query: GET_ONE_SESSION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Session ?? null;
    } catch (error) {
      console.error('Error in getOneSession:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Sessions records.
   * @param client - Apollo Client instance.
   * @returns An array of Session records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<SessionType[] | null> {
    const GET_ALL_SESSION = gql`
      query getAllSession {
        Sessions {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query<{ Sessions: SessionType[] }>({ query: GET_ALL_SESSION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Sessions ?? null;
    } catch (error) {
      console.error('Error in getAllSession:', error);
      throw error;
    }
  },

  /**
   * Find multiple Session records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Session records or null.
   */
  async findMany(props: SessionType, client: ApolloClient<NormalizedCacheObject>): Promise<SessionType[]> {
    const FIND_MANY_SESSION = gql`
      query findManySession($where: SessionWhereInput!) {
        Sessions(where: $where) {
          id
          sessionToken
          userId
          expires
          user {
            id
            name
            email
            emailVerified
            image
            createdAt
            updatedAt
            role
            workspaces {
              id
              userId
              workspaceId
              user {
                id
              }
              workspace {
                id
                name
                slug
                description
                descriptionShort
                image
                colors
                website
                emailDomain
                addUsersByEmailDomain
                industry
                foundingYear
                legalName
                address
                streetAddress
                postalCode
                city {
                  id
                }
                state {
                  id
                }
                country {
                  id
                }
                telephone
                email
                sameAs
                headquarters
                locations {
                  id
                }
                areasOfFocus
                createdAt
                updatedAt
                environmentVariables {
                  id
                }
                users {
                  id
                }
                stateId
                countryId
                cityId
              }
              role
              createdAt
              updatedAt
            }
            bio
            jobTitle
            currentWorkspace
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
            holdings {
              id
              userId
              assetId
              quantity
              averagePrice
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
                symbol
                name
                type
                logoUrl
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
                recommendations {
                  id
                }
              }
            }
            trades {
              id
              userId
              assetId
              action
              quantity
              price
              total
              timestamp
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            orders {
              id
              userId
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
              asset {
                id
              }
            }
            aiRecommendations {
              id
              userId
              assetId
              action
              confidence
              createdAt
              updatedAt
              user {
                id
              }
              asset {
                id
              }
            }
            riskAllocations {
              id
              userId
              assetType
              allocation
              createdAt
              updatedAt
              user {
                id
              }
            }
            alerts {
              id
              userId
              message
              type
              isRead
              createdAt
              updatedAt
              user {
                id
              }
            }
          }
          createdAt
          updatedAt
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
      const response = await client.query<{ Sessions: SessionType[] }>({ query: FIND_MANY_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Sessions) {
        return response.data.Sessions;
      } else {
       return [] as SessionType[];
      }
    } catch (error) {
      console.error('Error in findManySession:', error);
      throw error;
    }
  }
};

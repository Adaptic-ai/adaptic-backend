

import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Customer model.
 */

export const Customer = {

  /**
   * Create a new Customer record.
   * @param props - Properties for the new record.
   * @returns The created Customer or null.
   */

  async create(props: CustomerType): Promise<CustomerType> {

  const client = createApolloClient();

  const CREATE_ONE_CUSTOMER = gql`
      mutation createOneCustomer($data: CustomerCreateInput!) {
        createOneCustomer(data: $data) {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
        }
      }
   `;

    const variables = {
      data: {
          authUserId: props.authUserId !== undefined ? props.authUserId : undefined,
  name: props.name !== undefined ? props.name : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  stripePriceId: props.stripePriceId !== undefined ? props.stripePriceId : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? props.stripeCurrentPeriodEnd : undefined,
  users: props.users ? 
    Array.isArray(props.users) && props.users.length > 0 &&  props.users.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.users.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
      }))
    } : undefined,
      },
    }))
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneCustomer) {
        return response.data.createOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Create multiple Customer records.
   * @param props - Array of Customer objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: CustomerType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_CUSTOMER = gql`
      mutation createManyCustomer($data: [CustomerCreateManyInput!]!) {
        createManyCustomer(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  authUserId: prop.authUserId !== undefined ? prop.authUserId : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? prop.stripeCustomerId : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? prop.stripeSubscriptionId : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? prop.stripePriceId : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? prop.stripeCurrentPeriodEnd : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyCustomer) {
        return response.data.createManyCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyCustomer:', error);
      throw error;
    }
  },

  /**
   * Update a single Customer record.
   * @param props - Properties to update.
   * @returns The updated Customer or null.
   */
  async update(props: CustomerType): Promise<CustomerType> {

    const client = createApolloClient();

      const UPDATE_ONE_CUSTOMER = gql`
      mutation updateOneCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
        updateOneCustomer(data: $data, where: $where) {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
      data: {
  authUserId: props.authUserId !== undefined ? {
            set: props.authUserId 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
            set: props.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
            set: props.stripeSubscriptionId 
           } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
            set: props.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? {
            set: props.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  users: props.users ? {
    upsert: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
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
        email: item.email !== undefined ? {
            set: item.email  
           } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified  
           } : undefined,
        image: item.image !== undefined ? {
            set: item.image  
           } : undefined,
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio  
           } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle  
           } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount  
           } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan  
           } : undefined,
    accounts: item.accounts ? {
      upsert: item.accounts.map((item: any) => ({
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
    sessions: item.sessions ? {
      upsert: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? {
      upsert: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? {
      upsert: item.alpacaAccounts.map((item: any) => ({
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
      trades: item.trades ? {
        upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? {
        upsert: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? {
        upsert: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? {
        upsert: item.alerts.map((item: any) => ({
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
      }))
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneCustomer) {
        return response.data.updateOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Update multiple Customer records.
   * @param props - Array of Customer objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: CustomerType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_CUSTOMER = gql`
      mutation updateManyCustomer($data: [CustomerCreateManyInput!]!) {
        updateManyCustomer(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,
        name: prop.name !== undefined ? {
            equals: prop.name 
           } : undefined,

      },
      data: {
          authUserId: prop.authUserId !== undefined ? {
            set: prop.authUserId 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? {
            set: prop.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? {
            set: prop.stripeSubscriptionId 
           } : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? {
            set: prop.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  users: prop.users ? {
    upsert: prop.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
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
        email: item.email !== undefined ? {
            set: item.email  
           } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified  
           } : undefined,
        image: item.image !== undefined ? {
            set: item.image  
           } : undefined,
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio  
           } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle  
           } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount  
           } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan  
           } : undefined,
    accounts: item.accounts ? {
      upsert: item.accounts.map((item: any) => ({
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
    sessions: item.sessions ? {
      upsert: item.sessions.map((item: any) => ({
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
    authenticators: item.authenticators ? {
      upsert: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? {
      upsert: item.alpacaAccounts.map((item: any) => ({
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
      trades: item.trades ? {
        upsert: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            price: item.price !== undefined ? {
                set: item.price  
               } : undefined,
            total: item.total !== undefined ? {
                set: item.total  
               } : undefined,
            signal: item.signal !== undefined ? {
                set: item.signal  
               } : undefined,
            strategy: item.strategy !== undefined ? {
                set: item.strategy  
               } : undefined,
            analysis: item.analysis !== undefined ? {
                set: item.analysis  
               } : undefined,
            confidence: item.confidence !== undefined ? {
                set: item.confidence  
               } : undefined,
            timestamp: item.timestamp !== undefined ? {
                set: item.timestamp  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? {
        upsert: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            clientOrderId: item.clientOrderId !== undefined ? {
                set: item.clientOrderId  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            notional: item.notional !== undefined ? {
                set: item.notional  
               } : undefined,
            side: item.side !== undefined ? {
                set: item.side  
               } : undefined,
            type: item.type !== undefined ? {
                set: item.type  
               } : undefined,
            orderClass: item.orderClass !== undefined ? {
                set: item.orderClass  
               } : undefined,
            timeInForce: item.timeInForce !== undefined ? {
                set: item.timeInForce  
               } : undefined,
            limitPrice: item.limitPrice !== undefined ? {
                set: item.limitPrice  
               } : undefined,
            stopPrice: item.stopPrice !== undefined ? {
                set: item.stopPrice  
               } : undefined,
            trailPrice: item.trailPrice !== undefined ? {
                set: item.trailPrice  
               } : undefined,
            trailPercent: item.trailPercent !== undefined ? {
                set: item.trailPercent  
               } : undefined,
            extendedHours: item.extendedHours !== undefined ? {
                set: item.extendedHours  
               } : undefined,
            status: item.status !== undefined ? {
                set: item.status  
               } : undefined,
            submittedAt: item.submittedAt !== undefined ? {
                set: item.submittedAt  
               } : undefined,
            filledAt: item.filledAt !== undefined ? {
                set: item.filledAt  
               } : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? {
                set: item.filledAvgPrice  
               } : undefined,
            fee: item.fee !== undefined ? {
                set: item.fee  
               } : undefined,
            strikePrice: item.strikePrice !== undefined ? {
                set: item.strikePrice  
               } : undefined,
            expirationDate: item.expirationDate !== undefined ? {
                set: item.expirationDate  
               } : undefined,
            optionType: item.optionType !== undefined ? {
                set: item.optionType  
               } : undefined,
            stopLossId: item.stopLossId !== undefined ? {
                set: item.stopLossId  
               } : undefined,
            takeProfitId: item.takeProfitId !== undefined ? {
                set: item.takeProfitId  
               } : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? {
        upsert: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            averageEntryPrice: item.averageEntryPrice !== undefined ? {
                set: item.averageEntryPrice  
               } : undefined,
            qty: item.qty !== undefined ? {
                set: item.qty  
               } : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? {
                set: item.qtyAvailable  
               } : undefined,
            marketValue: item.marketValue !== undefined ? {
                set: item.marketValue  
               } : undefined,
            costBasis: item.costBasis !== undefined ? {
                set: item.costBasis  
               } : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? {
                set: item.unrealizedPL  
               } : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? {
                set: item.unrealizedPLPC  
               } : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? {
                set: item.unrealisedIntradayPL  
               } : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? {
                set: item.unrealisedIntradayPLPC  
               } : undefined,
            currentPrice: item.currentPrice !== undefined ? {
                set: item.currentPrice  
               } : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? {
                set: item.lastTradePrice  
               } : undefined,
            changeToday: item.changeToday !== undefined ? {
                set: item.changeToday  
               } : undefined,
            assetMarginable: item.assetMarginable !== undefined ? {
                set: item.assetMarginable  
               } : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? {
        upsert: item.alerts.map((item: any) => ({
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
    accounts: item.accounts ? 
      Array.isArray(item.accounts) && item.accounts.length > 0 &&  item.accounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.accounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.accounts.map((item: any) => ({
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
    sessions: item.sessions ? 
      Array.isArray(item.sessions) && item.sessions.length > 0 &&  item.sessions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.sessions.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? 
      Array.isArray(item.authenticators) && item.authenticators.length > 0 &&  item.authenticators.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.authenticators.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.authenticators.map((item: any) => ({
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
    alpacaAccounts: item.alpacaAccounts ? 
      Array.isArray(item.alpacaAccounts) && item.alpacaAccounts.length > 0 &&  item.alpacaAccounts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
        connect:      item.alpacaAccounts.map((item: any) => ({
           id: item.id
        }))
 }
 : { connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
      trades: item.trades ? 
        Array.isArray(item.trades) && item.trades.length > 0 &&  item.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.trades.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            qty: item.qty !== undefined ? item.qty : undefined,
            price: item.price !== undefined ? item.price : undefined,
            total: item.total !== undefined ? item.total : undefined,
            signal: item.signal !== undefined ? item.signal : undefined,
            strategy: item.strategy !== undefined ? item.strategy : undefined,
            analysis: item.analysis !== undefined ? item.analysis : undefined,
            confidence: item.confidence !== undefined ? item.confidence : undefined,
            timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
            status: item.status !== undefined ? item.status : undefined,
          },
        }))
      } : undefined,
      orders: item.orders ? 
        Array.isArray(item.orders) && item.orders.length > 0 &&  item.orders.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.orders.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.orders.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            clientOrderId: item.clientOrderId !== undefined ? item.clientOrderId : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            notional: item.notional !== undefined ? item.notional : undefined,
            side: item.side !== undefined ? item.side : undefined,
            type: item.type !== undefined ? item.type : undefined,
            orderClass: item.orderClass !== undefined ? item.orderClass : undefined,
            timeInForce: item.timeInForce !== undefined ? item.timeInForce : undefined,
            limitPrice: item.limitPrice !== undefined ? item.limitPrice : undefined,
            stopPrice: item.stopPrice !== undefined ? item.stopPrice : undefined,
            trailPrice: item.trailPrice !== undefined ? item.trailPrice : undefined,
            trailPercent: item.trailPercent !== undefined ? item.trailPercent : undefined,
            extendedHours: item.extendedHours !== undefined ? item.extendedHours : undefined,
            status: item.status !== undefined ? item.status : undefined,
            submittedAt: item.submittedAt !== undefined ? item.submittedAt : undefined,
            filledAt: item.filledAt !== undefined ? item.filledAt : undefined,
            filledAvgPrice: item.filledAvgPrice !== undefined ? item.filledAvgPrice : undefined,
            fee: item.fee !== undefined ? item.fee : undefined,
            strikePrice: item.strikePrice !== undefined ? item.strikePrice : undefined,
            expirationDate: item.expirationDate !== undefined ? item.expirationDate : undefined,
            optionType: item.optionType !== undefined ? item.optionType : undefined,
            stopLossId: item.stopLossId !== undefined ? item.stopLossId : undefined,
            takeProfitId: item.takeProfitId !== undefined ? item.takeProfitId : undefined,
          },
        }))
      } : undefined,
      positions: item.positions ? 
        Array.isArray(item.positions) && item.positions.length > 0 &&  item.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.positions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
          },
          create: {
            averageEntryPrice: item.averageEntryPrice !== undefined ? item.averageEntryPrice : undefined,
            qty: item.qty !== undefined ? item.qty : undefined,
            qtyAvailable: item.qtyAvailable !== undefined ? item.qtyAvailable : undefined,
            marketValue: item.marketValue !== undefined ? item.marketValue : undefined,
            costBasis: item.costBasis !== undefined ? item.costBasis : undefined,
            unrealizedPL: item.unrealizedPL !== undefined ? item.unrealizedPL : undefined,
            unrealizedPLPC: item.unrealizedPLPC !== undefined ? item.unrealizedPLPC : undefined,
            unrealisedIntradayPL: item.unrealisedIntradayPL !== undefined ? item.unrealisedIntradayPL : undefined,
            unrealisedIntradayPLPC: item.unrealisedIntradayPLPC !== undefined ? item.unrealisedIntradayPLPC : undefined,
            currentPrice: item.currentPrice !== undefined ? item.currentPrice : undefined,
            lastTradePrice: item.lastTradePrice !== undefined ? item.lastTradePrice : undefined,
            changeToday: item.changeToday !== undefined ? item.changeToday : undefined,
            assetMarginable: item.assetMarginable !== undefined ? item.assetMarginable : undefined,
          },
        }))
      } : undefined,
      alerts: item.alerts ? 
        Array.isArray(item.alerts) && item.alerts.length > 0 &&  item.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        item.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: item.alerts.map((item: any) => ({
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
      }))
    } : undefined,
      },
    }))
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyCustomer) {
        return response.data.updateManyCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyCustomer:', error);
      throw error;
    }
  },

  /**
   * Delete a single Customer record.
   * @param props - Properties to update.
   * @returns The deleted Customer or null.
   */
  async delete(props: CustomerType): Promise<CustomerType> {

    const client = createApolloClient();

      const DELETE_ONE_CUSTOMER = gql`
      mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
        deleteOneCustomer(where: $where) {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneCustomer) {
        return response.data.deleteOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Customer record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Customer or null.
   */
  async get(props: CustomerType): Promise<CustomerType | null> {

    const client = createApolloClient();

      const GET_CUSTOMER = gql`
      query getCustomer($where: CustomerWhereUniqueInput!) {
        getCustomer(where: $where) {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getCustomer ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Customers records.
   * @returns An array of Customer records or null.
   */
  async getAll(): Promise<CustomerType[] | null> {

    const client = createApolloClient();

      const GET_ALL_CUSTOMER = gql`
      query getAllCustomer {
        customers {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_CUSTOMER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.customers ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Customer records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Customer records or null.
   */
  async findMany(props: CustomerType): Promise<CustomerType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_CUSTOMER = gql`
      query findManyCustomer($where: CustomerWhereInput!) {
        customers(where: $where) {
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
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      user {
        id
      }
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        signal
        strategy
        analysis
        confidence
        timestamp
        createdAt
        updatedAt
        status
        alpacaAccount {
          id
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        actions {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
          }
          order {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
        }
      }
      orders {
        id
        clientOrderId
        alpacaAccountId
        assetId
        qty
        notional
        side
        type
        orderClass
        timeInForce
        limitPrice
        stopPrice
        stopLoss {
          id
          stopPrice
          limitPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        takeProfit {
          id
          limitPrice
          stopPrice
          createdAt
          updatedAt
          orderId
          Order {
            id
          }
        }
        trailPrice
        trailPercent
        extendedHours
        status
        createdAt
        updatedAt
        submittedAt
        filledAt
        filledAvgPrice
        actionId
        alpacaAccount {
          id
        }
        action {
          id
          sequence
          tradeId
          type
          note
          status
          fee
          trade {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
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
              sellPrice
              buyPrice
              createdAt
              updatedAt
              trades {
                id
              }
              orders {
                id
              }
              positions {
                id
                assetId
                asset {
                  id
                }
                averageEntryPrice
                qty
                qtyAvailable
                marketValue
                costBasis
                unrealizedPL
                unrealizedPLPC
                unrealisedIntradayPL
                unrealisedIntradayPLPC
                currentPrice
                lastTradePrice
                changeToday
                assetMarginable
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              newsMentions {
                id
                assetId
                newsArticleId
                url
                news {
                  id
                  title
                  content
                  source
                  sourceDomain
                  url
                  sentiment
                  authors
                  summary
                  bannerImage
                  timePublished
                  category
                  topics
                  logo
                  createdAt
                  updatedAt
                  assets {
                    id
                  }
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            actions {
              id
            }
          }
          order {
            id
          }
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
              }
            }
          }
          orders {
            id
          }
          positions {
            id
            assetId
            asset {
              id
            }
            averageEntryPrice
            qty
            qtyAvailable
            marketValue
            costBasis
            unrealizedPL
            unrealizedPLPC
            unrealisedIntradayPL
            unrealisedIntradayPLPC
            currentPrice
            lastTradePrice
            changeToday
            assetMarginable
            alpacaAccount {
              id
            }
            alpacaAccountId
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
      }
      positions {
        id
        assetId
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
          sellPrice
          buyPrice
          createdAt
          updatedAt
          trades {
            id
            alpacaAccountId
            assetId
            qty
            price
            total
            signal
            strategy
            analysis
            confidence
            timestamp
            createdAt
            updatedAt
            status
            alpacaAccount {
              id
            }
            asset {
              id
            }
            actions {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
              }
              order {
                id
                clientOrderId
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                orderClass
                timeInForce
                limitPrice
                stopPrice
                stopLoss {
                  id
                  stopPrice
                  limitPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                takeProfit {
                  id
                  limitPrice
                  stopPrice
                  createdAt
                  updatedAt
                  orderId
                  Order {
                    id
                  }
                }
                trailPrice
                trailPercent
                extendedHours
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
                strikePrice
                expirationDate
                optionType
                stopLossId
                takeProfitId
              }
            }
          }
          orders {
            id
            clientOrderId
            alpacaAccountId
            assetId
            qty
            notional
            side
            type
            orderClass
            timeInForce
            limitPrice
            stopPrice
            stopLoss {
              id
              stopPrice
              limitPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            takeProfit {
              id
              limitPrice
              stopPrice
              createdAt
              updatedAt
              orderId
              Order {
                id
              }
            }
            trailPrice
            trailPercent
            extendedHours
            status
            createdAt
            updatedAt
            submittedAt
            filledAt
            filledAvgPrice
            actionId
            alpacaAccount {
              id
            }
            action {
              id
              sequence
              tradeId
              type
              note
              status
              fee
              trade {
                id
                alpacaAccountId
                assetId
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              order {
                id
              }
            }
            asset {
              id
            }
            fee
            strikePrice
            expirationDate
            optionType
            stopLossId
            takeProfitId
          }
          positions {
            id
          }
          newsMentions {
            id
            assetId
            newsArticleId
            url
            news {
              id
              title
              content
              source
              sourceDomain
              url
              sentiment
              authors
              summary
              bannerImage
              timePublished
              category
              topics
              logo
              createdAt
              updatedAt
              assets {
                id
              }
            }
            asset {
              id
            }
            relevancyScore
            sentimentScore
            sentimentLabel
          }
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        alpacaAccount {
          id
        }
        alpacaAccountId
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
        alpacaAccount {
          id
        }
      }
    }
  }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Customers) {
        return response.data.customers;
      } else {
       return [] as CustomerType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  }
};

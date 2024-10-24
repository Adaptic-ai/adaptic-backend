

import { StopLoss as StopLossType } from './generated/typegraphql-prisma/models/StopLoss';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the StopLoss model.
 */

export const StopLoss = {

  /**
   * Create a new StopLoss record.
   * @param props - Properties for the new record.
   * @returns The created StopLoss or null.
   */

  async create(props: StopLossType): Promise<StopLossType> {

  const client = createApolloClient();

  const CREATE_ONE_STOPLOSS = gql`
      mutation createOneStopLoss($data: StopLossCreateInput!) {
        createOneStopLoss(data: $data) {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
   `;

    const variables = {
      data: {
          stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.Order.id !== undefined ? props.Order.id : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? props.Order.alpacaAccount.user.id : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? 
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.Order.alpacaAccount.positions ? 
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.Order.alpacaAccount.alerts ? 
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.action.trade.id !== undefined ? props.Order.action.trade.id : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          sellPrice: props.Order.asset.sellPrice !== undefined ? props.Order.asset.sellPrice : undefined,
          buyPrice: props.Order.asset.buyPrice !== undefined ? props.Order.asset.buyPrice : undefined,
      trades: props.Order.asset.trades ? 
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
      positions: props.Order.asset.positions ? 
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
      newsMentions: props.Order.asset.newsMentions ? 
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneStopLoss) {
        return response.data.createOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Create multiple StopLoss records.
   * @param props - Array of StopLoss objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: StopLossType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_STOPLOSS = gql`
      mutation createManyStopLoss($data: [StopLossCreateManyInput!]!) {
        createManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyStopLoss) {
        return response.data.createManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update a single StopLoss record.
   * @param props - Properties to update.
   * @returns The updated StopLoss or null.
   */
  async update(props: StopLossType): Promise<StopLossType> {

    const client = createApolloClient();

      const UPDATE_ONE_STOPLOSS = gql`
      mutation updateOneStopLoss($data: StopLossUpdateInput!, $where: StopLossWhereUniqueInput!) {
        updateOneStopLoss(data: $data, where: $where) {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  Order: props.Order ? {
    upsert: {
      where: {
        id: props.Order.id !== undefined ? {
            equals: props.Order.id 
           } : undefined,
      },
      update: {
        id: props.Order.id !== undefined ? {
            set: props.Order.id  
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            set: props.Order.clientOrderId  
           } : undefined,
        qty: props.Order.qty !== undefined ? {
            set: props.Order.qty  
           } : undefined,
        notional: props.Order.notional !== undefined ? {
            set: props.Order.notional  
           } : undefined,
        side: props.Order.side !== undefined ? {
            set: props.Order.side  
           } : undefined,
        type: props.Order.type !== undefined ? {
            set: props.Order.type  
           } : undefined,
        orderClass: props.Order.orderClass !== undefined ? {
            set: props.Order.orderClass  
           } : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? {
            set: props.Order.timeInForce  
           } : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? {
            set: props.Order.limitPrice  
           } : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? {
            set: props.Order.stopPrice  
           } : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? {
            set: props.Order.trailPrice  
           } : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? {
            set: props.Order.trailPercent  
           } : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? {
            set: props.Order.extendedHours  
           } : undefined,
        status: props.Order.status !== undefined ? {
            set: props.Order.status  
           } : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? {
            set: props.Order.submittedAt  
           } : undefined,
        filledAt: props.Order.filledAt !== undefined ? {
            set: props.Order.filledAt  
           } : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? {
            set: props.Order.filledAvgPrice  
           } : undefined,
        fee: props.Order.fee !== undefined ? {
            set: props.Order.fee  
           } : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? {
            set: props.Order.strikePrice  
           } : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? {
            set: props.Order.expirationDate  
           } : undefined,
        optionType: props.Order.optionType !== undefined ? {
            set: props.Order.optionType  
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            set: props.Order.stopLossId  
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            set: props.Order.takeProfitId  
           } : undefined,
    takeProfit: props.Order.takeProfit ? {
      upsert: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? {
              equals: props.Order.takeProfit.id 
             } : undefined,
        },
        update: {
          id: props.Order.takeProfit.id !== undefined ? {
              set: props.Order.takeProfit.id  
             } : undefined,
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? {
              set: props.Order.takeProfit.limitPrice  
             } : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? {
              set: props.Order.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              equals: props.Order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              set: props.Order.alpacaAccount.id  
             } : undefined,
          type: props.Order.alpacaAccount.type !== undefined ? {
              set: props.Order.alpacaAccount.type  
             } : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? {
              set: props.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? {
              set: props.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
              set: props.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? {
              set: props.Order.alpacaAccount.marketOpen  
             } : undefined,
      user: props.Order.alpacaAccount.user ? {
        upsert: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                equals: props.Order.alpacaAccount.user.id 
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                equals: props.Order.alpacaAccount.user.email 
               } : undefined,
          },
          update: {
            id: props.Order.alpacaAccount.user.id !== undefined ? {
                set: props.Order.alpacaAccount.user.id  
               } : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                set: props.Order.alpacaAccount.user.name  
               } : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? {
                set: props.Order.alpacaAccount.user.email  
               } : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? {
                set: props.Order.alpacaAccount.user.emailVerified  
               } : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? {
                set: props.Order.alpacaAccount.user.image  
               } : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? {
                set: props.Order.alpacaAccount.user.role  
               } : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? {
                set: props.Order.alpacaAccount.user.bio  
               } : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? {
                set: props.Order.alpacaAccount.user.jobTitle  
               } : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? {
                set: props.Order.alpacaAccount.user.currentAccount  
               } : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? {
                set: props.Order.alpacaAccount.user.plan  
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? {
        upsert: props.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.Order.alpacaAccount.positions ? {
        upsert: props.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.Order.alpacaAccount.alerts ? {
        upsert: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? props.Order.alpacaAccount.user.id : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? 
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.Order.alpacaAccount.positions ? 
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.Order.alpacaAccount.alerts ? 
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? {
      upsert: {
        where: {
          id: props.Order.action.id !== undefined ? {
              equals: props.Order.action.id 
             } : undefined,
        },
        update: {
          id: props.Order.action.id !== undefined ? {
              set: props.Order.action.id  
             } : undefined,
          sequence: props.Order.action.sequence !== undefined ? {
              set: props.Order.action.sequence  
             } : undefined,
          type: props.Order.action.type !== undefined ? {
              set: props.Order.action.type  
             } : undefined,
          note: props.Order.action.note !== undefined ? {
              set: props.Order.action.note  
             } : undefined,
          status: props.Order.action.status !== undefined ? {
              set: props.Order.action.status  
             } : undefined,
          fee: props.Order.action.fee !== undefined ? {
              set: props.Order.action.fee  
             } : undefined,
      trade: props.Order.action.trade ? {
        upsert: {
          where: {
            id: props.Order.action.trade.id !== undefined ? {
                equals: props.Order.action.trade.id 
               } : undefined,
          },
          update: {
            id: props.Order.action.trade.id !== undefined ? {
                set: props.Order.action.trade.id  
               } : undefined,
            qty: props.Order.action.trade.qty !== undefined ? {
                set: props.Order.action.trade.qty  
               } : undefined,
            price: props.Order.action.trade.price !== undefined ? {
                set: props.Order.action.trade.price  
               } : undefined,
            total: props.Order.action.trade.total !== undefined ? {
                set: props.Order.action.trade.total  
               } : undefined,
            signal: props.Order.action.trade.signal !== undefined ? {
                set: props.Order.action.trade.signal  
               } : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? {
                set: props.Order.action.trade.strategy  
               } : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? {
                set: props.Order.action.trade.analysis  
               } : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? {
                set: props.Order.action.trade.confidence  
               } : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? {
                set: props.Order.action.trade.timestamp  
               } : undefined,
            status: props.Order.action.trade.status !== undefined ? {
                set: props.Order.action.trade.status  
               } : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.action.trade.id !== undefined ? props.Order.action.trade.id : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? {
      upsert: {
        where: {
          id: props.Order.asset.id !== undefined ? {
              equals: props.Order.asset.id 
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              equals: props.Order.asset.symbol 
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              equals: props.Order.asset.name 
             } : undefined,
        },
        update: {
          id: props.Order.asset.id !== undefined ? {
              set: props.Order.asset.id  
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              set: props.Order.asset.symbol  
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              set: props.Order.asset.name  
             } : undefined,
          type: props.Order.asset.type !== undefined ? {
              set: props.Order.asset.type  
             } : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? {
              set: props.Order.asset.logoUrl  
             } : undefined,
          description: props.Order.asset.description !== undefined ? {
              set: props.Order.asset.description  
             } : undefined,
          cik: props.Order.asset.cik !== undefined ? {
              set: props.Order.asset.cik  
             } : undefined,
          exchange: props.Order.asset.exchange !== undefined ? {
              set: props.Order.asset.exchange  
             } : undefined,
          currency: props.Order.asset.currency !== undefined ? {
              set: props.Order.asset.currency  
             } : undefined,
          country: props.Order.asset.country !== undefined ? {
              set: props.Order.asset.country  
             } : undefined,
          sector: props.Order.asset.sector !== undefined ? {
              set: props.Order.asset.sector  
             } : undefined,
          industry: props.Order.asset.industry !== undefined ? {
              set: props.Order.asset.industry  
             } : undefined,
          address: props.Order.asset.address !== undefined ? {
              set: props.Order.asset.address  
             } : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? {
              set: props.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? {
              set: props.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? {
              set: props.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? {
              set: props.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? {
              set: props.Order.asset.ebitda  
             } : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? {
              set: props.Order.asset.peRatio  
             } : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? {
              set: props.Order.asset.pegRatio  
             } : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? {
              set: props.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? {
              set: props.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? {
              set: props.Order.asset.dividendYield  
             } : undefined,
          eps: props.Order.asset.eps !== undefined ? {
              set: props.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? {
              set: props.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? {
              set: props.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? {
              set: props.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? {
              set: props.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? {
              set: props.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? {
              set: props.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? {
              set: props.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? {
              set: props.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? {
              set: props.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? {
              set: props.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? {
              set: props.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? {
              set: props.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? {
              set: props.Order.asset.trailingPE  
             } : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? {
              set: props.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? {
              set: props.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? {
              set: props.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? {
              set: props.Order.asset.evToEbitda  
             } : undefined,
          beta: props.Order.asset.beta !== undefined ? {
              set: props.Order.asset.beta  
             } : undefined,
          week52High: props.Order.asset.week52High !== undefined ? {
              set: props.Order.asset.week52High  
             } : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? {
              set: props.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? {
              set: props.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? {
              set: props.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? {
              set: props.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? {
              set: props.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? {
              set: props.Order.asset.exDividendDate  
             } : undefined,
          sellPrice: props.Order.asset.sellPrice !== undefined ? {
              set: props.Order.asset.sellPrice  
             } : undefined,
          buyPrice: props.Order.asset.buyPrice !== undefined ? {
              set: props.Order.asset.buyPrice  
             } : undefined,
      trades: props.Order.asset.trades ? {
        upsert: props.Order.asset.trades.map((item: any) => ({
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
      positions: props.Order.asset.positions ? {
        upsert: props.Order.asset.positions.map((item: any) => ({
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
      newsMentions: props.Order.asset.newsMentions ? {
        upsert: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            url: item.url !== undefined ? {
                set: item.url  
               } : undefined,
            relevancyScore: item.relevancyScore !== undefined ? {
                set: item.relevancyScore  
               } : undefined,
            sentimentScore: item.sentimentScore !== undefined ? {
                set: item.sentimentScore  
               } : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? {
                set: item.sentimentLabel  
               } : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          sellPrice: props.Order.asset.sellPrice !== undefined ? props.Order.asset.sellPrice : undefined,
          buyPrice: props.Order.asset.buyPrice !== undefined ? props.Order.asset.buyPrice : undefined,
      trades: props.Order.asset.trades ? 
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
      positions: props.Order.asset.positions ? 
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
      newsMentions: props.Order.asset.newsMentions ? 
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
      user: props.Order.alpacaAccount.user ? 
        typeof props.Order.alpacaAccount.user === 'object' && Object.keys(props.Order.alpacaAccount.user).length === 1 && Object.keys(props.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: props.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.alpacaAccount.user.id !== undefined ? props.Order.alpacaAccount.user.id : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            name: props.Order.alpacaAccount.user.name !== undefined ? {
                equals: props.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: props.Order.alpacaAccount.user.name !== undefined ? props.Order.alpacaAccount.user.name : undefined,
            email: props.Order.alpacaAccount.user.email !== undefined ? props.Order.alpacaAccount.user.email : undefined,
            emailVerified: props.Order.alpacaAccount.user.emailVerified !== undefined ? props.Order.alpacaAccount.user.emailVerified : undefined,
            image: props.Order.alpacaAccount.user.image !== undefined ? props.Order.alpacaAccount.user.image : undefined,
            role: props.Order.alpacaAccount.user.role !== undefined ? props.Order.alpacaAccount.user.role : undefined,
            bio: props.Order.alpacaAccount.user.bio !== undefined ? props.Order.alpacaAccount.user.bio : undefined,
            jobTitle: props.Order.alpacaAccount.user.jobTitle !== undefined ? props.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: props.Order.alpacaAccount.user.currentAccount !== undefined ? props.Order.alpacaAccount.user.currentAccount : undefined,
            plan: props.Order.alpacaAccount.user.plan !== undefined ? props.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: props.Order.alpacaAccount.trades ? 
        Array.isArray(props.Order.alpacaAccount.trades) && props.Order.alpacaAccount.trades.length > 0 &&  props.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: props.Order.alpacaAccount.positions ? 
        Array.isArray(props.Order.alpacaAccount.positions) && props.Order.alpacaAccount.positions.length > 0 &&  props.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: props.Order.alpacaAccount.alerts ? 
        Array.isArray(props.Order.alpacaAccount.alerts) && props.Order.alpacaAccount.alerts.length > 0 &&  props.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
      trade: props.Order.action.trade ? 
        typeof props.Order.action.trade === 'object' && Object.keys(props.Order.action.trade).length === 1 && Object.keys(props.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: props.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: props.Order.action.trade.id !== undefined ? props.Order.action.trade.id : undefined,
          },
          create: {
            qty: props.Order.action.trade.qty !== undefined ? props.Order.action.trade.qty : undefined,
            price: props.Order.action.trade.price !== undefined ? props.Order.action.trade.price : undefined,
            total: props.Order.action.trade.total !== undefined ? props.Order.action.trade.total : undefined,
            signal: props.Order.action.trade.signal !== undefined ? props.Order.action.trade.signal : undefined,
            strategy: props.Order.action.trade.strategy !== undefined ? props.Order.action.trade.strategy : undefined,
            analysis: props.Order.action.trade.analysis !== undefined ? props.Order.action.trade.analysis : undefined,
            confidence: props.Order.action.trade.confidence !== undefined ? props.Order.action.trade.confidence : undefined,
            timestamp: props.Order.action.trade.timestamp !== undefined ? props.Order.action.trade.timestamp : undefined,
            status: props.Order.action.trade.status !== undefined ? props.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          sellPrice: props.Order.asset.sellPrice !== undefined ? props.Order.asset.sellPrice : undefined,
          buyPrice: props.Order.asset.buyPrice !== undefined ? props.Order.asset.buyPrice : undefined,
      trades: props.Order.asset.trades ? 
        Array.isArray(props.Order.asset.trades) && props.Order.asset.trades.length > 0 &&  props.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.trades.map((item: any) => ({
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
      positions: props.Order.asset.positions ? 
        Array.isArray(props.Order.asset.positions) && props.Order.asset.positions.length > 0 &&  props.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.positions.map((item: any) => ({
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
      newsMentions: props.Order.asset.newsMentions ? 
        Array.isArray(props.Order.asset.newsMentions) && props.Order.asset.newsMentions.length > 0 &&  props.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        props.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: props.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneStopLoss) {
        return response.data.updateOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update multiple StopLoss records.
   * @param props - Array of StopLoss objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: StopLossType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_STOPLOSS = gql`
      mutation updateManyStopLoss($data: [StopLossCreateManyInput!]!) {
        updateManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  Order: prop.Order ? {
    upsert: {
      where: {
        id: prop.Order.id !== undefined ? {
            equals: prop.Order.id 
           } : undefined,
      },
      update: {
        id: prop.Order.id !== undefined ? {
            set: prop.Order.id  
           } : undefined,
        clientOrderId: prop.Order.clientOrderId !== undefined ? {
            set: prop.Order.clientOrderId  
           } : undefined,
        qty: prop.Order.qty !== undefined ? {
            set: prop.Order.qty  
           } : undefined,
        notional: prop.Order.notional !== undefined ? {
            set: prop.Order.notional  
           } : undefined,
        side: prop.Order.side !== undefined ? {
            set: prop.Order.side  
           } : undefined,
        type: prop.Order.type !== undefined ? {
            set: prop.Order.type  
           } : undefined,
        orderClass: prop.Order.orderClass !== undefined ? {
            set: prop.Order.orderClass  
           } : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? {
            set: prop.Order.timeInForce  
           } : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? {
            set: prop.Order.limitPrice  
           } : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? {
            set: prop.Order.stopPrice  
           } : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? {
            set: prop.Order.trailPrice  
           } : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? {
            set: prop.Order.trailPercent  
           } : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? {
            set: prop.Order.extendedHours  
           } : undefined,
        status: prop.Order.status !== undefined ? {
            set: prop.Order.status  
           } : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? {
            set: prop.Order.submittedAt  
           } : undefined,
        filledAt: prop.Order.filledAt !== undefined ? {
            set: prop.Order.filledAt  
           } : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? {
            set: prop.Order.filledAvgPrice  
           } : undefined,
        fee: prop.Order.fee !== undefined ? {
            set: prop.Order.fee  
           } : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? {
            set: prop.Order.strikePrice  
           } : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? {
            set: prop.Order.expirationDate  
           } : undefined,
        optionType: prop.Order.optionType !== undefined ? {
            set: prop.Order.optionType  
           } : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? {
            set: prop.Order.stopLossId  
           } : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? {
            set: prop.Order.takeProfitId  
           } : undefined,
    takeProfit: prop.Order.takeProfit ? {
      upsert: {
        where: {
          id: prop.Order.takeProfit.id !== undefined ? {
              equals: prop.Order.takeProfit.id 
             } : undefined,
        },
        update: {
          id: prop.Order.takeProfit.id !== undefined ? {
              set: prop.Order.takeProfit.id  
             } : undefined,
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? {
              set: prop.Order.takeProfit.limitPrice  
             } : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? {
              set: prop.Order.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? prop.Order.takeProfit.limitPrice : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? prop.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              equals: prop.Order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              set: prop.Order.alpacaAccount.id  
             } : undefined,
          type: prop.Order.alpacaAccount.type !== undefined ? {
              set: prop.Order.alpacaAccount.type  
             } : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? {
              set: prop.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? {
              set: prop.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? {
              set: prop.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? {
              set: prop.Order.alpacaAccount.marketOpen  
             } : undefined,
      user: prop.Order.alpacaAccount.user ? {
        upsert: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? {
                equals: prop.Order.alpacaAccount.user.id 
               } : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? {
                equals: prop.Order.alpacaAccount.user.email 
               } : undefined,
          },
          update: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? {
                set: prop.Order.alpacaAccount.user.id  
               } : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                set: prop.Order.alpacaAccount.user.name  
               } : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? {
                set: prop.Order.alpacaAccount.user.email  
               } : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? {
                set: prop.Order.alpacaAccount.user.emailVerified  
               } : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? {
                set: prop.Order.alpacaAccount.user.image  
               } : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? {
                set: prop.Order.alpacaAccount.user.role  
               } : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? {
                set: prop.Order.alpacaAccount.user.bio  
               } : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? {
                set: prop.Order.alpacaAccount.user.jobTitle  
               } : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? {
                set: prop.Order.alpacaAccount.user.currentAccount  
               } : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? {
                set: prop.Order.alpacaAccount.user.plan  
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? {
        upsert: prop.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.Order.alpacaAccount.positions ? {
        upsert: prop.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.Order.alpacaAccount.alerts ? {
        upsert: prop.Order.alpacaAccount.alerts.map((item: any) => ({
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
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
      user: prop.Order.alpacaAccount.user ? 
        typeof prop.Order.alpacaAccount.user === 'object' && Object.keys(prop.Order.alpacaAccount.user).length === 1 && Object.keys(prop.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? prop.Order.alpacaAccount.user.id : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? 
        Array.isArray(prop.Order.alpacaAccount.trades) && prop.Order.alpacaAccount.trades.length > 0 &&  prop.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.Order.alpacaAccount.positions ? 
        Array.isArray(prop.Order.alpacaAccount.positions) && prop.Order.alpacaAccount.positions.length > 0 &&  prop.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.Order.alpacaAccount.alerts ? 
        Array.isArray(prop.Order.alpacaAccount.alerts) && prop.Order.alpacaAccount.alerts.length > 0 &&  prop.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: prop.Order.action ? {
      upsert: {
        where: {
          id: prop.Order.action.id !== undefined ? {
              equals: prop.Order.action.id 
             } : undefined,
        },
        update: {
          id: prop.Order.action.id !== undefined ? {
              set: prop.Order.action.id  
             } : undefined,
          sequence: prop.Order.action.sequence !== undefined ? {
              set: prop.Order.action.sequence  
             } : undefined,
          type: prop.Order.action.type !== undefined ? {
              set: prop.Order.action.type  
             } : undefined,
          note: prop.Order.action.note !== undefined ? {
              set: prop.Order.action.note  
             } : undefined,
          status: prop.Order.action.status !== undefined ? {
              set: prop.Order.action.status  
             } : undefined,
          fee: prop.Order.action.fee !== undefined ? {
              set: prop.Order.action.fee  
             } : undefined,
      trade: prop.Order.action.trade ? {
        upsert: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? {
                equals: prop.Order.action.trade.id 
               } : undefined,
          },
          update: {
            id: prop.Order.action.trade.id !== undefined ? {
                set: prop.Order.action.trade.id  
               } : undefined,
            qty: prop.Order.action.trade.qty !== undefined ? {
                set: prop.Order.action.trade.qty  
               } : undefined,
            price: prop.Order.action.trade.price !== undefined ? {
                set: prop.Order.action.trade.price  
               } : undefined,
            total: prop.Order.action.trade.total !== undefined ? {
                set: prop.Order.action.trade.total  
               } : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? {
                set: prop.Order.action.trade.signal  
               } : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? {
                set: prop.Order.action.trade.strategy  
               } : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? {
                set: prop.Order.action.trade.analysis  
               } : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? {
                set: prop.Order.action.trade.confidence  
               } : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? {
                set: prop.Order.action.trade.timestamp  
               } : undefined,
            status: prop.Order.action.trade.status !== undefined ? {
                set: prop.Order.action.trade.status  
               } : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
      trade: prop.Order.action.trade ? 
        typeof prop.Order.action.trade === 'object' && Object.keys(prop.Order.action.trade).length === 1 && Object.keys(prop.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? prop.Order.action.trade.id : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? {
      upsert: {
        where: {
          id: prop.Order.asset.id !== undefined ? {
              equals: prop.Order.asset.id 
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              equals: prop.Order.asset.symbol 
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              equals: prop.Order.asset.name 
             } : undefined,
        },
        update: {
          id: prop.Order.asset.id !== undefined ? {
              set: prop.Order.asset.id  
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              set: prop.Order.asset.symbol  
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              set: prop.Order.asset.name  
             } : undefined,
          type: prop.Order.asset.type !== undefined ? {
              set: prop.Order.asset.type  
             } : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? {
              set: prop.Order.asset.logoUrl  
             } : undefined,
          description: prop.Order.asset.description !== undefined ? {
              set: prop.Order.asset.description  
             } : undefined,
          cik: prop.Order.asset.cik !== undefined ? {
              set: prop.Order.asset.cik  
             } : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? {
              set: prop.Order.asset.exchange  
             } : undefined,
          currency: prop.Order.asset.currency !== undefined ? {
              set: prop.Order.asset.currency  
             } : undefined,
          country: prop.Order.asset.country !== undefined ? {
              set: prop.Order.asset.country  
             } : undefined,
          sector: prop.Order.asset.sector !== undefined ? {
              set: prop.Order.asset.sector  
             } : undefined,
          industry: prop.Order.asset.industry !== undefined ? {
              set: prop.Order.asset.industry  
             } : undefined,
          address: prop.Order.asset.address !== undefined ? {
              set: prop.Order.asset.address  
             } : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? {
              set: prop.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? {
              set: prop.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? {
              set: prop.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? {
              set: prop.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? {
              set: prop.Order.asset.ebitda  
             } : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? {
              set: prop.Order.asset.peRatio  
             } : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? {
              set: prop.Order.asset.pegRatio  
             } : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? {
              set: prop.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? {
              set: prop.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? {
              set: prop.Order.asset.dividendYield  
             } : undefined,
          eps: prop.Order.asset.eps !== undefined ? {
              set: prop.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? {
              set: prop.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? {
              set: prop.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? {
              set: prop.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? {
              set: prop.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? {
              set: prop.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? {
              set: prop.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? {
              set: prop.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? {
              set: prop.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? {
              set: prop.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? {
              set: prop.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? {
              set: prop.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? {
              set: prop.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? {
              set: prop.Order.asset.trailingPE  
             } : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? {
              set: prop.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? {
              set: prop.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? {
              set: prop.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? {
              set: prop.Order.asset.evToEbitda  
             } : undefined,
          beta: prop.Order.asset.beta !== undefined ? {
              set: prop.Order.asset.beta  
             } : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? {
              set: prop.Order.asset.week52High  
             } : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? {
              set: prop.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? {
              set: prop.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? {
              set: prop.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? {
              set: prop.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? {
              set: prop.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? {
              set: prop.Order.asset.exDividendDate  
             } : undefined,
          sellPrice: prop.Order.asset.sellPrice !== undefined ? {
              set: prop.Order.asset.sellPrice  
             } : undefined,
          buyPrice: prop.Order.asset.buyPrice !== undefined ? {
              set: prop.Order.asset.buyPrice  
             } : undefined,
      trades: prop.Order.asset.trades ? {
        upsert: prop.Order.asset.trades.map((item: any) => ({
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
      positions: prop.Order.asset.positions ? {
        upsert: prop.Order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.Order.asset.newsMentions ? {
        upsert: prop.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          update: {
            id: item.id !== undefined ? {
                set: item.id  
               } : undefined,
            url: item.url !== undefined ? {
                set: item.url  
               } : undefined,
            relevancyScore: item.relevancyScore !== undefined ? {
                set: item.relevancyScore  
               } : undefined,
            sentimentScore: item.sentimentScore !== undefined ? {
                set: item.sentimentScore  
               } : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? {
                set: item.sentimentLabel  
               } : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          sellPrice: prop.Order.asset.sellPrice !== undefined ? prop.Order.asset.sellPrice : undefined,
          buyPrice: prop.Order.asset.buyPrice !== undefined ? prop.Order.asset.buyPrice : undefined,
      trades: prop.Order.asset.trades ? 
        Array.isArray(prop.Order.asset.trades) && prop.Order.asset.trades.length > 0 &&  prop.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.trades.map((item: any) => ({
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
      positions: prop.Order.asset.positions ? 
        Array.isArray(prop.Order.asset.positions) && prop.Order.asset.positions.length > 0 &&  prop.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.Order.asset.newsMentions ? 
        Array.isArray(prop.Order.asset.newsMentions) && prop.Order.asset.newsMentions.length > 0 &&  prop.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: prop.Order.clientOrderId !== undefined ? prop.Order.clientOrderId : undefined,
        qty: prop.Order.qty !== undefined ? prop.Order.qty : undefined,
        notional: prop.Order.notional !== undefined ? prop.Order.notional : undefined,
        side: prop.Order.side !== undefined ? prop.Order.side : undefined,
        type: prop.Order.type !== undefined ? prop.Order.type : undefined,
        orderClass: prop.Order.orderClass !== undefined ? prop.Order.orderClass : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? prop.Order.timeInForce : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? prop.Order.limitPrice : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? prop.Order.stopPrice : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? prop.Order.trailPrice : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? prop.Order.trailPercent : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? prop.Order.extendedHours : undefined,
        status: prop.Order.status !== undefined ? prop.Order.status : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? prop.Order.submittedAt : undefined,
        filledAt: prop.Order.filledAt !== undefined ? prop.Order.filledAt : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? prop.Order.filledAvgPrice : undefined,
        fee: prop.Order.fee !== undefined ? prop.Order.fee : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? prop.Order.strikePrice : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? prop.Order.expirationDate : undefined,
        optionType: prop.Order.optionType !== undefined ? prop.Order.optionType : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? prop.Order.stopLossId : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? prop.Order.takeProfitId : undefined,
    takeProfit: prop.Order.takeProfit ? 
      typeof prop.Order.takeProfit === 'object' && Object.keys(prop.Order.takeProfit).length === 1 && Object.keys(prop.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: prop.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.takeProfit.id !== undefined ? prop.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? prop.Order.takeProfit.limitPrice : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? prop.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? 
      typeof prop.Order.alpacaAccount === 'object' && Object.keys(prop.Order.alpacaAccount).length === 1 && Object.keys(prop.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: prop.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? prop.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
      user: prop.Order.alpacaAccount.user ? 
        typeof prop.Order.alpacaAccount.user === 'object' && Object.keys(prop.Order.alpacaAccount.user).length === 1 && Object.keys(prop.Order.alpacaAccount.user)[0] === 'id'
    ? { connect: {
            id: prop.Order.alpacaAccount.user.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.alpacaAccount.user.id !== undefined ? prop.Order.alpacaAccount.user.id : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            name: prop.Order.alpacaAccount.user.name !== undefined ? {
                equals: prop.Order.alpacaAccount.user.name 
               } : undefined,
          },
          create: {
            name: prop.Order.alpacaAccount.user.name !== undefined ? prop.Order.alpacaAccount.user.name : undefined,
            email: prop.Order.alpacaAccount.user.email !== undefined ? prop.Order.alpacaAccount.user.email : undefined,
            emailVerified: prop.Order.alpacaAccount.user.emailVerified !== undefined ? prop.Order.alpacaAccount.user.emailVerified : undefined,
            image: prop.Order.alpacaAccount.user.image !== undefined ? prop.Order.alpacaAccount.user.image : undefined,
            role: prop.Order.alpacaAccount.user.role !== undefined ? prop.Order.alpacaAccount.user.role : undefined,
            bio: prop.Order.alpacaAccount.user.bio !== undefined ? prop.Order.alpacaAccount.user.bio : undefined,
            jobTitle: prop.Order.alpacaAccount.user.jobTitle !== undefined ? prop.Order.alpacaAccount.user.jobTitle : undefined,
            currentAccount: prop.Order.alpacaAccount.user.currentAccount !== undefined ? prop.Order.alpacaAccount.user.currentAccount : undefined,
            plan: prop.Order.alpacaAccount.user.plan !== undefined ? prop.Order.alpacaAccount.user.plan : undefined,
          },
        }
      } : undefined,
      trades: prop.Order.alpacaAccount.trades ? 
        Array.isArray(prop.Order.alpacaAccount.trades) && prop.Order.alpacaAccount.trades.length > 0 &&  prop.Order.alpacaAccount.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.trades.map((item: any) => ({
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
      positions: prop.Order.alpacaAccount.positions ? 
        Array.isArray(prop.Order.alpacaAccount.positions) && prop.Order.alpacaAccount.positions.length > 0 &&  prop.Order.alpacaAccount.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.positions.map((item: any) => ({
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
      alerts: prop.Order.alpacaAccount.alerts ? 
        Array.isArray(prop.Order.alpacaAccount.alerts) && prop.Order.alpacaAccount.alerts.length > 0 &&  prop.Order.alpacaAccount.alerts.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.alpacaAccount.alerts.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.alpacaAccount.alerts.map((item: any) => ({
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
    action: prop.Order.action ? 
      typeof prop.Order.action === 'object' && Object.keys(prop.Order.action).length === 1 && Object.keys(prop.Order.action)[0] === 'id'
    ? { connect: {
          id: prop.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.action.id !== undefined ? prop.Order.action.id : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
      trade: prop.Order.action.trade ? 
        typeof prop.Order.action.trade === 'object' && Object.keys(prop.Order.action.trade).length === 1 && Object.keys(prop.Order.action.trade)[0] === 'id'
    ? { connect: {
            id: prop.Order.action.trade.id
            }
          }
    : { connectOrCreate: {
          where: {
            id: prop.Order.action.trade.id !== undefined ? prop.Order.action.trade.id : undefined,
          },
          create: {
            qty: prop.Order.action.trade.qty !== undefined ? prop.Order.action.trade.qty : undefined,
            price: prop.Order.action.trade.price !== undefined ? prop.Order.action.trade.price : undefined,
            total: prop.Order.action.trade.total !== undefined ? prop.Order.action.trade.total : undefined,
            signal: prop.Order.action.trade.signal !== undefined ? prop.Order.action.trade.signal : undefined,
            strategy: prop.Order.action.trade.strategy !== undefined ? prop.Order.action.trade.strategy : undefined,
            analysis: prop.Order.action.trade.analysis !== undefined ? prop.Order.action.trade.analysis : undefined,
            confidence: prop.Order.action.trade.confidence !== undefined ? prop.Order.action.trade.confidence : undefined,
            timestamp: prop.Order.action.trade.timestamp !== undefined ? prop.Order.action.trade.timestamp : undefined,
            status: prop.Order.action.trade.status !== undefined ? prop.Order.action.trade.status : undefined,
          },
        }
      } : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? 
      typeof prop.Order.asset === 'object' && Object.keys(prop.Order.asset).length === 1 && Object.keys(prop.Order.asset)[0] === 'id'
    ? { connect: {
          id: prop.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.asset.id !== undefined ? prop.Order.asset.id : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
        },
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          sellPrice: prop.Order.asset.sellPrice !== undefined ? prop.Order.asset.sellPrice : undefined,
          buyPrice: prop.Order.asset.buyPrice !== undefined ? prop.Order.asset.buyPrice : undefined,
      trades: prop.Order.asset.trades ? 
        Array.isArray(prop.Order.asset.trades) && prop.Order.asset.trades.length > 0 &&  prop.Order.asset.trades.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.trades.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.trades.map((item: any) => ({
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
      positions: prop.Order.asset.positions ? 
        Array.isArray(prop.Order.asset.positions) && prop.Order.asset.positions.length > 0 &&  prop.Order.asset.positions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.positions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.positions.map((item: any) => ({
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
      newsMentions: prop.Order.asset.newsMentions ? 
        Array.isArray(prop.Order.asset.newsMentions) && prop.Order.asset.newsMentions.length > 0 &&  prop.Order.asset.newsMentions.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
          connect:        prop.Order.asset.newsMentions.map((item: any) => ({
             id: item.id
          }))
 }
 : { connectOrCreate: prop.Order.asset.newsMentions.map((item: any) => ({
          where: {
            id: item.id !== undefined ? item.id : undefined,
            url: item.url !== undefined ? item.url : undefined,
          },
          create: {
            url: item.url !== undefined ? item.url : undefined,
            relevancyScore: item.relevancyScore !== undefined ? item.relevancyScore : undefined,
            sentimentScore: item.sentimentScore !== undefined ? item.sentimentScore : undefined,
            sentimentLabel: item.sentimentLabel !== undefined ? item.sentimentLabel : undefined,
          },
        }))
      } : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyStopLoss) {
        return response.data.updateManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Delete a single StopLoss record.
   * @param props - Properties to update.
   * @returns The deleted StopLoss or null.
   */
  async delete(props: StopLossType): Promise<StopLossType> {

    const client = createApolloClient();

      const DELETE_ONE_STOPLOSS = gql`
      mutation deleteOneStopLoss($where: StopLossWhereUniqueInput!) {
        deleteOneStopLoss(where: $where) {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneStopLoss) {
        return response.data.deleteOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single StopLoss record by ID.
   * @param props - Properties to update.
   * @returns The retrieved StopLoss or null.
   */
  async get(props: StopLossType): Promise<StopLossType | null> {

    const client = createApolloClient();

      const GET_STOPLOSS = gql`
      query getStopLoss($where: StopLossWhereUniqueInput!) {
        getStopLoss(where: $where) {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getStopLoss ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all StopLosses records.
   * @returns An array of StopLoss records or null.
   */
  async getAll(): Promise<StopLossType[] | null> {

    const client = createApolloClient();

      const GET_ALL_STOPLOSS = gql`
      query getAllStopLoss {
        stopLosses {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
      }`;

    try {
      const response = await client.query({ query: GET_ALL_STOPLOSS });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.stopLosses ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple StopLoss records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found StopLoss records or null.
   */
  async findMany(props: StopLossType): Promise<StopLossType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_STOPLOSS = gql`
      query findManyStopLoss($where: StopLossWhereInput!) {
        stopLosses(where: $where) {
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
  Order {
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
      type
      APIKey
      APISecret
      configuration
      marketOpen
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
        alpacaAccounts {
          id
        }
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
              type
              APIKey
              APISecret
              configuration
              marketOpen
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
                alpacaAccounts {
                  id
                }
              }
              userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
          }
          userId
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
          type
          APIKey
          APISecret
          configuration
          marketOpen
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
            alpacaAccounts {
              id
            }
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
      const response = await client.query({ query: FIND_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.StopLosses) {
        return response.data.stopLosses;
      } else {
       return [] as StopLossType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  }
};

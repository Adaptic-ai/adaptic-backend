

import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Action model.
 */

export const Action = {

  /**
   * Create a new Action record.
   * @param props - Properties for the new record.
   * @returns The created Action or null.
   */

  async create(props: ActionType): Promise<ActionType> {

  const client = createApolloClient();

  const CREATE_ONE_ACTION = gql`
      mutation createOneAction($data: ActionCreateInput!) {
        createOneAction(data: $data) {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
          }
        }
      }
   `;

    const variables = {
      data: {
          sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  trade: props.trade ? {
    connectOrCreate: {
      where: {
        id: props.trade.id !== undefined ? props.trade.id : undefined,
      },
      create: {
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        optionContractType: props.trade.optionContractType !== undefined ? props.trade.optionContractType : undefined,
    alpacaAccount: props.trade.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: props.trade.alpacaAccount.id !== undefined ? props.trade.alpacaAccount.id : undefined,
        },
        create: {
          type: props.trade.alpacaAccount.type !== undefined ? props.trade.alpacaAccount.type : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? props.trade.alpacaAccount.APIKey : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? props.trade.alpacaAccount.APISecret : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? props.trade.alpacaAccount.configuration : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? props.trade.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
          sellPrice: props.trade.asset.sellPrice !== undefined ? props.trade.asset.sellPrice : undefined,
          buyPrice: props.trade.asset.buyPrice !== undefined ? props.trade.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
  order: props.order ? {
    connectOrCreate: {
      where: {
        id: props.order.id !== undefined ? props.order.id : undefined,
      },
      create: {
        type: props.order.type !== undefined ? props.order.type : undefined,
        side: props.order.side !== undefined ? props.order.side : undefined,
        qty: props.order.qty !== undefined ? props.order.qty : undefined,
        price: props.order.price !== undefined ? props.order.price : undefined,
        stopLoss: props.order.stopLoss !== undefined ? props.order.stopLoss : undefined,
        status: props.order.status !== undefined ? props.order.status : undefined,
        executionTime: props.order.executionTime !== undefined ? props.order.executionTime : undefined,
        fee: props.order.fee !== undefined ? props.order.fee : undefined,
    alpacaAccount: props.order.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? props.order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.order.asset ? {
      connectOrCreate: {
        where: {
          id: props.order.asset.id !== undefined ? props.order.asset.id : undefined,
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
        },
        create: {
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
          type: props.order.asset.type !== undefined ? props.order.asset.type : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? props.order.asset.logoUrl : undefined,
          description: props.order.asset.description !== undefined ? props.order.asset.description : undefined,
          cik: props.order.asset.cik !== undefined ? props.order.asset.cik : undefined,
          exchange: props.order.asset.exchange !== undefined ? props.order.asset.exchange : undefined,
          currency: props.order.asset.currency !== undefined ? props.order.asset.currency : undefined,
          country: props.order.asset.country !== undefined ? props.order.asset.country : undefined,
          sector: props.order.asset.sector !== undefined ? props.order.asset.sector : undefined,
          industry: props.order.asset.industry !== undefined ? props.order.asset.industry : undefined,
          address: props.order.asset.address !== undefined ? props.order.asset.address : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? props.order.asset.officialSite : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? props.order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? props.order.asset.latestQuarter : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? props.order.asset.marketCapitalization : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? props.order.asset.ebitda : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? props.order.asset.peRatio : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? props.order.asset.pegRatio : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? props.order.asset.bookValue : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? props.order.asset.dividendPerShare : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? props.order.asset.dividendYield : undefined,
          eps: props.order.asset.eps !== undefined ? props.order.asset.eps : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? props.order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? props.order.asset.profitMargin : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? props.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? props.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? props.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? props.order.asset.revenueTTM : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? props.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? props.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? props.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? props.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? props.order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? props.order.asset.analystRatingHold : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? props.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? props.order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? props.order.asset.trailingPE : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? props.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? props.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? props.order.asset.priceToBookRatio : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? props.order.asset.evToRevenue : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? props.order.asset.evToEbitda : undefined,
          beta: props.order.asset.beta !== undefined ? props.order.asset.beta : undefined,
          week52High: props.order.asset.week52High !== undefined ? props.order.asset.week52High : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? props.order.asset.week52Low : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? props.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? props.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? props.order.asset.sharesOutstanding : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? props.order.asset.dividendDate : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? props.order.asset.exDividendDate : undefined,
          sellPrice: props.order.asset.sellPrice !== undefined ? props.order.asset.sellPrice : undefined,
          buyPrice: props.order.asset.buyPrice !== undefined ? props.order.asset.buyPrice : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAction) {
        return response.data.createOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAction:', error);
      throw error;
    }
  },

  /**
   * Create multiple Action records.
   * @param props - Array of Action objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: ActionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_ACTION = gql`
      mutation createManyAction($data: [ActionCreateManyInput!]!) {
        createManyAction(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  sequence: prop.sequence !== undefined ? prop.sequence : undefined,
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAction) {
        return response.data.createManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAction:', error);
      throw error;
    }
  },

  /**
   * Update a single Action record.
   * @param props - Properties to update.
   * @returns The updated Action or null.
   */
  async update(props: ActionType): Promise<ActionType> {

    const client = createApolloClient();

      const UPDATE_ONE_ACTION = gql`
      mutation updateOneAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
        updateOneAction(data: $data, where: $where) {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
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
  sequence: props.sequence !== undefined ? {
            set: props.sequence 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  orderId: props.orderId !== undefined ? {
            set: props.orderId 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  trade: props.trade ? {
    upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id 
           } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id  
           } : undefined,
        qty: props.trade.qty !== undefined ? {
            set: props.trade.qty  
           } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price  
           } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total  
           } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal  
           } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy  
           } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis  
           } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence  
           } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp  
           } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status  
           } : undefined,
        optionContractType: props.trade.optionContractType !== undefined ? {
            set: props.trade.optionContractType  
           } : undefined,
    alpacaAccount: props.trade.alpacaAccount ? {
      upsert: {
        where: {
          id: props.trade.alpacaAccount.id !== undefined ? {
              equals: props.trade.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: props.trade.alpacaAccount.id !== undefined ? {
              set: props.trade.alpacaAccount.id  
             } : undefined,
          type: props.trade.alpacaAccount.type !== undefined ? {
              set: props.trade.alpacaAccount.type  
             } : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? {
              set: props.trade.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? {
              set: props.trade.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? {
              set: props.trade.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? {
              set: props.trade.alpacaAccount.marketOpen  
             } : undefined,
        },
        create: {
          type: props.trade.alpacaAccount.type !== undefined ? props.trade.alpacaAccount.type : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? props.trade.alpacaAccount.APIKey : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? props.trade.alpacaAccount.APISecret : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? props.trade.alpacaAccount.configuration : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? props.trade.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      upsert: {
        where: {
          id: props.trade.asset.id !== undefined ? {
              equals: props.trade.asset.id 
             } : undefined,
          symbol: props.trade.asset.symbol !== undefined ? {
              equals: props.trade.asset.symbol 
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              equals: props.trade.asset.name 
             } : undefined,
        },
        update: {
          id: props.trade.asset.id !== undefined ? {
              set: props.trade.asset.id  
             } : undefined,
          symbol: props.trade.asset.symbol !== undefined ? {
              set: props.trade.asset.symbol  
             } : undefined,
          name: props.trade.asset.name !== undefined ? {
              set: props.trade.asset.name  
             } : undefined,
          type: props.trade.asset.type !== undefined ? {
              set: props.trade.asset.type  
             } : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? {
              set: props.trade.asset.logoUrl  
             } : undefined,
          description: props.trade.asset.description !== undefined ? {
              set: props.trade.asset.description  
             } : undefined,
          cik: props.trade.asset.cik !== undefined ? {
              set: props.trade.asset.cik  
             } : undefined,
          exchange: props.trade.asset.exchange !== undefined ? {
              set: props.trade.asset.exchange  
             } : undefined,
          currency: props.trade.asset.currency !== undefined ? {
              set: props.trade.asset.currency  
             } : undefined,
          country: props.trade.asset.country !== undefined ? {
              set: props.trade.asset.country  
             } : undefined,
          sector: props.trade.asset.sector !== undefined ? {
              set: props.trade.asset.sector  
             } : undefined,
          industry: props.trade.asset.industry !== undefined ? {
              set: props.trade.asset.industry  
             } : undefined,
          address: props.trade.asset.address !== undefined ? {
              set: props.trade.asset.address  
             } : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? {
              set: props.trade.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? {
              set: props.trade.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? {
              set: props.trade.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? {
              set: props.trade.asset.marketCapitalization  
             } : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? {
              set: props.trade.asset.ebitda  
             } : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? {
              set: props.trade.asset.peRatio  
             } : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? {
              set: props.trade.asset.pegRatio  
             } : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? {
              set: props.trade.asset.bookValue  
             } : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? {
              set: props.trade.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? {
              set: props.trade.asset.dividendYield  
             } : undefined,
          eps: props.trade.asset.eps !== undefined ? {
              set: props.trade.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? {
              set: props.trade.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? {
              set: props.trade.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? {
              set: props.trade.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? {
              set: props.trade.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? {
              set: props.trade.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? {
              set: props.trade.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? {
              set: props.trade.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? {
              set: props.trade.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.trade.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.trade.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? {
              set: props.trade.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? {
              set: props.trade.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? {
              set: props.trade.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? {
              set: props.trade.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? {
              set: props.trade.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? {
              set: props.trade.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? {
              set: props.trade.asset.trailingPE  
             } : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? {
              set: props.trade.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.trade.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? {
              set: props.trade.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? {
              set: props.trade.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? {
              set: props.trade.asset.evToEbitda  
             } : undefined,
          beta: props.trade.asset.beta !== undefined ? {
              set: props.trade.asset.beta  
             } : undefined,
          week52High: props.trade.asset.week52High !== undefined ? {
              set: props.trade.asset.week52High  
             } : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? {
              set: props.trade.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? {
              set: props.trade.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? {
              set: props.trade.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? {
              set: props.trade.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? {
              set: props.trade.asset.dividendDate  
             } : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? {
              set: props.trade.asset.exDividendDate  
             } : undefined,
          sellPrice: props.trade.asset.sellPrice !== undefined ? {
              set: props.trade.asset.sellPrice  
             } : undefined,
          buyPrice: props.trade.asset.buyPrice !== undefined ? {
              set: props.trade.asset.buyPrice  
             } : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
          sellPrice: props.trade.asset.sellPrice !== undefined ? props.trade.asset.sellPrice : undefined,
          buyPrice: props.trade.asset.buyPrice !== undefined ? props.trade.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        optionContractType: props.trade.optionContractType !== undefined ? props.trade.optionContractType : undefined,
    alpacaAccount: props.trade.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: props.trade.alpacaAccount.id !== undefined ? props.trade.alpacaAccount.id : undefined,
        },
        create: {
          type: props.trade.alpacaAccount.type !== undefined ? props.trade.alpacaAccount.type : undefined,
          APIKey: props.trade.alpacaAccount.APIKey !== undefined ? props.trade.alpacaAccount.APIKey : undefined,
          APISecret: props.trade.alpacaAccount.APISecret !== undefined ? props.trade.alpacaAccount.APISecret : undefined,
          configuration: props.trade.alpacaAccount.configuration !== undefined ? props.trade.alpacaAccount.configuration : undefined,
          marketOpen: props.trade.alpacaAccount.marketOpen !== undefined ? props.trade.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.trade.asset ? {
      connectOrCreate: {
        where: {
          id: props.trade.asset.id !== undefined ? props.trade.asset.id : undefined,
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
        },
        create: {
          symbol: props.trade.asset.symbol !== undefined ? props.trade.asset.symbol : undefined,
          name: props.trade.asset.name !== undefined ? props.trade.asset.name : undefined,
          type: props.trade.asset.type !== undefined ? props.trade.asset.type : undefined,
          logoUrl: props.trade.asset.logoUrl !== undefined ? props.trade.asset.logoUrl : undefined,
          description: props.trade.asset.description !== undefined ? props.trade.asset.description : undefined,
          cik: props.trade.asset.cik !== undefined ? props.trade.asset.cik : undefined,
          exchange: props.trade.asset.exchange !== undefined ? props.trade.asset.exchange : undefined,
          currency: props.trade.asset.currency !== undefined ? props.trade.asset.currency : undefined,
          country: props.trade.asset.country !== undefined ? props.trade.asset.country : undefined,
          sector: props.trade.asset.sector !== undefined ? props.trade.asset.sector : undefined,
          industry: props.trade.asset.industry !== undefined ? props.trade.asset.industry : undefined,
          address: props.trade.asset.address !== undefined ? props.trade.asset.address : undefined,
          officialSite: props.trade.asset.officialSite !== undefined ? props.trade.asset.officialSite : undefined,
          fiscalYearEnd: props.trade.asset.fiscalYearEnd !== undefined ? props.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: props.trade.asset.latestQuarter !== undefined ? props.trade.asset.latestQuarter : undefined,
          marketCapitalization: props.trade.asset.marketCapitalization !== undefined ? props.trade.asset.marketCapitalization : undefined,
          ebitda: props.trade.asset.ebitda !== undefined ? props.trade.asset.ebitda : undefined,
          peRatio: props.trade.asset.peRatio !== undefined ? props.trade.asset.peRatio : undefined,
          pegRatio: props.trade.asset.pegRatio !== undefined ? props.trade.asset.pegRatio : undefined,
          bookValue: props.trade.asset.bookValue !== undefined ? props.trade.asset.bookValue : undefined,
          dividendPerShare: props.trade.asset.dividendPerShare !== undefined ? props.trade.asset.dividendPerShare : undefined,
          dividendYield: props.trade.asset.dividendYield !== undefined ? props.trade.asset.dividendYield : undefined,
          eps: props.trade.asset.eps !== undefined ? props.trade.asset.eps : undefined,
          revenuePerShareTTM: props.trade.asset.revenuePerShareTTM !== undefined ? props.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: props.trade.asset.profitMargin !== undefined ? props.trade.asset.profitMargin : undefined,
          operatingMarginTTM: props.trade.asset.operatingMarginTTM !== undefined ? props.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.trade.asset.returnOnAssetsTTM !== undefined ? props.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.trade.asset.returnOnEquityTTM !== undefined ? props.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.trade.asset.revenueTTM !== undefined ? props.trade.asset.revenueTTM : undefined,
          grossProfitTTM: props.trade.asset.grossProfitTTM !== undefined ? props.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.trade.asset.dilutedEPSTTM !== undefined ? props.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? props.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? props.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.trade.asset.analystTargetPrice !== undefined ? props.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.trade.asset.analystRatingStrongBuy !== undefined ? props.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.trade.asset.analystRatingBuy !== undefined ? props.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: props.trade.asset.analystRatingHold !== undefined ? props.trade.asset.analystRatingHold : undefined,
          analystRatingSell: props.trade.asset.analystRatingSell !== undefined ? props.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.trade.asset.analystRatingStrongSell !== undefined ? props.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: props.trade.asset.trailingPE !== undefined ? props.trade.asset.trailingPE : undefined,
          forwardPE: props.trade.asset.forwardPE !== undefined ? props.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.trade.asset.priceToSalesRatioTTM !== undefined ? props.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.trade.asset.priceToBookRatio !== undefined ? props.trade.asset.priceToBookRatio : undefined,
          evToRevenue: props.trade.asset.evToRevenue !== undefined ? props.trade.asset.evToRevenue : undefined,
          evToEbitda: props.trade.asset.evToEbitda !== undefined ? props.trade.asset.evToEbitda : undefined,
          beta: props.trade.asset.beta !== undefined ? props.trade.asset.beta : undefined,
          week52High: props.trade.asset.week52High !== undefined ? props.trade.asset.week52High : undefined,
          week52Low: props.trade.asset.week52Low !== undefined ? props.trade.asset.week52Low : undefined,
          day50MovingAverage: props.trade.asset.day50MovingAverage !== undefined ? props.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.trade.asset.day200MovingAverage !== undefined ? props.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.trade.asset.sharesOutstanding !== undefined ? props.trade.asset.sharesOutstanding : undefined,
          dividendDate: props.trade.asset.dividendDate !== undefined ? props.trade.asset.dividendDate : undefined,
          exDividendDate: props.trade.asset.exDividendDate !== undefined ? props.trade.asset.exDividendDate : undefined,
          sellPrice: props.trade.asset.sellPrice !== undefined ? props.trade.asset.sellPrice : undefined,
          buyPrice: props.trade.asset.buyPrice !== undefined ? props.trade.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
  order: props.order ? {
    upsert: {
      where: {
        id: props.order.id !== undefined ? {
            equals: props.order.id 
           } : undefined,
      },
      update: {
        id: props.order.id !== undefined ? {
            set: props.order.id  
           } : undefined,
        type: props.order.type !== undefined ? {
            set: props.order.type  
           } : undefined,
        side: props.order.side !== undefined ? {
            set: props.order.side  
           } : undefined,
        qty: props.order.qty !== undefined ? {
            set: props.order.qty  
           } : undefined,
        price: props.order.price !== undefined ? {
            set: props.order.price  
           } : undefined,
        stopLoss: props.order.stopLoss !== undefined ? {
            set: props.order.stopLoss  
           } : undefined,
        status: props.order.status !== undefined ? {
            set: props.order.status  
           } : undefined,
        executionTime: props.order.executionTime !== undefined ? {
            set: props.order.executionTime  
           } : undefined,
        fee: props.order.fee !== undefined ? {
            set: props.order.fee  
           } : undefined,
    alpacaAccount: props.order.alpacaAccount ? {
      upsert: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? {
              equals: props.order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: props.order.alpacaAccount.id !== undefined ? {
              set: props.order.alpacaAccount.id  
             } : undefined,
          type: props.order.alpacaAccount.type !== undefined ? {
              set: props.order.alpacaAccount.type  
             } : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? {
              set: props.order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? {
              set: props.order.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? {
              set: props.order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? {
              set: props.order.alpacaAccount.marketOpen  
             } : undefined,
        },
        create: {
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.order.asset ? {
      upsert: {
        where: {
          id: props.order.asset.id !== undefined ? {
              equals: props.order.asset.id 
             } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              equals: props.order.asset.symbol 
             } : undefined,
          name: props.order.asset.name !== undefined ? {
              equals: props.order.asset.name 
             } : undefined,
        },
        update: {
          id: props.order.asset.id !== undefined ? {
              set: props.order.asset.id  
             } : undefined,
          symbol: props.order.asset.symbol !== undefined ? {
              set: props.order.asset.symbol  
             } : undefined,
          name: props.order.asset.name !== undefined ? {
              set: props.order.asset.name  
             } : undefined,
          type: props.order.asset.type !== undefined ? {
              set: props.order.asset.type  
             } : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? {
              set: props.order.asset.logoUrl  
             } : undefined,
          description: props.order.asset.description !== undefined ? {
              set: props.order.asset.description  
             } : undefined,
          cik: props.order.asset.cik !== undefined ? {
              set: props.order.asset.cik  
             } : undefined,
          exchange: props.order.asset.exchange !== undefined ? {
              set: props.order.asset.exchange  
             } : undefined,
          currency: props.order.asset.currency !== undefined ? {
              set: props.order.asset.currency  
             } : undefined,
          country: props.order.asset.country !== undefined ? {
              set: props.order.asset.country  
             } : undefined,
          sector: props.order.asset.sector !== undefined ? {
              set: props.order.asset.sector  
             } : undefined,
          industry: props.order.asset.industry !== undefined ? {
              set: props.order.asset.industry  
             } : undefined,
          address: props.order.asset.address !== undefined ? {
              set: props.order.asset.address  
             } : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? {
              set: props.order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? {
              set: props.order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? {
              set: props.order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? {
              set: props.order.asset.marketCapitalization  
             } : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? {
              set: props.order.asset.ebitda  
             } : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? {
              set: props.order.asset.peRatio  
             } : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? {
              set: props.order.asset.pegRatio  
             } : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? {
              set: props.order.asset.bookValue  
             } : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? {
              set: props.order.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? {
              set: props.order.asset.dividendYield  
             } : undefined,
          eps: props.order.asset.eps !== undefined ? {
              set: props.order.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? {
              set: props.order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? {
              set: props.order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? {
              set: props.order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? {
              set: props.order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? {
              set: props.order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? {
              set: props.order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? {
              set: props.order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? {
              set: props.order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? {
              set: props.order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? {
              set: props.order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? {
              set: props.order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? {
              set: props.order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? {
              set: props.order.asset.trailingPE  
             } : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? {
              set: props.order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? {
              set: props.order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? {
              set: props.order.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? {
              set: props.order.asset.evToEbitda  
             } : undefined,
          beta: props.order.asset.beta !== undefined ? {
              set: props.order.asset.beta  
             } : undefined,
          week52High: props.order.asset.week52High !== undefined ? {
              set: props.order.asset.week52High  
             } : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? {
              set: props.order.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? {
              set: props.order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? {
              set: props.order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? {
              set: props.order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? {
              set: props.order.asset.dividendDate  
             } : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? {
              set: props.order.asset.exDividendDate  
             } : undefined,
          sellPrice: props.order.asset.sellPrice !== undefined ? {
              set: props.order.asset.sellPrice  
             } : undefined,
          buyPrice: props.order.asset.buyPrice !== undefined ? {
              set: props.order.asset.buyPrice  
             } : undefined,
        },
        create: {
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
          type: props.order.asset.type !== undefined ? props.order.asset.type : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? props.order.asset.logoUrl : undefined,
          description: props.order.asset.description !== undefined ? props.order.asset.description : undefined,
          cik: props.order.asset.cik !== undefined ? props.order.asset.cik : undefined,
          exchange: props.order.asset.exchange !== undefined ? props.order.asset.exchange : undefined,
          currency: props.order.asset.currency !== undefined ? props.order.asset.currency : undefined,
          country: props.order.asset.country !== undefined ? props.order.asset.country : undefined,
          sector: props.order.asset.sector !== undefined ? props.order.asset.sector : undefined,
          industry: props.order.asset.industry !== undefined ? props.order.asset.industry : undefined,
          address: props.order.asset.address !== undefined ? props.order.asset.address : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? props.order.asset.officialSite : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? props.order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? props.order.asset.latestQuarter : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? props.order.asset.marketCapitalization : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? props.order.asset.ebitda : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? props.order.asset.peRatio : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? props.order.asset.pegRatio : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? props.order.asset.bookValue : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? props.order.asset.dividendPerShare : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? props.order.asset.dividendYield : undefined,
          eps: props.order.asset.eps !== undefined ? props.order.asset.eps : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? props.order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? props.order.asset.profitMargin : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? props.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? props.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? props.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? props.order.asset.revenueTTM : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? props.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? props.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? props.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? props.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? props.order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? props.order.asset.analystRatingHold : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? props.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? props.order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? props.order.asset.trailingPE : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? props.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? props.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? props.order.asset.priceToBookRatio : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? props.order.asset.evToRevenue : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? props.order.asset.evToEbitda : undefined,
          beta: props.order.asset.beta !== undefined ? props.order.asset.beta : undefined,
          week52High: props.order.asset.week52High !== undefined ? props.order.asset.week52High : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? props.order.asset.week52Low : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? props.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? props.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? props.order.asset.sharesOutstanding : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? props.order.asset.dividendDate : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? props.order.asset.exDividendDate : undefined,
          sellPrice: props.order.asset.sellPrice !== undefined ? props.order.asset.sellPrice : undefined,
          buyPrice: props.order.asset.buyPrice !== undefined ? props.order.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        type: props.order.type !== undefined ? props.order.type : undefined,
        side: props.order.side !== undefined ? props.order.side : undefined,
        qty: props.order.qty !== undefined ? props.order.qty : undefined,
        price: props.order.price !== undefined ? props.order.price : undefined,
        stopLoss: props.order.stopLoss !== undefined ? props.order.stopLoss : undefined,
        status: props.order.status !== undefined ? props.order.status : undefined,
        executionTime: props.order.executionTime !== undefined ? props.order.executionTime : undefined,
        fee: props.order.fee !== undefined ? props.order.fee : undefined,
    alpacaAccount: props.order.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: props.order.alpacaAccount.id !== undefined ? props.order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.order.alpacaAccount.type !== undefined ? props.order.alpacaAccount.type : undefined,
          APIKey: props.order.alpacaAccount.APIKey !== undefined ? props.order.alpacaAccount.APIKey : undefined,
          APISecret: props.order.alpacaAccount.APISecret !== undefined ? props.order.alpacaAccount.APISecret : undefined,
          configuration: props.order.alpacaAccount.configuration !== undefined ? props.order.alpacaAccount.configuration : undefined,
          marketOpen: props.order.alpacaAccount.marketOpen !== undefined ? props.order.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: props.order.asset ? {
      connectOrCreate: {
        where: {
          id: props.order.asset.id !== undefined ? props.order.asset.id : undefined,
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
        },
        create: {
          symbol: props.order.asset.symbol !== undefined ? props.order.asset.symbol : undefined,
          name: props.order.asset.name !== undefined ? props.order.asset.name : undefined,
          type: props.order.asset.type !== undefined ? props.order.asset.type : undefined,
          logoUrl: props.order.asset.logoUrl !== undefined ? props.order.asset.logoUrl : undefined,
          description: props.order.asset.description !== undefined ? props.order.asset.description : undefined,
          cik: props.order.asset.cik !== undefined ? props.order.asset.cik : undefined,
          exchange: props.order.asset.exchange !== undefined ? props.order.asset.exchange : undefined,
          currency: props.order.asset.currency !== undefined ? props.order.asset.currency : undefined,
          country: props.order.asset.country !== undefined ? props.order.asset.country : undefined,
          sector: props.order.asset.sector !== undefined ? props.order.asset.sector : undefined,
          industry: props.order.asset.industry !== undefined ? props.order.asset.industry : undefined,
          address: props.order.asset.address !== undefined ? props.order.asset.address : undefined,
          officialSite: props.order.asset.officialSite !== undefined ? props.order.asset.officialSite : undefined,
          fiscalYearEnd: props.order.asset.fiscalYearEnd !== undefined ? props.order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.order.asset.latestQuarter !== undefined ? props.order.asset.latestQuarter : undefined,
          marketCapitalization: props.order.asset.marketCapitalization !== undefined ? props.order.asset.marketCapitalization : undefined,
          ebitda: props.order.asset.ebitda !== undefined ? props.order.asset.ebitda : undefined,
          peRatio: props.order.asset.peRatio !== undefined ? props.order.asset.peRatio : undefined,
          pegRatio: props.order.asset.pegRatio !== undefined ? props.order.asset.pegRatio : undefined,
          bookValue: props.order.asset.bookValue !== undefined ? props.order.asset.bookValue : undefined,
          dividendPerShare: props.order.asset.dividendPerShare !== undefined ? props.order.asset.dividendPerShare : undefined,
          dividendYield: props.order.asset.dividendYield !== undefined ? props.order.asset.dividendYield : undefined,
          eps: props.order.asset.eps !== undefined ? props.order.asset.eps : undefined,
          revenuePerShareTTM: props.order.asset.revenuePerShareTTM !== undefined ? props.order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.order.asset.profitMargin !== undefined ? props.order.asset.profitMargin : undefined,
          operatingMarginTTM: props.order.asset.operatingMarginTTM !== undefined ? props.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.order.asset.returnOnAssetsTTM !== undefined ? props.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.order.asset.returnOnEquityTTM !== undefined ? props.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.order.asset.revenueTTM !== undefined ? props.order.asset.revenueTTM : undefined,
          grossProfitTTM: props.order.asset.grossProfitTTM !== undefined ? props.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.order.asset.dilutedEPSTTM !== undefined ? props.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.order.asset.analystTargetPrice !== undefined ? props.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.order.asset.analystRatingStrongBuy !== undefined ? props.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.order.asset.analystRatingBuy !== undefined ? props.order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.order.asset.analystRatingHold !== undefined ? props.order.asset.analystRatingHold : undefined,
          analystRatingSell: props.order.asset.analystRatingSell !== undefined ? props.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.order.asset.analystRatingStrongSell !== undefined ? props.order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.order.asset.trailingPE !== undefined ? props.order.asset.trailingPE : undefined,
          forwardPE: props.order.asset.forwardPE !== undefined ? props.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.order.asset.priceToSalesRatioTTM !== undefined ? props.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.order.asset.priceToBookRatio !== undefined ? props.order.asset.priceToBookRatio : undefined,
          evToRevenue: props.order.asset.evToRevenue !== undefined ? props.order.asset.evToRevenue : undefined,
          evToEbitda: props.order.asset.evToEbitda !== undefined ? props.order.asset.evToEbitda : undefined,
          beta: props.order.asset.beta !== undefined ? props.order.asset.beta : undefined,
          week52High: props.order.asset.week52High !== undefined ? props.order.asset.week52High : undefined,
          week52Low: props.order.asset.week52Low !== undefined ? props.order.asset.week52Low : undefined,
          day50MovingAverage: props.order.asset.day50MovingAverage !== undefined ? props.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.order.asset.day200MovingAverage !== undefined ? props.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.order.asset.sharesOutstanding !== undefined ? props.order.asset.sharesOutstanding : undefined,
          dividendDate: props.order.asset.dividendDate !== undefined ? props.order.asset.dividendDate : undefined,
          exDividendDate: props.order.asset.exDividendDate !== undefined ? props.order.asset.exDividendDate : undefined,
          sellPrice: props.order.asset.sellPrice !== undefined ? props.order.asset.sellPrice : undefined,
          buyPrice: props.order.asset.buyPrice !== undefined ? props.order.asset.buyPrice : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAction) {
        return response.data.updateOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAction:', error);
      throw error;
    }
  },

  /**
   * Update multiple Action records.
   * @param props - Array of Action objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: ActionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_ACTION = gql`
      mutation updateManyAction($data: [ActionCreateManyInput!]!) {
        updateManyAction(data: $data) {
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
  sequence: prop.sequence !== undefined ? {
            set: prop.sequence 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  orderId: prop.orderId !== undefined ? {
            set: prop.orderId 
           } : undefined,
  note: prop.note !== undefined ? {
            set: prop.note 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  fee: prop.fee !== undefined ? {
            set: prop.fee 
           } : undefined,
  trade: prop.trade ? {
    upsert: {
      where: {
        id: prop.trade.id !== undefined ? {
            equals: prop.trade.id 
           } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id  
           } : undefined,
        qty: prop.trade.qty !== undefined ? {
            set: prop.trade.qty  
           } : undefined,
        price: prop.trade.price !== undefined ? {
            set: prop.trade.price  
           } : undefined,
        total: prop.trade.total !== undefined ? {
            set: prop.trade.total  
           } : undefined,
        signal: prop.trade.signal !== undefined ? {
            set: prop.trade.signal  
           } : undefined,
        strategy: prop.trade.strategy !== undefined ? {
            set: prop.trade.strategy  
           } : undefined,
        analysis: prop.trade.analysis !== undefined ? {
            set: prop.trade.analysis  
           } : undefined,
        confidence: prop.trade.confidence !== undefined ? {
            set: prop.trade.confidence  
           } : undefined,
        timestamp: prop.trade.timestamp !== undefined ? {
            set: prop.trade.timestamp  
           } : undefined,
        status: prop.trade.status !== undefined ? {
            set: prop.trade.status  
           } : undefined,
        optionContractType: prop.trade.optionContractType !== undefined ? {
            set: prop.trade.optionContractType  
           } : undefined,
    alpacaAccount: prop.trade.alpacaAccount ? {
      upsert: {
        where: {
          id: prop.trade.alpacaAccount.id !== undefined ? {
              equals: prop.trade.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: prop.trade.alpacaAccount.id !== undefined ? {
              set: prop.trade.alpacaAccount.id  
             } : undefined,
          type: prop.trade.alpacaAccount.type !== undefined ? {
              set: prop.trade.alpacaAccount.type  
             } : undefined,
          APIKey: prop.trade.alpacaAccount.APIKey !== undefined ? {
              set: prop.trade.alpacaAccount.APIKey  
             } : undefined,
          APISecret: prop.trade.alpacaAccount.APISecret !== undefined ? {
              set: prop.trade.alpacaAccount.APISecret  
             } : undefined,
          configuration: prop.trade.alpacaAccount.configuration !== undefined ? {
              set: prop.trade.alpacaAccount.configuration  
             } : undefined,
          marketOpen: prop.trade.alpacaAccount.marketOpen !== undefined ? {
              set: prop.trade.alpacaAccount.marketOpen  
             } : undefined,
        },
        create: {
          type: prop.trade.alpacaAccount.type !== undefined ? prop.trade.alpacaAccount.type : undefined,
          APIKey: prop.trade.alpacaAccount.APIKey !== undefined ? prop.trade.alpacaAccount.APIKey : undefined,
          APISecret: prop.trade.alpacaAccount.APISecret !== undefined ? prop.trade.alpacaAccount.APISecret : undefined,
          configuration: prop.trade.alpacaAccount.configuration !== undefined ? prop.trade.alpacaAccount.configuration : undefined,
          marketOpen: prop.trade.alpacaAccount.marketOpen !== undefined ? prop.trade.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.trade.asset ? {
      upsert: {
        where: {
          id: prop.trade.asset.id !== undefined ? {
              equals: prop.trade.asset.id 
             } : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? {
              equals: prop.trade.asset.symbol 
             } : undefined,
          name: prop.trade.asset.name !== undefined ? {
              equals: prop.trade.asset.name 
             } : undefined,
        },
        update: {
          id: prop.trade.asset.id !== undefined ? {
              set: prop.trade.asset.id  
             } : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? {
              set: prop.trade.asset.symbol  
             } : undefined,
          name: prop.trade.asset.name !== undefined ? {
              set: prop.trade.asset.name  
             } : undefined,
          type: prop.trade.asset.type !== undefined ? {
              set: prop.trade.asset.type  
             } : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? {
              set: prop.trade.asset.logoUrl  
             } : undefined,
          description: prop.trade.asset.description !== undefined ? {
              set: prop.trade.asset.description  
             } : undefined,
          cik: prop.trade.asset.cik !== undefined ? {
              set: prop.trade.asset.cik  
             } : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? {
              set: prop.trade.asset.exchange  
             } : undefined,
          currency: prop.trade.asset.currency !== undefined ? {
              set: prop.trade.asset.currency  
             } : undefined,
          country: prop.trade.asset.country !== undefined ? {
              set: prop.trade.asset.country  
             } : undefined,
          sector: prop.trade.asset.sector !== undefined ? {
              set: prop.trade.asset.sector  
             } : undefined,
          industry: prop.trade.asset.industry !== undefined ? {
              set: prop.trade.asset.industry  
             } : undefined,
          address: prop.trade.asset.address !== undefined ? {
              set: prop.trade.asset.address  
             } : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? {
              set: prop.trade.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? {
              set: prop.trade.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? {
              set: prop.trade.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? {
              set: prop.trade.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? {
              set: prop.trade.asset.ebitda  
             } : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? {
              set: prop.trade.asset.peRatio  
             } : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? {
              set: prop.trade.asset.pegRatio  
             } : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? {
              set: prop.trade.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? {
              set: prop.trade.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? {
              set: prop.trade.asset.dividendYield  
             } : undefined,
          eps: prop.trade.asset.eps !== undefined ? {
              set: prop.trade.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? {
              set: prop.trade.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? {
              set: prop.trade.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? {
              set: prop.trade.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.trade.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? {
              set: prop.trade.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? {
              set: prop.trade.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? {
              set: prop.trade.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? {
              set: prop.trade.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.trade.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.trade.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? {
              set: prop.trade.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.trade.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? {
              set: prop.trade.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? {
              set: prop.trade.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? {
              set: prop.trade.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? {
              set: prop.trade.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? {
              set: prop.trade.asset.trailingPE  
             } : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? {
              set: prop.trade.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.trade.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? {
              set: prop.trade.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? {
              set: prop.trade.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? {
              set: prop.trade.asset.evToEbitda  
             } : undefined,
          beta: prop.trade.asset.beta !== undefined ? {
              set: prop.trade.asset.beta  
             } : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? {
              set: prop.trade.asset.week52High  
             } : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? {
              set: prop.trade.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? {
              set: prop.trade.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? {
              set: prop.trade.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? {
              set: prop.trade.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? {
              set: prop.trade.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? {
              set: prop.trade.asset.exDividendDate  
             } : undefined,
          sellPrice: prop.trade.asset.sellPrice !== undefined ? {
              set: prop.trade.asset.sellPrice  
             } : undefined,
          buyPrice: prop.trade.asset.buyPrice !== undefined ? {
              set: prop.trade.asset.buyPrice  
             } : undefined,
        },
        create: {
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
          type: prop.trade.asset.type !== undefined ? prop.trade.asset.type : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? prop.trade.asset.logoUrl : undefined,
          description: prop.trade.asset.description !== undefined ? prop.trade.asset.description : undefined,
          cik: prop.trade.asset.cik !== undefined ? prop.trade.asset.cik : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? prop.trade.asset.exchange : undefined,
          currency: prop.trade.asset.currency !== undefined ? prop.trade.asset.currency : undefined,
          country: prop.trade.asset.country !== undefined ? prop.trade.asset.country : undefined,
          sector: prop.trade.asset.sector !== undefined ? prop.trade.asset.sector : undefined,
          industry: prop.trade.asset.industry !== undefined ? prop.trade.asset.industry : undefined,
          address: prop.trade.asset.address !== undefined ? prop.trade.asset.address : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? prop.trade.asset.officialSite : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? prop.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? prop.trade.asset.latestQuarter : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? prop.trade.asset.marketCapitalization : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? prop.trade.asset.ebitda : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? prop.trade.asset.peRatio : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? prop.trade.asset.pegRatio : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? prop.trade.asset.bookValue : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? prop.trade.asset.dividendPerShare : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? prop.trade.asset.dividendYield : undefined,
          eps: prop.trade.asset.eps !== undefined ? prop.trade.asset.eps : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? prop.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? prop.trade.asset.profitMargin : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? prop.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? prop.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? prop.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? prop.trade.asset.revenueTTM : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? prop.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? prop.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? prop.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? prop.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? prop.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? prop.trade.asset.analystRatingHold : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? prop.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? prop.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? prop.trade.asset.trailingPE : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? prop.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? prop.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? prop.trade.asset.priceToBookRatio : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? prop.trade.asset.evToRevenue : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? prop.trade.asset.evToEbitda : undefined,
          beta: prop.trade.asset.beta !== undefined ? prop.trade.asset.beta : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? prop.trade.asset.week52High : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? prop.trade.asset.week52Low : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? prop.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? prop.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? prop.trade.asset.sharesOutstanding : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? prop.trade.asset.dividendDate : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? prop.trade.asset.exDividendDate : undefined,
          sellPrice: prop.trade.asset.sellPrice !== undefined ? prop.trade.asset.sellPrice : undefined,
          buyPrice: prop.trade.asset.buyPrice !== undefined ? prop.trade.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        qty: prop.trade.qty !== undefined ? prop.trade.qty : undefined,
        price: prop.trade.price !== undefined ? prop.trade.price : undefined,
        total: prop.trade.total !== undefined ? prop.trade.total : undefined,
        signal: prop.trade.signal !== undefined ? prop.trade.signal : undefined,
        strategy: prop.trade.strategy !== undefined ? prop.trade.strategy : undefined,
        analysis: prop.trade.analysis !== undefined ? prop.trade.analysis : undefined,
        confidence: prop.trade.confidence !== undefined ? prop.trade.confidence : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
        optionContractType: prop.trade.optionContractType !== undefined ? prop.trade.optionContractType : undefined,
    alpacaAccount: prop.trade.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: prop.trade.alpacaAccount.id !== undefined ? prop.trade.alpacaAccount.id : undefined,
        },
        create: {
          type: prop.trade.alpacaAccount.type !== undefined ? prop.trade.alpacaAccount.type : undefined,
          APIKey: prop.trade.alpacaAccount.APIKey !== undefined ? prop.trade.alpacaAccount.APIKey : undefined,
          APISecret: prop.trade.alpacaAccount.APISecret !== undefined ? prop.trade.alpacaAccount.APISecret : undefined,
          configuration: prop.trade.alpacaAccount.configuration !== undefined ? prop.trade.alpacaAccount.configuration : undefined,
          marketOpen: prop.trade.alpacaAccount.marketOpen !== undefined ? prop.trade.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.trade.asset ? {
      connectOrCreate: {
        where: {
          id: prop.trade.asset.id !== undefined ? prop.trade.asset.id : undefined,
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
        },
        create: {
          symbol: prop.trade.asset.symbol !== undefined ? prop.trade.asset.symbol : undefined,
          name: prop.trade.asset.name !== undefined ? prop.trade.asset.name : undefined,
          type: prop.trade.asset.type !== undefined ? prop.trade.asset.type : undefined,
          logoUrl: prop.trade.asset.logoUrl !== undefined ? prop.trade.asset.logoUrl : undefined,
          description: prop.trade.asset.description !== undefined ? prop.trade.asset.description : undefined,
          cik: prop.trade.asset.cik !== undefined ? prop.trade.asset.cik : undefined,
          exchange: prop.trade.asset.exchange !== undefined ? prop.trade.asset.exchange : undefined,
          currency: prop.trade.asset.currency !== undefined ? prop.trade.asset.currency : undefined,
          country: prop.trade.asset.country !== undefined ? prop.trade.asset.country : undefined,
          sector: prop.trade.asset.sector !== undefined ? prop.trade.asset.sector : undefined,
          industry: prop.trade.asset.industry !== undefined ? prop.trade.asset.industry : undefined,
          address: prop.trade.asset.address !== undefined ? prop.trade.asset.address : undefined,
          officialSite: prop.trade.asset.officialSite !== undefined ? prop.trade.asset.officialSite : undefined,
          fiscalYearEnd: prop.trade.asset.fiscalYearEnd !== undefined ? prop.trade.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.trade.asset.latestQuarter !== undefined ? prop.trade.asset.latestQuarter : undefined,
          marketCapitalization: prop.trade.asset.marketCapitalization !== undefined ? prop.trade.asset.marketCapitalization : undefined,
          ebitda: prop.trade.asset.ebitda !== undefined ? prop.trade.asset.ebitda : undefined,
          peRatio: prop.trade.asset.peRatio !== undefined ? prop.trade.asset.peRatio : undefined,
          pegRatio: prop.trade.asset.pegRatio !== undefined ? prop.trade.asset.pegRatio : undefined,
          bookValue: prop.trade.asset.bookValue !== undefined ? prop.trade.asset.bookValue : undefined,
          dividendPerShare: prop.trade.asset.dividendPerShare !== undefined ? prop.trade.asset.dividendPerShare : undefined,
          dividendYield: prop.trade.asset.dividendYield !== undefined ? prop.trade.asset.dividendYield : undefined,
          eps: prop.trade.asset.eps !== undefined ? prop.trade.asset.eps : undefined,
          revenuePerShareTTM: prop.trade.asset.revenuePerShareTTM !== undefined ? prop.trade.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.trade.asset.profitMargin !== undefined ? prop.trade.asset.profitMargin : undefined,
          operatingMarginTTM: prop.trade.asset.operatingMarginTTM !== undefined ? prop.trade.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.trade.asset.returnOnAssetsTTM !== undefined ? prop.trade.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.trade.asset.returnOnEquityTTM !== undefined ? prop.trade.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.trade.asset.revenueTTM !== undefined ? prop.trade.asset.revenueTTM : undefined,
          grossProfitTTM: prop.trade.asset.grossProfitTTM !== undefined ? prop.trade.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.trade.asset.dilutedEPSTTM !== undefined ? prop.trade.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.trade.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.trade.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.trade.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.trade.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.trade.asset.analystTargetPrice !== undefined ? prop.trade.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.trade.asset.analystRatingStrongBuy !== undefined ? prop.trade.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.trade.asset.analystRatingBuy !== undefined ? prop.trade.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.trade.asset.analystRatingHold !== undefined ? prop.trade.asset.analystRatingHold : undefined,
          analystRatingSell: prop.trade.asset.analystRatingSell !== undefined ? prop.trade.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.trade.asset.analystRatingStrongSell !== undefined ? prop.trade.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.trade.asset.trailingPE !== undefined ? prop.trade.asset.trailingPE : undefined,
          forwardPE: prop.trade.asset.forwardPE !== undefined ? prop.trade.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.trade.asset.priceToSalesRatioTTM !== undefined ? prop.trade.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.trade.asset.priceToBookRatio !== undefined ? prop.trade.asset.priceToBookRatio : undefined,
          evToRevenue: prop.trade.asset.evToRevenue !== undefined ? prop.trade.asset.evToRevenue : undefined,
          evToEbitda: prop.trade.asset.evToEbitda !== undefined ? prop.trade.asset.evToEbitda : undefined,
          beta: prop.trade.asset.beta !== undefined ? prop.trade.asset.beta : undefined,
          week52High: prop.trade.asset.week52High !== undefined ? prop.trade.asset.week52High : undefined,
          week52Low: prop.trade.asset.week52Low !== undefined ? prop.trade.asset.week52Low : undefined,
          day50MovingAverage: prop.trade.asset.day50MovingAverage !== undefined ? prop.trade.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.trade.asset.day200MovingAverage !== undefined ? prop.trade.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.trade.asset.sharesOutstanding !== undefined ? prop.trade.asset.sharesOutstanding : undefined,
          dividendDate: prop.trade.asset.dividendDate !== undefined ? prop.trade.asset.dividendDate : undefined,
          exDividendDate: prop.trade.asset.exDividendDate !== undefined ? prop.trade.asset.exDividendDate : undefined,
          sellPrice: prop.trade.asset.sellPrice !== undefined ? prop.trade.asset.sellPrice : undefined,
          buyPrice: prop.trade.asset.buyPrice !== undefined ? prop.trade.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
  order: prop.order ? {
    upsert: {
      where: {
        id: prop.order.id !== undefined ? {
            equals: prop.order.id 
           } : undefined,
      },
      update: {
        id: prop.order.id !== undefined ? {
            set: prop.order.id  
           } : undefined,
        type: prop.order.type !== undefined ? {
            set: prop.order.type  
           } : undefined,
        side: prop.order.side !== undefined ? {
            set: prop.order.side  
           } : undefined,
        qty: prop.order.qty !== undefined ? {
            set: prop.order.qty  
           } : undefined,
        price: prop.order.price !== undefined ? {
            set: prop.order.price  
           } : undefined,
        stopLoss: prop.order.stopLoss !== undefined ? {
            set: prop.order.stopLoss  
           } : undefined,
        status: prop.order.status !== undefined ? {
            set: prop.order.status  
           } : undefined,
        executionTime: prop.order.executionTime !== undefined ? {
            set: prop.order.executionTime  
           } : undefined,
        fee: prop.order.fee !== undefined ? {
            set: prop.order.fee  
           } : undefined,
    alpacaAccount: prop.order.alpacaAccount ? {
      upsert: {
        where: {
          id: prop.order.alpacaAccount.id !== undefined ? {
              equals: prop.order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: prop.order.alpacaAccount.id !== undefined ? {
              set: prop.order.alpacaAccount.id  
             } : undefined,
          type: prop.order.alpacaAccount.type !== undefined ? {
              set: prop.order.alpacaAccount.type  
             } : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? {
              set: prop.order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? {
              set: prop.order.alpacaAccount.APISecret  
             } : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? {
              set: prop.order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? {
              set: prop.order.alpacaAccount.marketOpen  
             } : undefined,
        },
        create: {
          type: prop.order.alpacaAccount.type !== undefined ? prop.order.alpacaAccount.type : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? prop.order.alpacaAccount.APIKey : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? prop.order.alpacaAccount.APISecret : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? prop.order.alpacaAccount.configuration : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? prop.order.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.order.asset ? {
      upsert: {
        where: {
          id: prop.order.asset.id !== undefined ? {
              equals: prop.order.asset.id 
             } : undefined,
          symbol: prop.order.asset.symbol !== undefined ? {
              equals: prop.order.asset.symbol 
             } : undefined,
          name: prop.order.asset.name !== undefined ? {
              equals: prop.order.asset.name 
             } : undefined,
        },
        update: {
          id: prop.order.asset.id !== undefined ? {
              set: prop.order.asset.id  
             } : undefined,
          symbol: prop.order.asset.symbol !== undefined ? {
              set: prop.order.asset.symbol  
             } : undefined,
          name: prop.order.asset.name !== undefined ? {
              set: prop.order.asset.name  
             } : undefined,
          type: prop.order.asset.type !== undefined ? {
              set: prop.order.asset.type  
             } : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? {
              set: prop.order.asset.logoUrl  
             } : undefined,
          description: prop.order.asset.description !== undefined ? {
              set: prop.order.asset.description  
             } : undefined,
          cik: prop.order.asset.cik !== undefined ? {
              set: prop.order.asset.cik  
             } : undefined,
          exchange: prop.order.asset.exchange !== undefined ? {
              set: prop.order.asset.exchange  
             } : undefined,
          currency: prop.order.asset.currency !== undefined ? {
              set: prop.order.asset.currency  
             } : undefined,
          country: prop.order.asset.country !== undefined ? {
              set: prop.order.asset.country  
             } : undefined,
          sector: prop.order.asset.sector !== undefined ? {
              set: prop.order.asset.sector  
             } : undefined,
          industry: prop.order.asset.industry !== undefined ? {
              set: prop.order.asset.industry  
             } : undefined,
          address: prop.order.asset.address !== undefined ? {
              set: prop.order.asset.address  
             } : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? {
              set: prop.order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? {
              set: prop.order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? {
              set: prop.order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? {
              set: prop.order.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? {
              set: prop.order.asset.ebitda  
             } : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? {
              set: prop.order.asset.peRatio  
             } : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? {
              set: prop.order.asset.pegRatio  
             } : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? {
              set: prop.order.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? {
              set: prop.order.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? {
              set: prop.order.asset.dividendYield  
             } : undefined,
          eps: prop.order.asset.eps !== undefined ? {
              set: prop.order.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? {
              set: prop.order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? {
              set: prop.order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? {
              set: prop.order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? {
              set: prop.order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? {
              set: prop.order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? {
              set: prop.order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? {
              set: prop.order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? {
              set: prop.order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? {
              set: prop.order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? {
              set: prop.order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? {
              set: prop.order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? {
              set: prop.order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? {
              set: prop.order.asset.trailingPE  
             } : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? {
              set: prop.order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? {
              set: prop.order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? {
              set: prop.order.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? {
              set: prop.order.asset.evToEbitda  
             } : undefined,
          beta: prop.order.asset.beta !== undefined ? {
              set: prop.order.asset.beta  
             } : undefined,
          week52High: prop.order.asset.week52High !== undefined ? {
              set: prop.order.asset.week52High  
             } : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? {
              set: prop.order.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? {
              set: prop.order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? {
              set: prop.order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? {
              set: prop.order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? {
              set: prop.order.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? {
              set: prop.order.asset.exDividendDate  
             } : undefined,
          sellPrice: prop.order.asset.sellPrice !== undefined ? {
              set: prop.order.asset.sellPrice  
             } : undefined,
          buyPrice: prop.order.asset.buyPrice !== undefined ? {
              set: prop.order.asset.buyPrice  
             } : undefined,
        },
        create: {
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
          type: prop.order.asset.type !== undefined ? prop.order.asset.type : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? prop.order.asset.logoUrl : undefined,
          description: prop.order.asset.description !== undefined ? prop.order.asset.description : undefined,
          cik: prop.order.asset.cik !== undefined ? prop.order.asset.cik : undefined,
          exchange: prop.order.asset.exchange !== undefined ? prop.order.asset.exchange : undefined,
          currency: prop.order.asset.currency !== undefined ? prop.order.asset.currency : undefined,
          country: prop.order.asset.country !== undefined ? prop.order.asset.country : undefined,
          sector: prop.order.asset.sector !== undefined ? prop.order.asset.sector : undefined,
          industry: prop.order.asset.industry !== undefined ? prop.order.asset.industry : undefined,
          address: prop.order.asset.address !== undefined ? prop.order.asset.address : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? prop.order.asset.officialSite : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? prop.order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? prop.order.asset.latestQuarter : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? prop.order.asset.marketCapitalization : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? prop.order.asset.ebitda : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? prop.order.asset.peRatio : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? prop.order.asset.pegRatio : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? prop.order.asset.bookValue : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? prop.order.asset.dividendPerShare : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? prop.order.asset.dividendYield : undefined,
          eps: prop.order.asset.eps !== undefined ? prop.order.asset.eps : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? prop.order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? prop.order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? prop.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? prop.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? prop.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? prop.order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? prop.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? prop.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? prop.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? prop.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? prop.order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? prop.order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? prop.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? prop.order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? prop.order.asset.trailingPE : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? prop.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? prop.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? prop.order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? prop.order.asset.evToRevenue : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? prop.order.asset.evToEbitda : undefined,
          beta: prop.order.asset.beta !== undefined ? prop.order.asset.beta : undefined,
          week52High: prop.order.asset.week52High !== undefined ? prop.order.asset.week52High : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? prop.order.asset.week52Low : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? prop.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? prop.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? prop.order.asset.sharesOutstanding : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? prop.order.asset.dividendDate : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? prop.order.asset.exDividendDate : undefined,
          sellPrice: prop.order.asset.sellPrice !== undefined ? prop.order.asset.sellPrice : undefined,
          buyPrice: prop.order.asset.buyPrice !== undefined ? prop.order.asset.buyPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        type: prop.order.type !== undefined ? prop.order.type : undefined,
        side: prop.order.side !== undefined ? prop.order.side : undefined,
        qty: prop.order.qty !== undefined ? prop.order.qty : undefined,
        price: prop.order.price !== undefined ? prop.order.price : undefined,
        stopLoss: prop.order.stopLoss !== undefined ? prop.order.stopLoss : undefined,
        status: prop.order.status !== undefined ? prop.order.status : undefined,
        executionTime: prop.order.executionTime !== undefined ? prop.order.executionTime : undefined,
        fee: prop.order.fee !== undefined ? prop.order.fee : undefined,
    alpacaAccount: prop.order.alpacaAccount ? {
      connectOrCreate: {
        where: {
          id: prop.order.alpacaAccount.id !== undefined ? prop.order.alpacaAccount.id : undefined,
        },
        create: {
          type: prop.order.alpacaAccount.type !== undefined ? prop.order.alpacaAccount.type : undefined,
          APIKey: prop.order.alpacaAccount.APIKey !== undefined ? prop.order.alpacaAccount.APIKey : undefined,
          APISecret: prop.order.alpacaAccount.APISecret !== undefined ? prop.order.alpacaAccount.APISecret : undefined,
          configuration: prop.order.alpacaAccount.configuration !== undefined ? prop.order.alpacaAccount.configuration : undefined,
          marketOpen: prop.order.alpacaAccount.marketOpen !== undefined ? prop.order.alpacaAccount.marketOpen : undefined,
        },
      }
    } : undefined,
    asset: prop.order.asset ? {
      connectOrCreate: {
        where: {
          id: prop.order.asset.id !== undefined ? prop.order.asset.id : undefined,
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
        },
        create: {
          symbol: prop.order.asset.symbol !== undefined ? prop.order.asset.symbol : undefined,
          name: prop.order.asset.name !== undefined ? prop.order.asset.name : undefined,
          type: prop.order.asset.type !== undefined ? prop.order.asset.type : undefined,
          logoUrl: prop.order.asset.logoUrl !== undefined ? prop.order.asset.logoUrl : undefined,
          description: prop.order.asset.description !== undefined ? prop.order.asset.description : undefined,
          cik: prop.order.asset.cik !== undefined ? prop.order.asset.cik : undefined,
          exchange: prop.order.asset.exchange !== undefined ? prop.order.asset.exchange : undefined,
          currency: prop.order.asset.currency !== undefined ? prop.order.asset.currency : undefined,
          country: prop.order.asset.country !== undefined ? prop.order.asset.country : undefined,
          sector: prop.order.asset.sector !== undefined ? prop.order.asset.sector : undefined,
          industry: prop.order.asset.industry !== undefined ? prop.order.asset.industry : undefined,
          address: prop.order.asset.address !== undefined ? prop.order.asset.address : undefined,
          officialSite: prop.order.asset.officialSite !== undefined ? prop.order.asset.officialSite : undefined,
          fiscalYearEnd: prop.order.asset.fiscalYearEnd !== undefined ? prop.order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.order.asset.latestQuarter !== undefined ? prop.order.asset.latestQuarter : undefined,
          marketCapitalization: prop.order.asset.marketCapitalization !== undefined ? prop.order.asset.marketCapitalization : undefined,
          ebitda: prop.order.asset.ebitda !== undefined ? prop.order.asset.ebitda : undefined,
          peRatio: prop.order.asset.peRatio !== undefined ? prop.order.asset.peRatio : undefined,
          pegRatio: prop.order.asset.pegRatio !== undefined ? prop.order.asset.pegRatio : undefined,
          bookValue: prop.order.asset.bookValue !== undefined ? prop.order.asset.bookValue : undefined,
          dividendPerShare: prop.order.asset.dividendPerShare !== undefined ? prop.order.asset.dividendPerShare : undefined,
          dividendYield: prop.order.asset.dividendYield !== undefined ? prop.order.asset.dividendYield : undefined,
          eps: prop.order.asset.eps !== undefined ? prop.order.asset.eps : undefined,
          revenuePerShareTTM: prop.order.asset.revenuePerShareTTM !== undefined ? prop.order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.order.asset.profitMargin !== undefined ? prop.order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.order.asset.operatingMarginTTM !== undefined ? prop.order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.order.asset.returnOnAssetsTTM !== undefined ? prop.order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.order.asset.returnOnEquityTTM !== undefined ? prop.order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.order.asset.revenueTTM !== undefined ? prop.order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.order.asset.grossProfitTTM !== undefined ? prop.order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.order.asset.dilutedEPSTTM !== undefined ? prop.order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.order.asset.analystTargetPrice !== undefined ? prop.order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.order.asset.analystRatingStrongBuy !== undefined ? prop.order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.order.asset.analystRatingBuy !== undefined ? prop.order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.order.asset.analystRatingHold !== undefined ? prop.order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.order.asset.analystRatingSell !== undefined ? prop.order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.order.asset.analystRatingStrongSell !== undefined ? prop.order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.order.asset.trailingPE !== undefined ? prop.order.asset.trailingPE : undefined,
          forwardPE: prop.order.asset.forwardPE !== undefined ? prop.order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.order.asset.priceToSalesRatioTTM !== undefined ? prop.order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.order.asset.priceToBookRatio !== undefined ? prop.order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.order.asset.evToRevenue !== undefined ? prop.order.asset.evToRevenue : undefined,
          evToEbitda: prop.order.asset.evToEbitda !== undefined ? prop.order.asset.evToEbitda : undefined,
          beta: prop.order.asset.beta !== undefined ? prop.order.asset.beta : undefined,
          week52High: prop.order.asset.week52High !== undefined ? prop.order.asset.week52High : undefined,
          week52Low: prop.order.asset.week52Low !== undefined ? prop.order.asset.week52Low : undefined,
          day50MovingAverage: prop.order.asset.day50MovingAverage !== undefined ? prop.order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.order.asset.day200MovingAverage !== undefined ? prop.order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.order.asset.sharesOutstanding !== undefined ? prop.order.asset.sharesOutstanding : undefined,
          dividendDate: prop.order.asset.dividendDate !== undefined ? prop.order.asset.dividendDate : undefined,
          exDividendDate: prop.order.asset.exDividendDate !== undefined ? prop.order.asset.exDividendDate : undefined,
          sellPrice: prop.order.asset.sellPrice !== undefined ? prop.order.asset.sellPrice : undefined,
          buyPrice: prop.order.asset.buyPrice !== undefined ? prop.order.asset.buyPrice : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAction) {
        return response.data.updateManyAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAction:', error);
      throw error;
    }
  },

  /**
   * Delete a single Action record.
   * @param props - Properties to update.
   * @returns The deleted Action or null.
   */
  async delete(props: ActionType): Promise<ActionType> {

    const client = createApolloClient();

      const DELETE_ONE_ACTION = gql`
      mutation deleteOneAction($where: ActionWhereUniqueInput!) {
        deleteOneAction(where: $where) {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
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
      const response = await client.mutate({ mutation: DELETE_ONE_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAction) {
        return response.data.deleteOneAction;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAction:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Action record by ID.
   * @param props - Properties to update.
   * @returns The retrieved Action or null.
   */
  async get(props: ActionType): Promise<ActionType | null> {

    const client = createApolloClient();

      const GET_ACTION = gql`
      query getAction($where: ActionWhereUniqueInput!) {
        getAction(where: $where) {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
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
      const response = await client.query({ query: GET_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAction ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Actions records.
   * @returns An array of Action records or null.
   */
  async getAll(): Promise<ActionType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ACTION = gql`
      query getAllAction {
        actions {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
          }
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ACTION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.actions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Action records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found Action records or null.
   */
  async findMany(props: ActionType): Promise<ActionType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ACTION = gql`
      query findManyAction($where: ActionWhereInput!) {
        actions(where: $where) {
          id
          sequence
          tradeId
          type
          orderId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
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
                alpacaAccountId
                assetId
                actionId
                type
                side
                qty
                price
                stopLoss
                status
                createdAt
                updatedAt
                executionTime
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
                }
                asset {
                  id
                }
                relevancyScore
                sentimentScore
                sentimentLabel
              }
            }
            optionContractType
            actions {
              id
            }
          }
          order {
            id
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
      const response = await client.query({ query: FIND_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Actions) {
        return response.data.actions;
      } else {
       return [] as ActionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};

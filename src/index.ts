// This file is auto-generated by modules/index.d.ts
export type * as types from './generated/typegraphql-prisma/models/index.d.ts';
export type * as enums from './generated/typegraphql-prisma/enums/index.d.ts';
export * from './generated/typeStrings/index';

// Re-export Apollo Client functions from client.ts
export {
  getApolloClient,
  getApolloModules,
  configureConnectionPool,
  client
} from './client';

 export type {
  ApolloClientType,
  InMemoryCacheType,
  HttpLinkType,
  NormalizedCacheObject,
} from './client';


import { Account } from './Account';
import { Action } from './Action';
import { Alert } from './Alert';
import { Allocation } from './Allocation';
import { AlpacaAccount } from './AlpacaAccount';
import { Asset } from './Asset';
import { Authenticator } from './Authenticator';
import { Customer } from './Customer';
import { EconomicEvent } from './EconomicEvent';
import { MarketSentiment } from './MarketSentiment';
import { NewsArticle } from './NewsArticle';
import { NewsArticleAssetSentiment } from './NewsArticleAssetSentiment';
import { ScheduledOptionOrder } from './ScheduledOptionOrder';
import { Session } from './Session';
import { Trade } from './Trade';
import { User } from './User';
import { VerificationToken } from './VerificationToken';

const adaptic = {
  account: Account,
  action: Action,
  alert: Alert,
  allocation: Allocation,
  alpacaAccount: AlpacaAccount,
  asset: Asset,
  authenticator: Authenticator,
  customer: Customer,
  economicEvent: EconomicEvent,
  marketSentiment: MarketSentiment,
  newsArticle: NewsArticle,
  newsArticleAssetSentiment: NewsArticleAssetSentiment,
  scheduledOptionOrder: ScheduledOptionOrder,
  session: Session,
  trade: Trade,
  user: User,
  verificationToken: VerificationToken,
};

export default adaptic;

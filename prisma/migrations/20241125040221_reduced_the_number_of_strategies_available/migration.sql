/*
  Warnings:

  - The values [ARBITRAGE,STATISTICAL_ARBITRAGE,LIQUIDITY_PROVISION,PAIR_TRADING,SECTOR_ROTATION,HIGH_FREQUENCY_TRADING,MACHINE_VISION_ANALYSIS] on the enum `TradeStrategy` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TradeStrategy_new" AS ENUM ('TECHNICAL_ANALYSIS', 'TREND_FOLLOWING', 'MEAN_REVERSION', 'OPTIONS_STRATEGY', 'MOMENTUM_STRATEGY', 'MARKET_MAKING', 'NEWS_BASED_STRATEGY', 'SENTIMENT_ANALYSIS', 'SCALPING', 'VOLATILITY_TRADING', 'EVENT_DRIVEN', 'BREAKOUT_STRATEGY', 'ORDER_FLOW_TRADING', 'NO_STRATEGY');
ALTER TABLE "trades" ALTER COLUMN "strategy" DROP DEFAULT;
ALTER TABLE "trades" ALTER COLUMN "strategy" TYPE "TradeStrategy_new" USING ("strategy"::text::"TradeStrategy_new");
ALTER TYPE "TradeStrategy" RENAME TO "TradeStrategy_old";
ALTER TYPE "TradeStrategy_new" RENAME TO "TradeStrategy";
DROP TYPE "TradeStrategy_old";
ALTER TABLE "trades" ALTER COLUMN "strategy" SET DEFAULT 'TECHNICAL_ANALYSIS';
COMMIT;

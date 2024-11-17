-- AlterTable
ALTER TABLE "assets" ADD COLUMN     "address" TEXT,
ADD COLUMN     "analystRatingBuy" INTEGER,
ADD COLUMN     "analystRatingHold" INTEGER,
ADD COLUMN     "analystRatingSell" INTEGER,
ADD COLUMN     "analystRatingStrongBuy" INTEGER,
ADD COLUMN     "analystRatingStrongSell" INTEGER,
ADD COLUMN     "analystTargetPrice" DOUBLE PRECISION,
ADD COLUMN     "beta" DOUBLE PRECISION,
ADD COLUMN     "bookValue" DOUBLE PRECISION,
ADD COLUMN     "cik" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "day200MovingAverage" DOUBLE PRECISION,
ADD COLUMN     "day50MovingAverage" DOUBLE PRECISION,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "dilutedEPSTTM" DOUBLE PRECISION,
ADD COLUMN     "dividendDate" TIMESTAMP(3),
ADD COLUMN     "dividendPerShare" DOUBLE PRECISION,
ADD COLUMN     "dividendYield" DOUBLE PRECISION,
ADD COLUMN     "ebitda" BIGINT,
ADD COLUMN     "eps" DOUBLE PRECISION,
ADD COLUMN     "evToEbitda" DOUBLE PRECISION,
ADD COLUMN     "evToRevenue" DOUBLE PRECISION,
ADD COLUMN     "exDividendDate" TIMESTAMP(3),
ADD COLUMN     "exchange" TEXT,
ADD COLUMN     "fiscalYearEnd" TEXT,
ADD COLUMN     "forwardPE" DOUBLE PRECISION,
ADD COLUMN     "grossProfitTTM" BIGINT,
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "latestQuarter" TIMESTAMP(3),
ADD COLUMN     "marketCapitalization" BIGINT,
ADD COLUMN     "officialSite" TEXT,
ADD COLUMN     "operatingMarginTTM" DOUBLE PRECISION,
ADD COLUMN     "peRatio" DOUBLE PRECISION,
ADD COLUMN     "pegRatio" DOUBLE PRECISION,
ADD COLUMN     "priceToBookRatio" DOUBLE PRECISION,
ADD COLUMN     "priceToSalesRatioTTM" DOUBLE PRECISION,
ADD COLUMN     "profitMargin" DOUBLE PRECISION,
ADD COLUMN     "quarterlyEarningsGrowthYOY" DOUBLE PRECISION,
ADD COLUMN     "quarterlyRevenueGrowthYOY" DOUBLE PRECISION,
ADD COLUMN     "returnOnAssetsTTM" DOUBLE PRECISION,
ADD COLUMN     "returnOnEquityTTM" DOUBLE PRECISION,
ADD COLUMN     "revenuePerShareTTM" DOUBLE PRECISION,
ADD COLUMN     "revenueTTM" BIGINT,
ADD COLUMN     "sector" TEXT,
ADD COLUMN     "sharesOutstanding" BIGINT,
ADD COLUMN     "trailingPE" DOUBLE PRECISION,
ADD COLUMN     "week52High" DOUBLE PRECISION,
ADD COLUMN     "week52Low" DOUBLE PRECISION;
import { IStockSymbolInfo, IStockQuoteInfo, IStockSymbol, IStockPrice, IStockDetails } from '@/interfaces/stocks.types';
import { cache } from '@/utils/cache';
import axios from 'axios';

const API_KEY = 'RACHRZTG19SNY800'; // Replace with your actual API key
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockSymbols = async (symbol: string): Promise<IStockSymbolInfo[] | null> => {
    const cacheKey = `stock-${symbol}`;
    const cachedData:IStockSymbolInfo[] = cache.get(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    try {
        const { data } = await axios.get<{ bestMatches: IStockSymbolInfo[]} | { Information: string }>(
            `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`
        );

        if ('Information' in data) {
            throw new Error(data.Information);
        }

        cache.set(cacheKey, data.bestMatches);
        return data.bestMatches;
    } catch (error) {
        console.error('Failed to fetch stock symbols:', error);
        return null;
    }

};

export const fetchStockPrice = async (symbol: string): Promise<IStockQuoteInfo | null> => {
    try {
        const { data } = await axios.get<{ 'Global Quote': IStockQuoteInfo }| { Information: string }>(
            `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );

        if ('Information' in data) {
            throw new Error(data.Information);
        }

        return data['Global Quote'];
    } catch (error) {
        console.error('Failed to fetch stock price:', error);
        return null;
    }
};

export const formatSymbolInfo = (symbolInfo: IStockSymbolInfo): IStockSymbol => {
    const {
        '1. symbol': symbol,
        '2. name': name,
        '3. type': type,
        '4. region': region,
        '5. marketOpen': marketOpen,
        '6. marketClose': marketClose,
        '7. timezone': timezone,
        '8. currency': currency,
        '9. matchScore': matchScore,
    } = symbolInfo;

    return {
        symbol,
        name,
        type,
        region,
        marketOpen: marketOpen,
        marketClose: marketClose,
        timezone,
        currency,
        matchScore: parseFloat(matchScore),
    };
};

export const formatQuoteInfo = (quoteInfo: IStockQuoteInfo): IStockPrice => {
    return {
        currentPrice: quoteInfo['05. price'],
        open: quoteInfo['02. open'],
        high: quoteInfo['03. high'],
        low: quoteInfo['04. low'],
        volume: quoteInfo['06. volume'],
        latestTradingDay: quoteInfo['07. latest trading day'],
        previousClose: quoteInfo['08. previous close'],
        change: quoteInfo['09. change'],
        changePercent: quoteInfo['10. change percent'],
    };
};

export const formatStockDetails = (
    symbolInfo: IStockSymbolInfo,
    quoteInfo: IStockQuoteInfo
): IStockDetails => {
    return {
        ...formatSymbolInfo(symbolInfo),
        ...formatQuoteInfo(quoteInfo)
    };
};

import { IStockDetails } from "@/interfaces/stocks.types";
import { fetchStockPrice, formatQuoteInfo, fetchStockSymbols, formatSymbolInfo } from "@/services/stock.service";




  
export default async function StockDetailPage({params}:{params:{ticker:string,symbolInfo:IStockDetails}}) {
    const {ticker, symbolInfo} = params;

    const result =  await fetchStockPrice(ticker);
    if(result === null)return <div>Stock price not available</div>;
    const quote = formatQuoteInfo(result);


    if (symbolInfo === undefined) {
        const result = await fetchStockSymbols(ticker);
        if (result === null) return <div>No stock found with the ticker {ticker}</div>;
        const parsedSymbols = result.map(formatSymbolInfo);


        const bestMatch = parsedSymbols.reduce((accumulator, current) => {
            const currentScore = current.matchScore;
            const accumulatorScore = accumulator.matchScore;

            if (currentScore > accumulatorScore) {
                return current;
            }

            return accumulator;
        }, {  ...parsedSymbols[0],matchScore: -Infinity });

        if (bestMatch.matchScore === -Infinity) {
            return <div>No stock found with the ticker {ticker}</div>;
        }
        const details:any = {...bestMatch,...quote};
        return <div>{details.name}</div>

    }
    const details:any = {...symbolInfo,...quote};

    return (
        <div>{details.name}</div>
    );
}
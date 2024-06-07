import { IStock } from "@/interfaces/stocks.types";
import { stocks } from "@/utils/mockData";

export const fetchStockSymbols = async (): Promise<IStock[]> => {
    
        return stocks;

};
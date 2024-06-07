'use client'

import { IStockSymbol } from "@/interfaces/stocks.types";
import { fetchStockSymbols, formatSymbolInfo } from "@/services/stock.service";
import { useState, useEffect } from "react";

export function useStocks() {
    const [query, setQuery] = useState('');
    const [filteredStocks, setFilteredStocks] = useState<IStockSymbol[]>([]);
  
    useEffect(() => {
      async function fetchStocks() {
        if (query.trim() !== '') {
          try {
            const stocksResponse = await fetchStockSymbols(query);
            if (stocksResponse !== null) {
              const stocks = stocksResponse.map(formatSymbolInfo);
              const filteredStocks = stocks.filter((stock: IStockSymbol) =>
                stock.name.toLowerCase().includes(query.toLowerCase())
              );
              setFilteredStocks(filteredStocks);
            } else {
              setFilteredStocks([]);
            }
          } catch (error) {
            setFilteredStocks([]);
          }
        } else {
          setFilteredStocks([]);
        }
      }
  
      fetchStocks();
    }, [query]);
  
    return { query, setQuery, filteredStocks };
  }
  
'use client'
import { IStock } from "@/interfaces/stocks.types";
import { fetchStockSymbols } from "@/services/stock.service";
import { useState, useEffect } from "react";

export default function Home() {

  const [query, setQuery] = useState('');
    const [filteredStocks, setFilteredStocks] = useState<IStock[]>([]);


    useEffect(() => {
      async function fetchStocks() {
        if (query.trim() !== '') {
              const stocks = await fetchStockSymbols();
              const filteredStocks = stocks.filter((stock: IStock) =>
                stock.name.toLowerCase().includes(query.toLowerCase())
              );
              setFilteredStocks(filteredStocks);
              console.log(filteredStocks)
        }
      }
  
      fetchStocks();
    }, [query]);
  
    return (
      <div className="p-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for stocks"
        />
        <ul>
          {filteredStocks.map(stock => (
            <li key={stock.symbol}>
              {stock.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
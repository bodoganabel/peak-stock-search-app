'use client' 

import Link from 'next/link';
import { useStocks } from '@/app/hooks/useStocks';
export default function Home() {
  const { query, setQuery, filteredStocks } = useStocks();

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
            <Link href={`/${stock.symbol}`}>
             {stock.name} ({stock.symbol})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
'use client'
import { IStockDetails } from '@/interfaces/stocks.types';
import React from 'react';


interface StockDetailProps {
  details: IStockDetails;
}


const StockDetail = (props:StockDetailProps) => {
    const { name, symbol, type, region, marketOpen, marketClose, timezone, currency, currentPrice, open, high, low, volume, latestTradingDay, previousClose, change, changePercent, } = props.details;
    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Stock Information</h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Symbol:</span> {symbol}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Name:</span> {name}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Type:</span> {type}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Region:</span> {region}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Market Information</h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Market Open:</span> {marketOpen}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Market Close:</span> {marketClose}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Timezone:</span> {timezone}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Currency:</span> {currency}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Price Information</h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Current Price:</span> ${currentPrice}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Open:</span> ${open}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">High:</span> ${high}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Low:</span> ${low}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Volume:</span> {volume}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Trading Information</h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Latest Trading Day:</span> {latestTradingDay}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Previous Close:</span> ${previousClose}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Change:</span> ${change}
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-semibold">Change Percent:</span> {changePercent}%
            </li>
          </ul>
        </div>
    </div>
  );
};

export default StockDetail;

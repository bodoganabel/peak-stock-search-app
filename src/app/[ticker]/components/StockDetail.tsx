'use client'
import { IStockDetails } from '@/interfaces/stocks.types';
import React from 'react';


interface StockDetailProps {
  details: IStockDetails;
}


const StockDetail = (props:StockDetailProps) => {
    const { name, symbol, type, region, marketOpen, marketClose, timezone, currency, currentPrice, open, high, low, volume, latestTradingDay, previousClose, change, changePercent, } = props.details;

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Stock Information</h2>
          <ul className="list-none">
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Symbol:</span> {symbol}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Name:</span> {name}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Type:</span> {type}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Region:</span> {region}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Market Information</h2>
          <ul className="list-none">
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Market Open:</span> {marketOpen}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Market Close:</span> {marketClose}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Timezone:</span> {timezone}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Currency:</span> {currency}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Price Information</h2>
          <ul className="list-none">
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Current Price:</span> ${currentPrice}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Open:</span> ${open}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">High:</span> ${high}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Low:</span> ${low}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Volume:</span> {volume}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Trading Information</h2>
          <ul className="list-none">
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Latest Trading Day:</span> {latestTradingDay}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Previous Close:</span> ${previousClose}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Change:</span> ${change}
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 font-semibold w-24 inline-block">Change Percent:</span> {changePercent}%
            </li>
          </ul>
        </div>
      </div>
    );
};

export default StockDetail;

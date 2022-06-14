import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStocks, onBuyingStock }) {
  const stockList = boughtStocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        name={stock.name}
        ticker={stock.ticker}
        price={stock.price}
        id={stock.id}
        onBuyingStock={onBuyingStock}
      />
    );
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;

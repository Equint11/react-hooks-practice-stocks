import React, {useEffect} from "react";
import Stock from "./Stock";

function StockContainer({onFetchData, stockArray}) {
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then((stocksData) => {onFetchData(stocksData)})

  },[])
  const stockList = stockArray.map(stock =>{
    return <Stock 
    key = {stock.id}
    name = {stock.name}
    ticker = {stock.ticker}
    price ={stock.price}
    id = {stock.id}

    />
  }) 

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;

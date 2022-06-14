import React from "react";

function Stock({name, ticker, type, price, id, onBuyingStock}) {
const stockObj ={
  id: id,
  name: name,
  ticker: ticker,
  type: type,
  price: price,

}
function handleClick(){
  onBuyingStock(stockObj)
}

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

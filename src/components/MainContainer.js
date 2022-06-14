import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockArray, setStockArray] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [filterStocks, setFilterStocks] = useState("")
  const [sorting, setSorting] = useState('')


  function handleFetchData(arrayOfData) {
    setStockArray(arrayOfData);
  }

  //better way to do this will be to split it into two functions- one for handeling the onBuyingStcok from stockContainer (which will add)
  //and the other for handeling the onBuyingStock from PortfolioContainer (which will remove)
  function handleBuyingStock(stockObj) {
    const exist = boughtStocks.find((stock) => stock.id === stockObj.id);
    if (!exist) {
      setBoughtStocks([...boughtStocks, stockObj]);
    } else {
      setBoughtStocks(boughtStocks.filter((stock => stock.id !== stockObj.id)))
    }
  }

  const stocksFilteredArray = stockArray.filter(stock => stock.type.includes(filterStocks))

  function handleFilterCHange(tech){
    setFilterStocks(tech)
  }

  function handleSortChange(value){
    setSorting(value)
  }

  function sortBy(){
    if (sorting === 'Price'){
      stocksFilteredArray.sort((a,b) => (a.price > b.price)? 1:-1)
    }
    if(sorting === 'Alphabetically'){
      stocksFilteredArray.sort((a,b) => (a.name > b.name)? 1:-1)
    }
  }
  sortBy()

  return (
    <div>
      <SearchBar onFilterChange={handleFilterCHange} sorting={sorting} onSortChange={handleSortChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer
            onFetchData={handleFetchData}
            stockArray={stocksFilteredArray}
            onBuyingStock={handleBuyingStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            boughtStocks={boughtStocks}
            onBuyingStock={handleBuyingStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

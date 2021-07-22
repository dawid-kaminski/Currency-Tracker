import React from 'react';
import MainPageItem from '../mainPage/MainPageItem';
import { useSelector } from "react-redux";
import '../mainPage/MainPage.css';
import { saveCurrencies } from "../ducks/favouriteCurrencyList"

function Favourites(props) {

  const currencyStore = useSelector((state)=>state.list)

  const GetCurrencyRender = React.memo(({currency, mid}) => {
    return <MainPageItem currency={currency} mid={mid} />  
  }, [])


  return (
    <div className="main-page">
      list of favourite currencies
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">
        {
          currencyStore.list.map((currency, mid, index)=>
          {return <GetCurrencyRender key={index} currency={currency} mid={mid} />})
        }
        </div>
      </div>
    </div>
  );
}

export default Favourites;
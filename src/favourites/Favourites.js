import React from "react";
import FavouriteCurrencyItem from "./FavouriteCurrencyItem.js";
import { useSelector } from "react-redux";
import "../mainPage/MainPage.css";
import { saveCurrencies } from "../ducks/favouriteCurrencyList";

function Favourites(props) {
  const currencyStore = useSelector((state) => state.list);

  const GetCurrencyRender = React.memo(({ currency, mid }) => {
    return <FavouriteCurrencyItem currency={currency} mid={mid} />;
  }, []);

  return (
    <div className="main-page">
      list of favourite currencies
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">
          {currencyStore.list.map((currency, mid) => {
            return <GetCurrencyRender currency={currency} mid={mid} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Favourites;

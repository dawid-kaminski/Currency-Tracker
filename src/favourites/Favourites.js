import React from "react";
import FavouriteCurrencyItem from "./FavouriteCurrencyItem.js";
import { useSelector } from "react-redux";
import "../mainPage/MainPage.css";
import { saveCurrencies } from "../ducks/favouriteCurrencyList";

function Favourites(props) {
  const list = useSelector((state) => {
    return state.favouriteCurrencyList.list;
  });

  const GetCurrencyRender = React.memo(({ currency, mid }) => {
    return <FavouriteCurrencyItem currency={currency} mid={mid} />;
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">
          {list.map((object, index) => {
            return (
              <GetCurrencyRender
                key={object.currency}
                currency={object.currency}
                mid={object.mid}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favourites;

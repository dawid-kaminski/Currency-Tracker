import React, { useCallback } from "react";
import "./FavouriteCurrencyItem.css";
import { useDispatch } from "react-redux";
import { saveCurrencies } from "../ducks/favouriteCurrencyList";

function FavouriteCurrencyItem(props) {
  const dispatch = useDispatch();

  const onClickRemoveFavouriteCurrencyButton = useCallback(() => {}, [
    dispatch,
  ]);

  return (
    <div className="favourite-item__container">
      <div className="favourite-item__currency">{props.currency}</div>
      <div className="favourite-item__pln">PLN</div>
      <div className="favourite-item__mid">{props.mid}</div>
      <button className="button" onClick={onClickRemoveFavouriteCurrencyButton}>
        Remove currency from your favourites
      </button>
    </div>
  );
}

export default FavouriteCurrencyItem;

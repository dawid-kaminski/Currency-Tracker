import React, { useCallback } from "react";
import "../mainPage/MainPageItem.css";
import "./FavouriteCurrencyItem.css";
import { useDispatch } from "react-redux";
import { deleteCurrency } from "../ducks/favouriteCurrencyList";

function FavouriteCurrencyItem(props) {
  const dispatch = useDispatch();

  const onClickRemoveFavouriteCurrencyButton = useCallback(() => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteCurrency({ currency: props.currency }));
    }
  }, [dispatch]);

  return (
    <div className="favourite-item__container">
      <div className="item__currency-details">
        <div className="item__currency">{props.currency}</div>
        <div className="item__slash">/</div>
        <div className="item__pln">PLN</div>
        <div className="item__mid">{props.mid}</div>
      </div>
      <button
        className="remove-currency-button"
        onClick={onClickRemoveFavouriteCurrencyButton}
      >
        Remove currency from your favourites
      </button>
    </div>
  );
}

export default FavouriteCurrencyItem;

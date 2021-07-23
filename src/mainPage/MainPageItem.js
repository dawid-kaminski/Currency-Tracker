import React, { useCallback } from "react";
import "./MainPageItem.css";
import { useDispatch } from "react-redux";
import { saveCurrencies } from "../ducks/favouriteCurrencyList";

function MainPageItem(props) {
  const dispatch = useDispatch();

  const onClickAddToFavouritesButton = useCallback(() => {
    dispatch(saveCurrencies({ currency: props.currency, mid: props.mid }));
  }, [dispatch, props.currency, props.mid]);

  return (
    <div className="item__container">
      <div className="item__currency-details">
        <div className="item__currency">{props.currency}</div>
        <div className="item__slash">/</div>
        <div className="item__pln">PLN</div>
        <div className="item__mid">{props.mid}</div>
      </div>
      <button
        className="add-currency-button"
        onClick={onClickAddToFavouritesButton}
      >
        Add Currency to Favourites!
      </button>
    </div>
  );
}

export default MainPageItem;

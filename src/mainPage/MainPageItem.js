import React, { useCallback } from 'react';
import './MainPageItem.css';
import { useDispatch } from "react-redux";
import { saveCurrencies } from "../ducks/favouriteCurrencyList"

function MainPageItem(props) {

  const dispatch = useDispatch()

  const onClickAddToFavouritesButton = useCallback(
    () => {
			console.log()
      dispatch(saveCurrencies({currency: props.currency, mid: props.mid}));
    },
  [dispatch],
);

  return(
    <div className="item__container">
      <div className="item__currency">
        {props.currency}
      </div>
      <div className="item__pln">
        PLN
      </div>
      <div className="item__mid">
        {props.mid}
      </div>
      <button className="button" onClick={onClickAddToFavouritesButton}>
        Add Currency to Favourites!
      </button>
    </div>
  );
}

export default MainPageItem;
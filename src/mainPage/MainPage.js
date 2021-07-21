import React from 'react';
import './MainPage.css';

// export const getCurrencyList=async(dispatch)=> {
//   try {
//     const getNewCurrencyListResponse = await fetch("http://api.nbp.pl/api/exchangerates/tables/A")

//     const newCurrency = await getNewCurrencyListResponse.json()

//     // const currencyCode = newDeck.deck_id

//     // const getNewCardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)

//     // const newCards = await getNewCardResponse.json()
    
//     // const cards = newCards.cards

//     // dispatch({type : "createNewRound", cards : cards})
//   }
//   catch(error) {
//     getCurrencyList(dispatch)
//   }
// }

const getCurrencyList = fetch("http://api.nbp.pl/api/exchangerates/tables/A")

console.log(getCurrencyList)

const getUSD = fetch("http://api.nbp.pl/api/exchangerates/rates/A/USD/")

console.log(getUSD)

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">

        </div>
      </div>
    </div>
  );
}

export default MainPage;
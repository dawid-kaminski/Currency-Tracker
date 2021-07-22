import React from 'react';
import MainPageItem from './MainPageItem.js'
import './MainPage.css';

fetch('http://api.nbp.pl/api/exchangerates/tables/A')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const mid = data[0].rates.map(currency => {
      return currency.mid
    });
    console.log(mid)
  })

fetch('http://api.nbp.pl/api/exchangerates/tables/A')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const code = data[0].rates.map(currency => {
      return currency.code
    });
    console.log(code)
  })
  
function MainPage(props) {
  return (
    <div className="main-page">
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">
          <MainPageItem currency="EUR" mid="4.5" />
          <MainPageItem currency="USD" mid="4" />
          <MainPageItem currency="GBP" mid="5" />
          <MainPageItem currency="CHF" mid="3.5" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
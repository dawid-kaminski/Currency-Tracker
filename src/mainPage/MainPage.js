import React, { useEffect, useState } from "react";
import MainPageItem from "./MainPageItem.js";
import "./MainPage.css";

function MainPage(props) {
  const [mids, setMids] = useState([]);
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A")
      .then((response) => {
        return response.json();
      })
      .then(([data]) => {
        setMids(data.rates.map((currency) => currency.mid));
        setCodes(data.rates.map((currency) => currency.code));
      });
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__currecy-list-container">
        <div className="main-page__currency-list">
          {codes.map((code, i) => (
            <MainPageItem key={i} currency={code} mid={mids[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;

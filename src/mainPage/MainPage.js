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
      .then((data) => {
        const mid = data[0].rates.map((currency) => {
          return currency.mid;
        });
        setMids(mid);
      });
  }, []);

  console.log(mids);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const code = data[0].rates.map((currency) => {
          return currency.code;
        });
        setCodes(code);
      });
  }, []);

  console.log(codes);

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

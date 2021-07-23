import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const listener = (event) => {
      if (window.scrollY > 400 && isFixedHeader === false) {
        setIsFixedHeader(true);
      }
      if (window.scrollY < 400 && isFixedHeader === true) {
        setIsFixedHeader(false);
      }
    };
    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [isFixedHeader]);

  const onClickMainPage = () => {
    history.push("/");
  };

  const onClickFavourites = () => {
    history.push("/favourites");
  };

  return (
    <div className={isFixedHeader === true ? "header-fixed" : "header"}>
      <div className="header__headline">Currency Tracker</div>
      <div className="header__link" onClick={onClickMainPage}>
        Main Page
      </div>
      <div className="header__favourites" onClick={onClickFavourites}>
        Favourites
      </div>
    </div>
  );
}

export default Header;

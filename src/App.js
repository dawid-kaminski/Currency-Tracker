import Header from './header/Header.js'
import MainPage from './mainPage/MainPage.js'
import Favourites from './favourites/Favourites.js'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/favourites">
            <Favourites /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './index.scss';
import {Header} from "./components/Header/Header";
import {Join} from "./components/Join/Join";
import {BecomeModel} from "./components/BecomeModel/BecomeModel";
import {Profit} from "./components/Profit/Profit";
import {Advantages} from "./components/Advantages/Advantages";
import {Safety} from "./components/Safety/Safety";
import {Promo} from "./components/Promo/Promo";
import {Reviews} from "./components/Reviews/Reviews";
import {Awards} from "./components/Awards/Awards";

function App() {
  return (
    <div className="App">
        <Header/>
        <Promo/>
        <BecomeModel/>
        <Profit/>
        <Advantages/>
        <Safety/>
        <Join/>
        <Reviews/>
        <Awards/>
    </div>
  );
}

export default App;

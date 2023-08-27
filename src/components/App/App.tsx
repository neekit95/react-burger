import React, { useState } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-construction/burgrer-construction';
import burgerData from '../../utilits/data';

function App() {
  const [burgerArr, setBurgerArr] = useState([]);
  return (

    <div className={appStyle.wrapper}>
      <AppHeader />
      <main className={appStyle.main}>
        <BurgrerIngridients burgerData={burgerData} setBurgerArr={setBurgerArr} />
        <BurgerConstruction burgerArr={burgerArr} />
      </main>
    </div>

  );
}

export default App;

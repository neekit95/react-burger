/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-construction/burgrer-construction';
import burgerData from '../../utilits/data';

function App() {
  const beginBun = burgerData[0]
  const [burgerArr, setBurgerArr] = useState([]);
  const [bun, setBun] = useState([beginBun, beginBun])

  return (

    <div className={appStyle.wrapper}>
      <AppHeader />
      <main className={appStyle.main}>

        {/* <BurgrerIngridients
          burgerData={burgerData}
          setBurgerArr={setBurgerArr}
        />
        <BurgerConstruction
          burgerArr={burgerArr}
        /> */}

        <BurgrerIngridients
          burgerData={burgerData}
          setBun = {setBun}
          setBurgerArr={setBurgerArr}
        />
        <BurgerConstruction
          burgerArr={burgerArr}
          bun={bun}
        />
      </main>
    </div>

  );
}

export default App;


import React from 'react';
import appStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-counstruction/burgrer-counstruction';


function App() {
  return (
    <>
      <div className={appStyle.wrapper}>
        <AppHeader />
        <div className={appStyle.main}>
          <BurgrerIngridients />
          <BurgerConstruction />
        </div>
      </div>
    </>
  );
}

export default App;

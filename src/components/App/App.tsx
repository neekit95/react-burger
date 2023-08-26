import React from 'react';
import appStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-construction/burgrer-construction';
import burgerData from './utilits/data';

function App() {
  return (
    <>
      <div className={appStyle.wrapper}>
        <AppHeader />
        <div className={appStyle.main}>
          <BurgrerIngridients burgerData = {burgerData}/>
          <BurgerConstruction />
        </div>
      </div>
    </>
  );
}

export default App;

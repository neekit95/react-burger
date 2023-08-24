import React from 'react';
import appStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-counstruction/burgrer-counstruction';


function App() {
  return (
    <div className="App">
      <div className={appStyle.wrapper}>
        <AppHeader />
        <div className={appStyle.main}>
        <h2 className={appStyle.h2}>Соберите бургер</h2>
          <BurgrerIngridients />
          <BurgerConstruction />
        </div>
      </div>
    </div>
  );
}

export default App;

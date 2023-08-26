import React, {useState} from 'react';
import appStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import BurgerConstruction from '../burgrer-construction/burgrer-construction';
import burgerData from './utilits/data';

function App() {
  const [burgerArr, setBurgerArr] = useState([]); 
  return (
    <>
      <div className={appStyle.wrapper}>
        <AppHeader />
        <div className={appStyle.main}>
      <BurgrerIngridients burgerData={burgerData} setBurgerArr={setBurgerArr} /> {/* Передача функции через пропсы */}
          <BurgerConstruction burgerArr={burgerArr} />
        </div>
      </div>
    </>
  );
}

export default App;

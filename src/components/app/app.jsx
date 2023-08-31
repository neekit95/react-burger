/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingredients/burger-ingredients';
import BurgerConstruction from '../burgrer-construction/burger-construction';
import burgerData from '../../utilits/data';


function App() {

  // const [burgerArr, setBurgerArr] = useState([]);
  // const [bun, setBun] = useState([]);
  // const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

  // useEffect(() =>{
  //   fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     const bunIngeidients = data.fliter(ingredient => ingredient.type ==='bun');
  //     setBun([bunIngeidients[0], bunIngeidients[0]]);
  //   })
  //   .catch(error=> {
  //     console.error('Error fetching data:', error);
  //   }); 
  // }, []);

  // const [bun, setBun] = useState([]);

  
  const beginBun = burgerData[0]
  const [burgerArr, setBurgerArr] = useState([]);
  const [bun, setBun] = useState([beginBun, beginBun]);


  return (

    <div className={appStyle.wrapper}>
      <AppHeader />
      <main className={appStyle.main}>

        <BurgrerIngridients
          burgerData={burgerData}
          setBun={setBun}
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

//TODO: доделать логику счетчиков на булки
//TODO: дописать логику по цене
//TODO: дописать логику перемещения tab вместе со скролом
//TODO: дописать логику удаления из массива burgerArr по кнопке
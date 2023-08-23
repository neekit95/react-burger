import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgrerIngridients from '../burger-ingridients/burgrer-ingridients';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <AppHeader />

        <div className="container">
          <BurgrerIngridients />

        </div>
      </div>
    </div>
  );
}

export default App;

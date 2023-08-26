import React from "react";
// import { useState } from "react";
import burgerIngridientsStyle from "./burger-ingridients.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "./card/card";
// import burgerData from "../App/utilits/data";

function BurgrerIngridients(props) {
 


  const burgerData = props.burgerData;

  const [current, setCurrent] = React.useState("one");
  const handleTabClick = (value) => {
    setCurrent(value);
  };

  const arrBuns = [];
  const arrSauces = [];
  const arrMain = [];

  function findTypeBurger() {
    for (const burger of burgerData) {
      if (burger.type === "bun") {
        arrBuns.push(burger);
      } else if (burger.type === "sauce") {
        arrSauces.push(burger);
      } else if (burger.type === "main") {
        arrMain.push(burger);
      }
    }
  }
  findTypeBurger();

  // console.log("arrBuns", arrBuns);
  // console.log("arrSauces", arrSauces);
  // console.log("arrMain", arrMain);

  function addCard(arr) {
    const cards = arr.map((item) => (
      <Card
        img={item.image}
        price={item.price}
        name={item.name}
        key={item._id}
        setBurgerArr={props.setBurgerArr}
      />
    ));
    return cards;
  }

  const bunCards = addCard(arrBuns);
  const sauceCards = addCard(arrSauces);
  const mainCards = addCard(arrMain);

  return (
    <main className={burgerIngridientsStyle.main}>
      <h1 className={burgerIngridientsStyle.h1}>Соберите бургер</h1>

      <div className={burgerIngridientsStyle.tab} style={{ display: "flex" }}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => handleTabClick("one")}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => handleTabClick("two")}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => handleTabClick("three")}
        >
          Начинки
        </Tab>
      </div>

      <div className={burgerIngridientsStyle.scroll}>
        <section className={burgerIngridientsStyle.section}>
          <h2 className={burgerIngridientsStyle.h2}>Булки</h2>
          <div className={burgerIngridientsStyle.products}>{bunCards}</div>
        </section>

        <section className={burgerIngridientsStyle.section}>
          <h2 className={burgerIngridientsStyle.h2}>Соусы</h2>
          <div className={burgerIngridientsStyle.products}>{sauceCards}</div>
        </section>

        <section className={burgerIngridientsStyle.section}>
          <h2 className={burgerIngridientsStyle.h2}>Начинки</h2>
          <div className={burgerIngridientsStyle.products}>{mainCards}</div>
        </section>
      </div>
    </main>
  );
}

export default BurgrerIngridients;

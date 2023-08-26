import React, { useRef } from "react";
import burgerIngridientsStyle from "./burger-ingridients.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "./card/card";
import PropTypes from "prop-types";

function BurgrerIngridients(props) {
  const burgerData = props.burgerData;

  const [current, setCurrent] = React.useState("one");
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const handleTabClick = (value) => {
    setCurrent(value);
    if (value === "one") {
      bunRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "two") {
      sauceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "three") {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
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

  function addCard(arr) {
    const cards = arr.map((item) => (
      <Card
        img={item.image}
        price={item.price}
        name={item.name}
        key={item._id}
        setBurgerArr={props.setBurgerArr}
        image_mobile={item.image_mobile}
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
        <section className={burgerIngridientsStyle.section} ref={bunRef}>
          <h2 className={burgerIngridientsStyle.h2}>Булки</h2>
          <div className={burgerIngridientsStyle.products}>{bunCards}</div>
        </section>

        <section className={burgerIngridientsStyle.section} ref={sauceRef}>
          <h2 className={burgerIngridientsStyle.h2}>Соусы</h2>
          <div className={burgerIngridientsStyle.products}>{sauceCards}</div>
        </section>

        <section className={burgerIngridientsStyle.section} ref={mainRef}>
          <h2 className={burgerIngridientsStyle.h2}>Начинки</h2>
          <div className={burgerIngridientsStyle.products}>{mainCards}</div>
        </section>
      </div>
    </main>
  );
}
BurgrerIngridients.propTypes = {
  burgerData: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      name: PropTypes.string,
      _id: PropTypes.string,
      image_mobile: PropTypes.string,
    })
  ),
  setBurgerArr: PropTypes.func,
};

export default BurgrerIngridients;

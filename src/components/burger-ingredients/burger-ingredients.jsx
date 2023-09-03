import React, { useRef } from "react";
import burgerIngredientsStyle from "./burger-ingredients.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "./card/card";
import PropTypes from "prop-types";
import { ingredientType } from "../../utilits/types";


function BurgrerIngridients(props) {
  const burgerData = props.burgerData;
  const [current, setCurrent] = React.useState("one");
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleOpenModal = (content) => {
    props.handleOpenModal(content);
  };

  // const handleCloseModal = () => {
  //   props.handleCloseModal();
  // };

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
        // ingredient = {item}
        // key={item._id}
        _id={item._id}
        name={item.name}
        type={item.type}
        proteins={item.proteins}
        fat={item.fat}
        carbohydrates={item.carbohydrates}
        calories={item.calories}
        img={item.image}
        price={item.price}
        // key={item._id}
        key={item._id}
        image_mobile={item.image_mobile}
        image_large={item.image_large}
        setBurgerArr={props.setBurgerArr}
        setBun={props.setBun}
        handleOpenModal={handleOpenModal}
      />
    ));
    return cards;
  }

  const bunCards = addCard(arrBuns);
  const sauceCards = addCard(arrSauces);
  const mainCards = addCard(arrMain);

  return (
    <main className={burgerIngredientsStyle.main}>
      <h1 className={burgerIngredientsStyle.h1}>Соберите бургер</h1>

      <div className={burgerIngredientsStyle.tab}>
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

      <div className={burgerIngredientsStyle.scroll}>
        <section className={burgerIngredientsStyle.section} ref={bunRef}>
          <h2 className={burgerIngredientsStyle.h2}>Булки</h2>
          <div className={burgerIngredientsStyle.products}>{bunCards}</div>
        </section>

        <section className={burgerIngredientsStyle.section} ref={sauceRef}>
          <h2 className={burgerIngredientsStyle.h2}>Соусы</h2>
          <div className={burgerIngredientsStyle.products}>{sauceCards}</div>
        </section>

        <section className={burgerIngredientsStyle.section} ref={mainRef}>
          <h2 className={burgerIngredientsStyle.h2}>Начинки</h2>
          <div className={burgerIngredientsStyle.products}>{mainCards}</div>
        </section>
      </div>
    </main>
  );
}

BurgrerIngridients.propTypes = {
  burgerData: PropTypes.arrayOf(ingredientType),
  setBurgerArr: PropTypes.func,
  setBun: PropTypes.func,
  handleOpenModal: PropTypes.func,
};

export default BurgrerIngridients;

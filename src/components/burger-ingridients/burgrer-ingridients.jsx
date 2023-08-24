import React from "react";
import burgerIngridientsStyle from "./burger-ingridients.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "./card/card";
import bun01 from "../../images/bun-01.png";
import bun02 from "../../images/bun-02.png";

function BurgrerIngridients() {
  const [current, setCurrent] = React.useState("one");
  const handleTabClick = (value) => {
    setCurrent(value);
  };
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

      <section className={burgerIngridientsStyle.section}>
        <h2 className={burgerIngridientsStyle.h2}>Булки</h2>

        <div className={burgerIngridientsStyle.products}>
          <Card
            img={bun01}
            price="20"
            description="Краторная булка N-200i"
            count="1"
          />

          <Card
            img={bun02}
            price="20"
            description="Флюоресцентная булка R2-D3"
            count="1"
          />
        </div>
      </section>
    </main>
  );
}

export default BurgrerIngridients;

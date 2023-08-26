import React from "react";
import burgerConstructionStyle from "./burgrer-construction.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerData from "../App/utilits/data"; // убрать, залить через props значения
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerConstruction(props) {
  const burgerArr = props.burgerArr;
  console.log(burgerArr);

  const displayBuns = []; // дописать логику отделения булок от остального, передать значения

  const displayBurgerArr = burgerArr.map((item) => (
    <div className={burgerConstructionStyle.elementContainer} key={item.id}>
      {/* не работает cursor:pointer */}
      <DragIcon type="primary" style={{ cursor: "pointer" }} />
      <ConstructorElement
        type="default"
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </div>
  ));

  const currentPrice = 2510; // дописать логику по цене

  return (
    <main className={burgerConstructionStyle.main}>
      <section className={burgerConstructionStyle.scroll}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burgerData[0].name} (верх)`}
            price={burgerData[0].price}
            thumbnail={burgerData[0].image_mobile}
          />

          {displayBurgerArr}

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${burgerData[0].name} (низ)`}
            price={burgerData[0].price}
            thumbnail={burgerData[0].image_mobile}
          />
        </div>
      </section>

      <section className={burgerConstructionStyle.price}>
        <p
          className="text text_type_digits-medium"
          style={{ marginRight: "8px" }}
        >
          {currentPrice}
        </p>
        <CurrencyIcon type="primary" />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          style={{ marginLeft: "40px" }}
        >
          Оформить заказ
        </Button>
      </section>
    </main>
  );
}

BurgerConstruction.propTypes = {
  burgerArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      image_mobile: PropTypes.string,
    })
  ),
};

export default BurgerConstruction;

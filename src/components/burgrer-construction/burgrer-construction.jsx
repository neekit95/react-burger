import React from "react";
import burgerConstructionStyle from "./burgrer-construction.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerData from "../App/utilits/data"; // убрать, залить через props значения
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstruction(props) {
  const burgerArr = props.burgerArr;
  console.log(burgerArr);

  const displayBuns = []; // дописать логику отделения булок от остального, передать значения

  const displayBurgerArr = burgerArr.map((item) => (
    <ConstructorElement
      style={{}} //добавить картинку
      key={item.id}
      type="default"
      isLocked={false}
      text={item.name}
      price={item.price}
      thumbnail={item.image_mobile}
    />
  )); // отсечь булки, при клике - нужно их обновлять, а не добавлять.

  return (
    <main className={burgerConstructionStyle.main}>
      <section className={burgerConstructionStyle.scroll}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={burgerData[0].image_mobile}
          />

          {displayBurgerArr}

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={burgerData[0].image_mobile}
          />
        </div>
      </section>

      <section className={burgerConstructionStyle.price}>
        <p className="text text_type_digits-medium" style={{paddingRight:'8px'}}>123</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="medium" style={{marginLeft:'40px'}}>
          Оформить заказ
        </Button>
      </section>
    </main>
  );
}

export default BurgerConstruction;

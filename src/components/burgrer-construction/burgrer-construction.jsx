import React from "react";
import { useEffect, useRef } from "react";
import burgerConstructionStyle from "./burgrer-construction.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerData from "../../utilits/data"; // убрать, залить через props значения
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utilits/types";

function BurgerConstruction(props) {
  const burgerArr = props.burgerArr;
  const bun = props.bun;

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [burgerArr]); // задаем скролл вниз

  const displayBurgerArr = burgerArr.map((item) => (
    <div className={burgerConstructionStyle.elementContainer} key={item.id}>
      <DragIcon
        type="primary"
        className={burgerConstructionStyle.dragIconPrimary}
      />
      <ConstructorElement
        extraClass={burgerConstructionStyle.constructorElement}
        type="default"
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </div>
  ));

  const displayBunTop = bun.map((item) => (
    <div className={burgerConstructionStyle.elementContainerBun} key={item.id}>
      <ConstructorElement
        extraClass={burgerConstructionStyle.constructorElementBun}
        type="top"
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </div>
  ));
  const displayBunBottom = bun.map((item) => (
    <div className={burgerConstructionStyle.elementContainerBun} key={item.id}>
      <ConstructorElement
        extraClass={burgerConstructionStyle.constructorElementBun}
        type="bottom"
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </div>
  ));

  // function deleteElementFromBurgerArr () {
  // } TODO: дописать: при клике на кнопку удалить из массива элемент

  const currentPrice = 2510; // TODO: дописать логику по цене

  return (
    <main className={burgerConstructionStyle.main}>
      <section className={burgerConstructionStyle.all}>
        <div className={burgerConstructionStyle.yandexDiv}>
          {displayBunTop}

          <div
            className={burgerConstructionStyle.scroll}
            ref={scrollContainerRef}
          >
            {displayBurgerArr}
          </div>
          {displayBunBottom}
        </div>
      </section>

      <section className={burgerConstructionStyle.price}>
        <p className="text text_type_digits-medium mr-2">{currentPrice}</p>
        <CurrencyIcon type="primary" />
        <Button
          extraClass="ml-10"
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ
        </Button>
      </section>
    </main>
  );
}

// BurgerConstruction.propTypes = {
//   burgerArr: PropTypes.arrayOf(ingredientType),
// };

export default BurgerConstruction;

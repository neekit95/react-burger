import React from "react";
import { useEffect, useRef } from "react";
import burgerConstructionStyle from "./burger-construction.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utilits/types";
import PropTypes from "prop-types";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";

function BurgerConstruction(props) {
  const burgerArr = props.burgerArr;
  const bun = props.bun;
  const handleOpenModal = (item) => {
    props.handleOpenModal(<IngredientDetails ingredient={item} />);
  };

  const handleCloseModal = () => {
    props.handleCloseModal();
  };

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [burgerArr]); // задаем скролл вниз

  const displayBurgerArr = burgerArr.map((item) => (
      
    <div
      className={burgerConstructionStyle.elementContainer}
      key={item.id}
      onClick={() => handleOpenModal(item)}
    >
      <DragIcon
        type="primary"
        className={burgerConstructionStyle.dragIconPrimary}
      />
      <ConstructorElement
        id={item.id}
        text={item.name}
        type="default"
        price={item.price}
        thumbnail={item.image_mobile}
        isLocked={false}
        extraClass={burgerConstructionStyle.constructorElement}
        
        // image={item.image}
        // image_large={item.image_large}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
      {console.log(item.image)}
    </div>
    
  ));

  const displayBunTop = (
    <div
      className={burgerConstructionStyle.elementContainerBun}
      key={bun[0].id}
      onClick={() => handleOpenModal(bun[0])}
    >
      <ConstructorElement
        extraClass={burgerConstructionStyle.constructorElementBun}
        type="top"
        isLocked={false}
        text={bun[0].name}
        price={bun[0].price}
        thumbnail={bun[0].image_mobile}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
            {/* {console.log(bun[1].proteins)} */}

    </div>
  );
  const displayBunBottom = (
    <div
      className={burgerConstructionStyle.elementContainerBun}
      key={bun[1].id}
      onClick={() => handleOpenModal(bun[1])}
    >
      <ConstructorElement
        extraClass={burgerConstructionStyle.constructorElementBun}
        type="bottom"
        isLocked={false}
        text={bun[1].name}
        price={bun[1].price}
        thumbnail={bun[1].image_mobile}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
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

BurgerConstruction.propTypes = {
  burgerArr: PropTypes.arrayOf(ingredientType),
  bun: PropTypes.arrayOf(ingredientType),
};

export default BurgerConstruction;

import React, { useState } from "react";
import cardStyle from "./card.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../../utilits/types";

function Card(props) {
  const [count, setCount] = useState(0);
  // const [visible, setVisible] =useState(false);

  const handleCardClick = () => {
    setCount(count + 1);

    const newItem = {
      id: Date.now(),
      name: props.name,
      type: props.type,
      proteins: props.proteins,
      price: props.price,
      fat: props.fat,
      carbohydrates: props.carbohydrates,
      calories: props.calories,
      // image: props.img,
      image: props.image,
      image_mobile: props.image_mobile,
      image_large: props.image_large
    };
    const newItem2 = {
      id: Date.now() +1,
      name: props.name,
      type: props.type,
      proteins: props.proteins,
      price: props.price,
      fat: props.fat,
      carbohydrates: props.carbohydrates,
      calories: props.calories,
      // image: props.img,
      image: props.image,
      image_mobile: props.image_mobile,
      image_large: props.image_large
    };

    if (newItem.type === "bun") {
      props.setBun([newItem, newItem2]);
    } else {
      props.setBurgerArr((prevArr) => [...prevArr, newItem]);
    }
  };

  return (
    <div className={cardStyle.container} onClick={handleCardClick}>
      <img className={cardStyle.img} src={props.img} alt={props.name} />

      <div className={cardStyle.price}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon />
      </div>

      <div className={cardStyle.description}>
        <p className="text text_type_main-default">{props.name}</p>
      </div>

      <div className={cardStyle.count}>
        <p className="text text_type_digits-default">{count}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  burgerArr: PropTypes.arrayOf(ingredientType),
  setBurgerArr: PropTypes.func,
  setBun: PropTypes.func,
};
export default Card;

import React, { useState } from "react";
import cardStyle from "./card.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
// import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
// import { ingredientType } from "../../../utilits/types";

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
      image_large: props.image_large,
    };
    const newItem2 = {
      id: Date.now() + 1,
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
      image_large: props.image_large,
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
        <p className={`${cardStyle.p} text text_type_main-default`}>
          {props.price}
        </p>
        <CurrencyIcon />
      </div>

      <div className={cardStyle.description}>
        <p className={`${cardStyle.p} text text_type_main-default`}>
          {props.name}
        </p>
      </div>

      <div className={cardStyle.count}>
        <p className={`${cardStyle.p} text text_type_main-default`}>{count}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  price: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  img: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  setBurgerArr: PropTypes.func,
  setBun: PropTypes.func,
};

export default Card;

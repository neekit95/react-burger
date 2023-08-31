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
      name: props.name,
      price: props.price,
      image: props.img,
      id: Date.now(),
      image_mobile: props.image_mobile,
      type: props.type,
    };
    const newItem2 = {
      name: props.name,
      price: props.price,
      image: props.img,
      id: Date.now() + 1,
      image_mobile: props.image_mobile,
      type: props.type,
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

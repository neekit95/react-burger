import React, { useState } from "react";
import cardStyle from "./card.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function Card(props) {
  const [count, setCount] = useState(0);
  const handleCardClick = () => {
    setCount(count + 1);

    const newItem = {
      name: props.name,
      price: props.price,
      image: props.img,
      id: Date.now(),
      image_mobile: props.image_mobile
    };

    // Обновление состояния burgerArr
    props.setBurgerArr((prevArr) => [...prevArr, newItem]);
  };

  return (
    <div className={cardStyle.container} onClick={handleCardClick}>
      <img className={cardStyle.img} src={props.img} alt="bun" />

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

export default Card;

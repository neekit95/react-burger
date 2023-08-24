import React from "react";
import cardStyle from "./card.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function Card(props) {
  return (
    <div className={cardStyle.container}>
      <img className={cardStyle.img} src={props.img} alt="bun" />

      <div className={cardStyle.price}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon />
      </div>

      <div className={cardStyle.description}>
        <p className="text text_type_main-default">{props.description}</p>
      </div>

      <div className={cardStyle.count}>
        <p className="text text_type_digits-default">
        <Counter count={1} size="default" />
        </p>
      </div>
    </div>
  );
}

export default Card;

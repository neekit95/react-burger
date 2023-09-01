import React from "react";
import orderStyle from "./order-details.module.scss";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import done from "../../../images/done.png";

const OrderDetails = ({ id }) => {
  return (
    <main className={orderStyle.main}>
      <p className={`text text_type_digits-large ${orderStyle.id} `}>{id}</p>
      <p className={`text text_type_main-medium ${orderStyle.p} `}>
        идентификатор заказа
      </p>
      {/* <img src={} alt=""  className={orderStyle.img}/> */}
      {/* <div className={orderStyle.img}> <CheckMarkIcon /></div> */}
      <div className={orderStyle.img}> 
      <img src={done} alt="done" /></div>
      <p className={`text text_type_main-default ${orderStyle.p2} `}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive ${orderStyle.p3} `}>Дождитесь готовности на орбитальной станции</p>
    </main>
  );
};

export default OrderDetails;

import React from "react";
import burgerConstructionStyle from "./burgrer-construction.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstruction(props) {
  const burgerArr = props.burgerArr;
  console.log(burgerArr);
 

  const displayBurgerArr = burgerArr.map((item) => (
    <ConstructorElement
      key={item.id} // Добавьте уникальный ключ
      type="top"
      isLocked={true}
      text={item.name}
      price={item.price}
      thumbnail={item.image_mobile}
    />
  ));

  return (
    <main className={burgerConstructionStyle.main}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    
        {displayBurgerArr}
      </div>
    </main>
  );
}

export default BurgerConstruction;

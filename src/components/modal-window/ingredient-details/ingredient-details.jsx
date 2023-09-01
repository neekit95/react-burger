import React from "react";
import ingredientModalStyle from "./ingredient-details.module.scss";

const IngredientDetails = ({ ingredient }) => {
  return (
    <main className={ingredientModalStyle.main}>
      <h1 className={`${ingredientModalStyle.h1} text text_type_main-large`}>
        Детали ингредиента
      </h1>
      <img
        className={ingredientModalStyle.img}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <h2 className={`${ingredientModalStyle.h2} text text_type_main-medium`}>
        {ingredient.name}
      </h2>
      <section className={ingredientModalStyle.section}>
        <div className={ingredientModalStyle.ingredients}>
          <p>Калории, ккал:</p>
          <p>{ingredient.proteins}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p>протеины:</p>
          <p>{ingredient.proteins}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p>протеины:</p>
          <p>{ingredient.proteins}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p>протеины:</p>
          <p>{ingredient.proteins}</p>
        </div>


      </section>
    </main>
  );
};

export default IngredientDetails;

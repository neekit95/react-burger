import React from "react";
import ingredientModalStyle from "./ingredient-details.module.scss";
import { ingredientType } from "../../../utilits/types";

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
          <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </div>
        <div className={ingredientModalStyle.ingredients}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </div>


      </section>
    </main>
  );
};
IngredientDetails.propTypes = {
  ingredient: ingredientType,
};

export default IngredientDetails;

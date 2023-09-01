import React from 'react';
import ingredientModalStyle from './ingredient-details.module.scss'

const IngredientDetails = ({ ingredient }) => {
  return (
    <main className={ingredientModalStyle.main}>
      <h2>Детали ингредиента</h2>
      <p>Ингредиент: {ingredient}</p>
    </main>
  );
};

export default IngredientDetails;
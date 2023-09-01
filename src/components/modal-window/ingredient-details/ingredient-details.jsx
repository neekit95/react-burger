import React from 'react';
import ingredientModalStyle from './ingredient-details.module.scss'

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className="IngredientDetails">
      <h2>Детали ингредиента</h2>
      <p>Ингредиент: {ingredient}</p>
    </div>
  );
};

export default IngredientDetails;
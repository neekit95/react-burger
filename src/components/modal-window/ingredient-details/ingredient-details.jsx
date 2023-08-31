import React from 'react';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className="IngredientDetails">
      <h2>Детали ингредиента</h2>
      <p>Ингредиент: {ingredient}</p>
    </div>
  );
};

export default IngredientDetails;
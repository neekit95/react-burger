
import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div className="OrderDetails">
      <h2>Детали заказа</h2>
      <p>Заказ: {order}</p>
    </div>
  );
};

export default OrderDetails;
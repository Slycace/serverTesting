import React from 'react';

const GroceryItem = ({ grocery }) => (
  <li>
    <span> {grocery.item} </span>
    <span> {grocery.quantity} </span>
  </li>
);

export default GroceryItem;
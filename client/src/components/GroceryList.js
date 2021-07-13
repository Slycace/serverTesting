import React from 'react';
import GroceryItem from './GroceryItem'

const GroceryList = ({ groceries }) => {
  return (
  <ul className="groceries">
    {

      groceries.map(grocery => (
        <GroceryItem grocery={grocery} />
      ))
    }
  </ul>
);
  }
export default GroceryList;
import React, { useState } from 'react';
import GroceryList from './GroceryList';

const List = () => {
  const[groceries, setGroceries] = useState([
    { id: 1, brand: 'Origin Meatery', details: 'Meat', amount: '2 kg'},
    { id: 2, brand: 'Golden Yolks', details: 'Eggs', amount: '1 box'},
    { id: 3, brand: 'Ixsir', details: 'Red Wine', amount: '3 bottles'},
    { id: 4, brand: 'Ixsir', details: 'White Wine', amount: '1 bottle'},

  ]);

  return (
    <div className="home">
      <GroceryList groceries={groceries}/>
    </div>
  );
}

export default List;
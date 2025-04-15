import React from 'react';
import Foods from './Foods';

const Foodcontainer = () => {

  const foods = [
    {
      id : 1,
      name : "떡볶이"
    },

    {
      id : 2,
      name : "순대"
    },

    {
      id : 3,
      name : "튀김"
    },

    {
      id : 4,
      name : "김밥"
    },
  ]

  const style = {
    listStyle: "none"
  }

  const foodList = foods.map((food, i) =>(
    <Foods key={i} food={food} style={style}/>
  ))
  
  return (
    <ul>
      {foodList}
    </ul>  
  );
};

export default Foodcontainer;
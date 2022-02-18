import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";

export default function App() {
  const [food, setFood] = useState(foods);
  return (
    <div className="App">
     <h1>IronNutrition</h1>
      {food.map(food => {
        return <FoodBox
              key={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
            />
      })}
    </div>
  );
}

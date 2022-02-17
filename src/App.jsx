import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from "./components/FoodBox";

export default function App() {
  const [foods, setFoods] = useState(foodsJSON);
  return (
    <div className="App">
     <h1>IronNutrition</h1>
      {foods.map((food) => {
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

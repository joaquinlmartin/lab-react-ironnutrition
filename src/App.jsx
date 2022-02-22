import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

export default function App() {
  const todaysFoodArray = [];
  const [food, setFood] = useState(foods);
  const [todaysFood, setTodaysFood] = useState(todaysFoodArray);
  
  const filterFood = (input) => {
    setFood(foods.filter((food) => food.name.includes(input)));
    if (input === '') {
      setFood(foods);
    } else {
      setFood(
        foods.filter((food) => 
          food.name.toLowerCase().includes(input.toLowerCase())
      )
     )
    }
  };
 
  const addNewFood = (newFood) => {
    setFood([...food, newFood]);
  };

  const addFoodToday = (todayFood) => {
    setTodaysFood([...todaysFood, todayFood]);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <AddFood addFood={addNewFood} />
      <SearchBar filterFood={filterFood} />
      <div> {food.map((food, i) => {
        return <FoodBox
          key={i}
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
          addFoodToday={addFoodToday}
        />
      })}
      </div>
      <div>
        <h1>Today's food</h1>
        {todaysFood.map((food, i) => (
          <TodaysFood
            key={i}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
    </div>
  );
}

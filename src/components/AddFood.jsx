import React from 'react';
import { useState} from 'react';

export default function AddFood({ foods }) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
      };
      const handleCalories = (e) => {
        setCalories(e.target.value);
      };
      const handleImage = (e) => {
        setImage(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, calories, image };
        foods.addFood(newFood);
      };

    return (
        <div>
            <h3>Add new food</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} placeholder="Insert name" onChange={handleName}/>
                <label>Calories</label>
                <input type="text" name="calories" value={calories} placeholder="Insert calories" onChange={handleCalories}/>
                {
                    <input type="text" value={image} placeholder="Image" onChange={handleImage}/>
                }
                    <button type="submit">Add</button>
            </form>
        </div>
    )
} 
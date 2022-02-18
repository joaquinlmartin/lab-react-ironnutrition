import React from "react";

export default function TodaysFood(todayFood) {
    return (
        <div>
            <img src={todayFood.image} alt="img" />
            <p>{todayFood.name}</p>
            <p>{todayFood.calories}</p>
            <p>{todayFood.quantity}</p>
        </div>
    )
}
import React from "react";

export default function TodaysFood(todayFood) {

    const total = todayFood.reduce((before, after) => {
        return before + after.calories;
    }, 0);

    return (
        <div>
            <p>Todays food</p>
            <div> {todayFood.map(
                ({ name, quantity, calories }) => {
                    return (
                        <li>{quantity} {name} = {calories}</li>
                    )
                }
            )}</div>
            <p>Total: {total} cal</p>
        </div>
    )
}
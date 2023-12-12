import React from "react";
import classes from "./mealGrid.module.css";
import MealItem from "./Mealitem";
const MealGrid = ({ meals }) => {
     return (
          <ul className={classes.meals}>
               {meals.map((meal) => (
                    <li key={meal.id}>
                         <MealItem {...meal} />
                    </li>
               ))}
          </ul>
     );
};

export default MealGrid;

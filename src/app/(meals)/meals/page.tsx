import React from 'react';
import {getMeals} from "@/services/db/db";
import FormComponent from "@/components/FormComponent";

const MealsPage = async () => {
    let meals = await getMeals();
    return (
        <div>
            <FormComponent/>

            {
                meals.map((meal: IMeal) => (<div key={meal.id}>{meal.id} {meal.title}</div>))

            }
        </div>
    );
};

export default MealsPage;

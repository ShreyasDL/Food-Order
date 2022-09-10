import React from "react";

import AvaialbleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    return (<React.Fragment>
        <MealsSummary />
        <AvaialbleMeals />
    </React.Fragment>)
}

export default Meals
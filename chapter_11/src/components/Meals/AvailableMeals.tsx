import {FC} from "react";
import useDummyMeals from "../../hook/useDummyMeals";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals: FC = () => {
    const dummyMeals = useDummyMeals()
    return (
        <section className={classes.meals}>
            {dummyMeals && dummyMeals.length ? (
                <Card>
                    <ul>
                        {dummyMeals.map(meal => (
                            <MealItem
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                            />
                        ))}
                    </ul>
                </Card>
            ) : ''}
        </section>
    )
}

export default AvailableMeals
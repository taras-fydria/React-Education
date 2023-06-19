import {FC, useEffect, useState} from "react";
import useDummyMeals from "../../hook/useDummyMeals";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {IMeal} from "./meals-types";

const AvailableMeals: FC = () => {
    const [mealState, setMealState] = useState<IMeal[]>([])
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://education-meals-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
                if (!response.ok || response.status !== 200) throw new Error(response.statusText)
                const json = await response.json()
                const loadedMeals: IMeal[] = []
                for (const jsonKey in json) {
                    loadedMeals.push({
                        id: jsonKey,
                        name: json[jsonKey].name,
                        price: json[jsonKey].price,
                        description: json[jsonKey].description
                    })
                }
                setMealState(loadedMeals)
            } catch (e) {
            }
        }
        fetchMeals().then(r => console.log(r))
    }, [])

    return (
        <section className={classes.meals}>
            {mealState && mealState.length ? (
                <Card>
                    <ul>
                        {mealState.map(meal => (
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
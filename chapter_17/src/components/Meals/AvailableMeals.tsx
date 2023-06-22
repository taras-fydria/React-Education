import {FC, useEffect, useState} from "react";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {IMeal} from "../../types";

const AvailableMeals: FC = () => {
    const [mealState, setMealState] = useState<IMeal[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true)
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


        fetchMeals()
            .catch(() => setError('Something went wrong'))
            .finally(() => setIsLoading(false))
    }, [])

    let content

    if (isLoading) {
        content = <p className={classes['meals-loading']}>Loading... </p>
    }

    if (error) content = <p className={classes['meals-error']}>{error}</p>

    if (mealState && mealState.length) {
        content = (
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
            </Card>)
    }

    return (
        <section className={classes.meals}>
            {content}
        </section>
    )
}

export default AvailableMeals
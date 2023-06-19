import DUMMY_MEALS from "../components/Meals/dummy-meals";
import {useEffect, useState} from "react";
import DummyMeals from "../components/Meals/dummy-meals";
import {IMeal, TUseDummyMeals} from "../components/Meals/meals-types";

function useDummyMeals(): TUseDummyMeals {
    const [dummyMeals, setDummyMeals] = useState<IMeal[]>([])

    useEffect(() => {

        setDummyMeals(DummyMeals)
    }, [])
    return dummyMeals
}

export default useDummyMeals
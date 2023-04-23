import classes from './Movie.module.css';
import {FC} from "react";
import {IMovie} from "../types";

const Movie:FC<IMovie> = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;

import Movie from './Movie';
import classes from './MoviesList.module.css';
import {FC} from "react";
import {MoviesListComponent} from "../types";

const MovieList: FC<MoviesListComponent> = ({movies}) => {
    return (
        <ul className={classes['movies-list']}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
};

export default MovieList;

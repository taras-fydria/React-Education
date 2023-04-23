import MoviesList from './components/MoviesList';
import './App.css';
import {IMovie} from "./types";
import {useCallback, useEffect, useState} from "react";
import PagedResults from "swapi-typescript/dist/models/PagedResults";
import Film from "swapi-typescript/dist/models/Film";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import AddMovie from "./components/AddMovie.tsx";

function App() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean | string>(false)

    const fetchMoviesHandler = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://swapi.dev/api/films/')
            if (!response.ok || response.status !== 200) {
                throw new Error(response.statusText)
            }
            const data: PagedResults<Film> = await response.json()
            const transformedMovies = data.results.map<IMovie>(movieData => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date
                    }
                }
            )
            setMovies(transformedMovies)
        } catch (e) {
            setIsError(e.message)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler])

    function addMovieHandler(movie) {
        console.log(movie);
    }

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>;
    }

    if (isError) {
        content = <p>{isError}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
}

export default App;
import MoviesList from './components/MoviesList';
import './App.css';
import {IMovie} from "./types";
import {useCallback, useEffect, useState} from "react";
import AddMovie from "./components/AddMovie.tsx";

function App() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean | string>(false)

    const fetchMoviesHandler = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://react-education-f6d0c-default-rtdb.firebaseio.com/movies.json')
            if (!response.ok || response.status !== 200) {
                throw new Error(response.statusText)
            }
            const data = await response.json()
            const loadedMovies: IMovie[] = []

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    releaseDate: data[key].releaseDate,
                    openingText: data[key].openingText
                })
            }
            setMovies(loadedMovies)
        } catch (e) {
            setIsError(e.message)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler])

    async function addMovieHandler(movie) {
        try {
            const response = await fetch('https://react-education-f6d0c-default-rtdb.firebaseio.com/movies.json', {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok || response.status !== 200) throw new Error(response.statusText)
            const data = await response.json()
            console.log(data)

        } catch (e) {

        }
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
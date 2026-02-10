import { FC, useEffect, useState } from "react"
import CardRow from "../../components/MovieSlide/MovieSlider"
import moviesJson from "../../assets/movies.json"
import { MovieItem } from "../HomePage";
import { WatchedMovies } from "../../local-storage/localStorage.types";

const WatchListPage:FC=()=>{
    const [movies, setMovies] = useState<MovieItem[]>([]); 

    useEffect(() => {
        const mappedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

        if (mappedMovies.length === 0) {
        setMovies(moviesJson);
        } else {
        const moviesSaved = moviesJson.map(el => {
            const updated = mappedMovies.find((m: WatchedMovies) => m.title === el.title);
            return updated ? { ...el, status: updated.status } : el;
        });

        setMovies(moviesSaved);
        }
    }, []); 

    return <>
        <CardRow title="Start Watching" movies={movies.filter(el=>el.status==="Start Watching")}/>
        <CardRow title="In progress" movies={movies.filter(el=>el.status==="In Progress")}/>
        <CardRow title="Watched" movies={movies.filter(el=>el.status==="Watched")}/>
    </>
}

export default WatchListPage
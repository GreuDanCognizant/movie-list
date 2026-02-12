import { FC, useEffect, useState } from "react"
import CardRow from "../../components/MovieSlide/MovieSlider"
import moviesJson from "../../assets/movies.json"
import { MovieItem } from "../HomePage";
import { WatchedMovies } from "../../local-storage/localStorage.types";
import moviesStatusCheck from "../../utils/moviesStatusCheck";
import NothingToShow from "../../components/NothingToShow/NothingToShow";

const WatchListPage:FC=()=>{
    const [movies, setMovies] = useState<MovieItem[]>([]); 

    useEffect(() => {
        const mappedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

        if (mappedMovies.length === 0) {
            setMovies(moviesJson);
        } 
        else {
            const moviesSaved = moviesJson.map(el => {
                const updated = mappedMovies.find((m: WatchedMovies) => m.title === el.title);

                return updated ? { ...el, status: updated.status } : el;
            });

            setMovies(moviesSaved);
        }
    }, []); 

    return <>
        {moviesStatusCheck(movies,"Start Watching")>0 && <CardRow title="Start Watching" movies={movies.filter(el=>el.status==="Start Watching")}/>}

        {moviesStatusCheck(movies,"In Progress")>0 && <CardRow title="In Progress" movies={movies.filter(el=>el.status==="In Progress")}/>}

        {moviesStatusCheck(movies,"Watched")>0 && <CardRow title="Watched" movies={movies.filter(el=>el.status==="Watched")}/>}
            
        {moviesStatusCheck(movies,"Not started")===movies.length && <NothingToShow />}
    </>
}

export default WatchListPage
import { FC } from "react";
import { MovieCard } from "../../components/MovieCard";
import movies from "../../assets/movies.json"
import NothingToShow from "../../components/NothingToShow/NothingToShow";
import { useParams } from "react-router-dom";

const MovieDetailsPage:FC=()=>{
    const { movieId } = useParams();
    const movie=movies.find(el=>el.id===Number(movieId))
    return((movie)?
    <MovieCard movie={movie}/>:
    <NothingToShow/>)
}

export default MovieDetailsPage
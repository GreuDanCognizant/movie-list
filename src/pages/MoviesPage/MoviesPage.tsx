import { FC } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../../components/MovieCard";
import movies from "../../assets/movies.json"
import NothingToShow from "../../components/NothingToShow/NothingToShow";
import filterMoviesList from "../../utils/filterMoviesList";

export interface Filters { 
  title: string; 
  sortAlphabetic: string; 
  genre: string; 
  rating: string; 
  status: string;
  year?:string;
}

const MoviesPage:FC=() => {
    const [params] = useSearchParams();

    const filters: Filters = { 
        title: params.get("title") || "",
        sortAlphabetic: params.get("sort") || "",
        genre: params.get("genre") || "",
        rating: params.get("rating") || "",
        status: params.get("status") || "",
        year: params.get("year") || undefined 
    };

    const moviesFiltered=filterMoviesList(movies,filters)

    return((moviesFiltered.length>0 && moviesFiltered)?
            <>{
                moviesFiltered.map(movie=><MovieCard key={movie.id} movie={movie}/>)
            }</>:
            <NothingToShow/>)
}

export default MoviesPage
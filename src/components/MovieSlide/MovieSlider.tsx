import { FC} from "react";
import { MovieItem } from "../../pages/HomePage";
import MovieCard from "../MovieCard/MovieCard";

const CardRow:FC<{title:string,movies:MovieItem[]}>=({title,movies}) =>{
  return (
    <div className="w-full mb-8 h-auto bg-blue-300 rounded-lg"> 
        {title && ( 
            <h2 className="text-xl font-semibold text-black mb-3 px-2"> {title} </h2> )} 

            <div className="flex gap-4 overflow-x-auto scroll-smooth px-2 pb-2 snap-x snap-mandatory"> 
                {movies.map((movie) => ( <MovieCard key={movie.id} movie={movie}/>
            ))} 
        </div>
    </div> );
}

export default CardRow

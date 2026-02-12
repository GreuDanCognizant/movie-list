import { FC, useState } from "react";
import { MovieItem } from "../../pages/HomePage/HomePage.types";
import Icon from "../IconsManager/IconManager";
import MovieInfoModal from "../MovieCardModal/MovieCardModal";
import StatusMovieButtons from "../StatusOptionsButtons/StatusMovieButtons";

interface MovieInfo{
    movie:MovieItem,
    updateStatus?:(a:number,b:string)=>void

}

export const MovieCard:FC<MovieInfo>=({movie,updateStatus})=>{
    const [open, setOpen] = useState(false)
    
    return(
    <div key={movie.id} className="bg-gray-700 shadow-lg rounded-xl p-4 flex flex-col items-center" > 
        <img src={`/assets/images/${movie.id}.jpg`} alt={movie.title} className="h-64" />

        <h3 className="text-xl font-semibold">{movie.title}</h3> 

        <p className="text-red-500"><strong>Genre:</strong> {movie.genre}</p> 

        <p className="text-yellow-500"><strong>Rating:</strong>{movie.rating}</p> 

        <div className="mt-3 w-full text-center  py-2 rounded-md justify-between gap-10 flex flex-row p-4"> 
            <p className="font-medium flex items-center gap-2 text-sm text-green-400"> Status: {movie.status || "Not started"} </p> 

            <p className="font-medium flex items-center gap-2 text-sm text-pink-500"> More Info <Icon value="MoreDetails" className="text-yellow-500" onClick={() => setOpen(true)}/> </p>
        </div> 

        {updateStatus && <StatusMovieButtons movieId={movie.id} updateStatus={updateStatus} />}

        <MovieInfoModal movie={movie} open={open} onClose={()=>setOpen(false)}/>
    </div>)
}

export default MovieCard;
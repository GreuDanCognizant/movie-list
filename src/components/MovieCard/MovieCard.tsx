import { FC } from "react";
import { MovieItem } from "../../pages/HomePage/HomePage.types";

interface MovieInfo{
    movie:MovieItem,
    updateStatus?:(a:number,b:string)=>void

}

export const MovieCard:FC<MovieInfo>=({movie,updateStatus})=>{
return(<div key={movie.id} className="bg-gray-700 shadow-lg rounded-xl p-4 flex flex-col items-center" > 
        <img src={`/assets/images/${movie.id}.jpg`} alt={movie.title} className="h-64" />
        <h3 className="text-xl font-semibold">{movie.title}</h3> 
        <p className="text-gray-600">Genre: {movie.genre}</p> 
        <p className="text-gray-600">Rating: {movie.rating}</p> 

        <div className="mt-3 w-full text-center bg-gray-100 py-2 rounded-md"> 
            <span className="font-medium"> Status: {movie.status || "Not started"} </span> 
        </div> 

        {updateStatus && <div className="flex flex-col gap-2 w-full mt-4"> 
            <button onClick={() => updateStatus(movie.id, "Watched")} className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md" > Watched </button> 
            <button onClick={() => updateStatus(movie.id, "In Progress")} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md" > In Progress </button> 
            <button onClick={() => updateStatus(movie.id, "Start Watching")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md" > Start Watching </button> 
      </div> }
    </div>)
}

export default MovieCard;
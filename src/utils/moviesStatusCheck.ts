import { MovieItem } from "../pages/HomePage";

const moviesStatusCheck=(movies:MovieItem[],status:string)=>{
    return movies.filter(movie=>movie.status===status).length
}

export default moviesStatusCheck
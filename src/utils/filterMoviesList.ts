import { MovieItem } from "../pages/HomePage";
import { Filters } from "../pages/MoviesPage/MoviesPage";

const filterMoviesList = (movies: MovieItem[], filters: Filters) => {
  return movies
    .filter(movie => {
      if (filters.title && !movie.title.toLowerCase().includes(filters.title.toLowerCase())) {
        return false;
      }

      if (filters.genre && filters.genre !== "all" && movie.genre !== filters.genre) {
        return false;
      }

      if (filters.rating && filters.rating !== "all" && movie.rating !== filters.rating) {
        return false;
      }

      if (filters.status && filters.status !== "all" && movie.status !== filters.status) {
        return false;
      }

      if (filters.year && filters.year !== "all" && movie.year?.toString() !== filters.year) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.sortAlphabetic === "asc") {
        return a.title.localeCompare(b.title);
      }

      if (filters.sortAlphabetic === "desc") {
        return b.title.localeCompare(a.title);
      }
      
      return 0;
    });
};

export default filterMoviesList
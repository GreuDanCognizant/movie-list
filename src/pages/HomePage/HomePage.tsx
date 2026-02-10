// Home.tsx
import  { FC, useEffect, useMemo, useState } from "react";
import moviesJson from "../../assets/movies.json"
import { MovieItem } from "./HomePage.types";
import MovieCard from "../../components/MovieCard/MovieCard";
import InputSearch from "../../components/InputSearch/InputSearch";
import Button from "../../components/Button/Button";
import { CATEGORI_GENRE } from "../../constants/genre-enum";
import { blueButton } from "../../constants/class-name-style";
import { WatchedMovies } from "../../local-storage/localStorage.types";
import NothingToShow from "../../components/NothingToShow/NothingToShow";

const HomePage: FC = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]); 
  const [value,setValue] =useState('');
  const [filter,setFilter]=useState({arg:'',filterArg:''});
  const [loading, setLoading] = useState<boolean>(true);

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

    setTimeout(() => { 
      setLoading(false); 
    }, 1500);
  }, []); 

  useEffect(() => {
    if (movies.length === 0) return;

    const moviesStatus = movies.map(item => ({
      title: item.title,
      status: item.status
    }));

    localStorage.setItem("movies", JSON.stringify(moviesStatus));
  }, [movies]);

  const updateStatus = (id: number, newStatus: string) => { 
    setMovies((prev) => prev.map((m) => m.id === id ? { ...m, status: newStatus } : m ) ); 
  };

  const filteredMovies = useMemo(() => {
    let result = movies;

    if (value.trim() !== "") {
      result = result.filter(el =>
        el.title.toLowerCase().startsWith(value.toLowerCase())
      );
    }
    
    switch (filter.filterArg) {
      case "genre":
        return result.filter(el => el.genre === filter.arg);

      case "rating-dsc":
        return [...result].sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );

      case "rating-asc":
        return [...result].sort(
          (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
        );

      case "A->Z":
        return [...result].sort((a, b) =>
          a.title.localeCompare(b.title)
        );

      case "Z->A":
        return [...result].sort((a, b) =>
          b.title.localeCompare(a.title)
        );

      case "":
        return result;

      default:
        return result;
    }
  }, [filter, movies, value]);


  return ( 
    <>
      <InputSearch placeholder="Search movies ..." value={value} setValue={setValue} />
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex w-auto h-auto md:flex-wrap gap-4">
        <p className="py-4 font-bold text-black">Filter by: </p>
        <p className="py-4 font-bold text-black">Genre:  </p>

        <Button value={CATEGORI_GENRE["0"]} className={blueButton}
        onClick={(e) => setFilter(prev => ({ ...prev,arg:e.target.value, filterArg: "genre" }))}/>

        <Button value={CATEGORI_GENRE["1"]} className={blueButton} onClick={(e) => setFilter(prev => ({ ...prev,arg:e.target.value, filterArg: "genre" }))}/>

        <Button value={CATEGORI_GENRE["2"]} className={blueButton} onClick={(e) => setFilter(prev => ({ ...prev,arg:e.target.value, filterArg: "genre" }))}/>

        <p className="py-4 font-bold text-black">Alphabetic: </p>

        <Button value={"A->Z"} className={blueButton}  onClick={(e) => setFilter(prev => ({ ...prev,filterArg: (e.target.value) }))}/>
        <p className="py-4 font-bold text-black">Rating: </p>

        <Button value={"Rating up"} className={blueButton}  onClick={(e) => setFilter(prev => ({ ...prev,filterArg: (e.target.value==="Rating up"?"rating-asc":"rating-dsc") }))}/>
        <Button value={"Clear filters"} className={blueButton}  onClick={(e) => setFilter(prev => ({ ...prev,arg:"",filterArg: "" }))}/>
          
        </div>
      { loading ?<p className="py-10 font-bold text-black">Loading Data stay close....</p>:
        <>
          <p>Showing {filteredMovies.length} results</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 items-start">
            {filteredMovies.length > 0 ? filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} updateStatus={updateStatus} />)) : <NothingToShow />}
          </div>
        </>}
  </> );
};

export default HomePage;


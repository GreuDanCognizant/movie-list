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
import Icon from "../../components/IconsManager/IconManager";

const HomePage: FC = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]); 
  const [inputValue,setInputValue] =useState('');
  const [filter,setFilter]=useState({arg:'',filterArg:''});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mappedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

    if (mappedMovies.length === 0) {
      setMovies(moviesJson);

    } else {
      const moviesSaved = moviesJson.map(el => {
        const updated = mappedMovies.find((movie: WatchedMovies) => movie.title === el.title);

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
    setMovies((prev) => prev.map((movie) => movie.id === id ? { ...movie, status: newStatus } : movie ) ); 
  };

  const filteredMovies = useMemo(() => {
    let result = movies;

    if (inputValue.trim() !== "") {
      result = result.filter(el =>
        el.title.toLowerCase().startsWith(inputValue.toLowerCase())
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
  }, [filter, movies, inputValue]);


  return ( 
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap gap-4 items-center">
        <InputSearch placeholder="Search movies ..." value={inputValue} setValue={setInputValue} />

        <Icon value={"FilterOpen"} className="pt-1 text-2xl"/>

        <p className="py-4 font-bold text-black">Genre:  </p>

        {CATEGORI_GENRE.map((genre, index) => (
          
          <Button
            key={index}
            value={genre}
            className={blueButton}
            onClick={(e) =>
              setFilter(prev => ({
                ...prev,
                arg: e.target.value,
                filterArg: "genre"
              }))
            }
          />
        ))}


        <div className="flex items-center gap-2">
          <p className="font-bold text-black">Alphabetic:</p>

          <Button
            value="A->Z"
            key="atoz"
            className={blueButton}
            icon="alphabetic"
            onClick={(e) =>
              setFilter((prev) => ({
                ...prev,
                filterArg: e.target.value,
              }))
            }
          />
        </div>

        <div className="flex items-center gap-2">
          <p className="font-bold text-black">Rating:</p>

          <Button
            value="Rating up"
            key="rating"
            className={blueButton}
            icon={"ZeroToTen"}
            onClick={(e) =>
              setFilter((prev) => ({
                ...prev,
                filterArg:
                  e.target.value === "Rating up" ? "rating-asc" : "rating-dsc",
              }))
            }
          />
        </div>

        <Button
          value="Clear filters"
          className={blueButton}
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              arg: "",
              filterArg: "",
            }))
          }
        />
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


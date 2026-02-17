import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const WatchListPage = lazy(() => import("../pages/WatchListPage/WatchListPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: < MainLayout/>, 
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "watched",
        element: <WatchListPage />,
      },
      {
        path: "movies",
        element: (
          <MoviesPage/>
        )
      },
      { path: "movie/:movieId", element: <MovieDetailsPage />, },
    ],
  },
]);

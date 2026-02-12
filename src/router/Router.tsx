import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import WatchListPage from "../pages/WatchListPage/WatchListPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/watched" element={<WatchListPage />} />
    </Routes>
  );
};

export default AppRouter;

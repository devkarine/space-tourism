import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const SpaceTourismRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Destination } from "../Pages/Destination";

export const SpaceTourismRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default PublicRoutes;

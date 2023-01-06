import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import Matricula from "../pages/Matricula.jsx";
import NotFound from "../pages/NotFound.jsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/**
         * Aqui se declaran las rutas de las paginas a mostrar en la UI.
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

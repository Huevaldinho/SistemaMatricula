import { useContext, useState, useEffect } from "react";
import ContextoOpciones from "../../../contexts/ContextoOpciones";
import TablaCursos from "./TablaCursos";

function BodyMatricula() {
  const {
    matriculaSeleccionada,
    citaMatricula,
    citaActiva,
    getInicioMatricula,
    getFinMatricula,
  } = useContext(ContextoOpciones);
  const handleClick = () => {
    console.log("Matricula seleccionada: ", matriculaSeleccionada);
    console.log("Inicio matricula: ", getInicioMatricula());
    console.log("Fin matricula:", getFinMatricula());
    console.log("Estoy en matricula:", citaMatricula);
  };
  
  return (
    <div className="container flex flex-col  min-h-screen  max-h-sm max-w-sm mx-auto items-center justify-center">
      <h1>Sistema de Matrícula</h1>
      
      <TablaCursos />
      <button className="bg-black text-white font-bold" onClick={handleClick}>
        CREAR TABLA DE CURSOS.
      </button>
    </div>
  );
}

export default BodyMatricula;

import { useContext, useState, useEffect } from "react";
import ContextoOpciones from "../../../contexts/ContextoOpciones";
import TablaCursos from "./tablaCursos/TablaCursos";

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
    <div id="bodyMatricula" className="container min-h-screen max-w-6xl text-center">
      <>
        <span id="textoBodyMatricula" className="text-black font-bold text-4xl">
          Sistema de Matrícula
        </span>
      </>

      <TablaCursos />
    </div>
  );
}

export default BodyMatricula;

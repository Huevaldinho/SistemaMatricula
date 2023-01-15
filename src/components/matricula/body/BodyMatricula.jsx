import { useContext } from "react";
import ContextoOpciones from "../../../contexts/ContextoOpciones";

function BodyMatricula() {
  const { matriculaSeleccionada } = useContext(ContextoOpciones);
  console.log(matriculaSeleccionada);
  const handleClick = () => {
    console.log("Matricula seleccionada: ", matriculaSeleccionada);
  };
  return (
    <div className="container flex flex-col  min-h-screen  max-h-sm max-w-sm mx-auto items-center justify-center">
      <h1>Sistema de Matrícula</h1>
      <button className="bg-black text-white font-bold" onClick={handleClick}>
        CREAR TABLA DE CURSOS.
      </button>
    </div>
  );
}

export default BodyMatricula;

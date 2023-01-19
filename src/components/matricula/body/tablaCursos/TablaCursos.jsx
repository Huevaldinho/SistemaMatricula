import { useContext } from "react";
import ContextoOpciones from "../../../../contexts/ContextoOpciones";
import HeadTablaCursos from "./HeadTablaCursos";
import FilasTablaCursos from "./FilasTablaCursos";

function TablaCursos() {
  //Toma la matricula del contexto para ver los cursos.
  const { matriculaSeleccionada } = useContext(ContextoOpciones);
  //Si no hay cursos entonces renderiza una span en vez de table.
  if (matriculaSeleccionada?.cursos === undefined) {
    return (
      <span className="font-semibold text-lg">
        No hay cursos para matricular.
      </span>
    );
  }
  //Si hay cursos crea una tabla.
  return (
    <div id="tablaCursos" className="w-fit text-center">
      <HeadTablaCursos />
      <FilasTablaCursos />
    </div>
  );
}

export default TablaCursos;

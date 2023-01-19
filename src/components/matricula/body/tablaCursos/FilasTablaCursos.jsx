import { useContext } from "react";
import ContextoOpciones from "../../../../contexts/ContextoOpciones";

function FilasTablaCursos() {
  const { matriculaSeleccionada } = useContext(ContextoOpciones);
  if (matriculaSeleccionada?.cursos === undefined) {
    return (
      <div>
        <p className="font-bold text-white text-xl">No se ha podido ejecutar</p>
      </div>
    );
  }
  const handleDespliegue = (e) => {
    e.preventDefault();
    console.log("Desplegar grupos:", matriculaSeleccionada?.cursos);
  };
  const estilo = "text-xs px-6 py-4";
  //En cada fila (curso) se debe crear una nueva tabla para mostrar los grupos.
  return matriculaSeleccionada?.cursos.map((curso) => (
    <div
      className="columns-5 text-center  w-fit bg-white text-black border-b hover:bg-slate-200 hover:text-black"
      onClick={(e) => {
        handleDespliegue(e);
      }}
    >
      <div className={estilo}>{curso.nombre}</div>
      <div className={estilo}>{curso.codigo}</div>
      <div className={estilo}>{curso.creditos}</div>
      <div className={estilo}>{curso.grupo}</div>
      <div></div>
    </div>
  ));
}

export default FilasTablaCursos;

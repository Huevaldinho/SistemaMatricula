import { useContext } from "react";
import ContextoOpciones from "../../../../contexts/ContextoOpciones";

function FilasTablaCursos() {
  const { matriculaSeleccionada } = useContext(ContextoOpciones);
  if (matriculaSeleccionada?.cursos === undefined) {
    return (
      <tr>
        <td>No se ha podido ejecutar</td>
      </tr>
    );
  }
  const handleDespliegue = (e) => {
    e.preventDefault();
    console.log("Desplegar grupos:",matriculaSeleccionada?.cursos);
  };
  //En cada fila (curso) se debe crear una nueva tabla para mostrar los grupos.
  return matriculaSeleccionada?.cursos.map((curso, index) => (
    <tr
      key={index}
      className="w-fit bg-white text-black border-b hover:bg-slate-200 hover:text-black"
      onClick={(e)=>{handleDespliegue(e)}}
    >
      <td className="px-6 py-4">{curso.nombre}</td>
      <td className="px-6 py-4">{curso.codigo}</td>
      <td className="px-6 py-4">{curso.creditos}</td>
      <td className="px-6 py-4">{curso.grupo}</td>
    </tr>
  ));
}

export default FilasTablaCursos;

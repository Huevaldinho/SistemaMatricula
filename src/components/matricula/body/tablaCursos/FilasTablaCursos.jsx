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
  //En cada fila (curso) se debe crear una nueva tabla para mostrar los grupos.
  return matriculaSeleccionada?.cursos.map((curso, index) => (
    <tr
      key={index}
      className="bg-white text-black border-b hover:bg-slate-600 hover:text-white"
    >
      <td className="px-6 py-4">{curso.nombre}</td>
      <td className="px-6 py-4">{curso.codigo}</td>
      <td className="px-6 py-4">{curso.creditos}</td>
      <td className="px-6 py-4">{curso.grupo}</td>
    </tr>
  ));
}

export default FilasTablaCursos;

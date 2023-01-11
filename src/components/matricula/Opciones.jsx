import { useContext } from "react";
import { ContextoOpciones } from "../../contexts/ContextoOpciones";
import ModalMatriculaDiponible from "./ModalMatriculaDisponible";

export function Opciones() {
  const { modalMatricula,handleModalMatricula } = useContext(ContextoOpciones);

  return (
    <div id="opciones" className="h-auto">
      <select
        name="opciones"
        className="p-1 text-gray-600 text-sm bg-white border-2 border-slate-500 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option
          onClick={() => {
            handleModalMatricula()
          }}
        >
          Matrículas Disponibles
        </option>
        <option>Mi Historial Académico</option>
        <option>Requisitos Pendientes</option>
        <option>Código de PIN</option>
        <option>Ayuda</option>
      </select>
      {modalMatricula ? <ModalMatriculaDiponible /> : null}
    </div>
  );
}

export default Opciones;

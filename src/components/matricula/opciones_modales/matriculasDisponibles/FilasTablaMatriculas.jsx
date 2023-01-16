import { IoInformationCircle } from "react-icons/io5";
import { useContext } from "react";
import ContextoOpciones from "../../../../contexts/ContextoOpciones";

function FilasTablaMatriculas({ matriculas }) {
  const { handleMatricula, handleModalMatricula } =
    useContext(ContextoOpciones);

  const handleClick = (e, fila) => {
    e.preventDefault();
    //Cierra el modal de matriculas disponibles.
    handleModalMatricula();

    /**
     * Llama a la funcion del contexto opciones encargada
     * de guardar la matricula seleccionada
     * porque en el body de la matricula se tienen que mostrar
     * los cursos disponibles.
     *
     */
    handleMatricula(fila);
  };
  return matriculas.map((fila, index) => (
    <tr
      key={index}
      className="bg-white text-black border-b hover:bg-slate-600 hover:text-white "
    >
      <td className="px-6 py-4">{fila.modalidad}</td>
      <td className="px-6 py-4">{fila.periodo}</td>
      <td className="px-6 py-4">{fila.tipo}</td>
      <td className="px-6 py-4">{fila.inicio}</td>
      <td className="px-6 py-4">{fila.fin}</td>
      <td className="px-6 py-4" onClick={(e) => handleClick(e, fila)}>
        <IoInformationCircle
          className="hover:cursor-pointer"
          size={30}
          color="#3779dd"
        />
      </td>
    </tr>
  ));
}

export default FilasTablaMatriculas;

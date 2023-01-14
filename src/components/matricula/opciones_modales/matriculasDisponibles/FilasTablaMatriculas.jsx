import { IoInformationCircle } from "react-icons/io5";

function FilasTablaMatriculas({ matriculas }) {
  const handleClick=(e)=>{
    e.preventDefault()
    console.log('Mostrar matricula')
  }
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
      <td className="px-6 py-4" onClick={handleClick}>
        <IoInformationCircle className="hover:cursor-pointer" size={30} color="#3779dd" />
      </td>
    </tr>
  ));
}

export default FilasTablaMatriculas;

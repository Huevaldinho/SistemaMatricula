function FilasTablaMatriculas({ matriculas }) {
  return matriculas.map((fila, index) => (
    <tr
      key={index}
      className="bg-white text-black border-b hover:bg-slate-600 hover:text-white "
    >
      <td className="px-6 py-4">{fila.modalidad}</td>
      <td className="px-6 py-4">{fila.periodo}</td>
      <td className="px-6 py-4">{fila.tipo}</td>
      <td className="px-6 py-4">{fila.principio}</td>
      <td className="px-6 py-4">{fila.fin}</td>
    </tr>
  ));
}

export default FilasTablaMatriculas;

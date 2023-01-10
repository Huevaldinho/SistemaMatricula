function FilasContactos({ fila }) {
  const estiloDato = "px-3 py-1 font-extralight ";
  const estiloFila =
    " bg-white border-b text-black  hover:text-white hover:bg-gray-600 h-1";

  return fila.contactos.map((contacto,index) => (
    <tr key={index} id="filaTabla" className={estiloFila}>
      <td className={estiloDato}>{contacto.puesto}</td>
      <td className={estiloDato}>{contacto.encargado}</td>
      <td className={estiloDato}>{contacto.correo}</td>
      <td className={estiloDato}>{contacto.telefono}</td>
    </tr>
  ));
}

export default FilasContactos;

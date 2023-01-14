import React from "react";

function HeadTableMatriculas() {
  return (
    <thead className="text-xs text-black uppercase bg-white  border border-b-gray-700">
      <tr>
        <th scope="col" className="px-6 py-3 text-center">
          Modalidad
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Periodo
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Tipo
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Inicio
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Fin
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Seleccionar
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}

export default HeadTableMatriculas;

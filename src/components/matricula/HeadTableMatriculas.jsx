import React from "react";

function HeadTableMatriculas() {
  return (
    <thead className="text-xs text-black uppercase bg-white  border border-b-gray-700">
      <tr>
        <th scope="col" className="px-6 py-3">
          Modalidad
        </th>
        <th scope="col" className="px-6 py-3">
          Periodo
        </th>
        <th scope="col" className="px-6 py-3">
          Tipo
        </th>
        <th scope="col" className="px-6 py-3">
          Inicio
        </th>
        <th scope="col" className="px-6 py-3">
          Fin
        </th>
        <th scope="col" className="px-6 py-3">
          Seleccionar
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}

export default HeadTableMatriculas;

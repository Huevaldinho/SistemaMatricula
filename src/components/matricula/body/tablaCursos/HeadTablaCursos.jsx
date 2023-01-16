import React from "react";
function HeadTablaCursos() {
  return (
    <thead className="text-xs text-black border-b-4 border-blue-800 rounded-md uppercase ">
      <tr>
        <th scope="col" className="px-3 py-1">
          Código
        </th>
        <th scope="col" className="px-3 py-1">
          Materia
        </th>
        <th scope="col" className="px-3 py-1">
          Créditos
        </th>
        <th scope="col" className="px-3 py-1">
          Grupo
        </th>
        <th scope="col" className="px-3 py-1">
          Curso Matriculado
        </th>
      </tr>
    </thead>
  );
}

export default HeadTablaCursos;

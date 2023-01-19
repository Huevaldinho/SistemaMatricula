import React from "react";
function HeadTablaCursos() {
  const estilo = "px-3 py-1 text-xs";
  return (
    <div id='headerTablaCursos' className="columns-5 text-black border-b-4 border-blue-800 rounded-md uppercase ">
      <>
        <div className={estilo}>Código</div>
        <div className={estilo}>Materia</div>
        <div className={estilo}>Créditos</div>
        <div className={estilo}>Grupo</div>
        <div className={estilo}>Curso Matriculado</div>
      </>
    </div>
  );
}

export default HeadTablaCursos;

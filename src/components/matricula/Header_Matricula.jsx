import FechaHora from "../componentesCompartidos/FechaHora";
import Botones_HeaderMatricula from "./Botones_HeaderMatricula";

function Header_Matricula() {
  return (
    //Header Matricula
    <div className="text-white bg-[#005085] grid grid-cols-3 gap-3 p-5">
      {/*Info estudiante*/}
      <div>Info Estudiante</div>
      {/*Fecha y hora */}
      <FechaHora />
      <Botones_HeaderMatricula />
    </div>
  );
}

export default Header_Matricula;

import FechaHora from "../componentesCompartidos/FechaHora";
import Botones_HeaderMatricula from "./Botones_HeaderMatricula";
import InfoEstudiante from "./InfoEstudiante";

function Header_Matricula() {
  return (
    //Header Matricula
    <div
      id="headerMatricula"
      className=" bg-[#005085] grid grid-cols-3 gap-3 pt-3 pl-5 pb-1.5"
    >
      {/*Info estudiante*/}
      <InfoEstudiante />
      {/*Fecha y hora */}
      <FechaHora />
      <Botones_HeaderMatricula />
    </div>
  );
}

export default Header_Matricula;

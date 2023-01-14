import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Botones_HeaderMatricula() {
  const navigate = useNavigate();

  const handleClickMiHorario = (e) => {
    e.preventDefault();
    console.log("Mi Horario");
  };
  const handleClickMiInforme = (e) => {
    e.preventDefault();
    console.log("Mi Informe");
  };
  const handleSalir = (e) => {
    e.preventDefault();
    console.log("Salir");
    navigate("/");
  };
  return (
    //Botones matricula
    <div id="botonesHeaderMatricula" className="flex flex-row-reverse pt-3 pb-3 pr-3">
      {/*Salir */}
      <div className="hover:bg-blue-900 hover:rounded-xl h-16 w-24 text-center p-1">
        <button className=" text-white " onClick={handleSalir}>
          <AiOutlineArrowRight size={30} />
          Salir
        </button>
      </div>
      {/*Mi Informe */}
      <div className="hover:bg-blue-900 hover:rounded-xl h-16 w-24 text-center p-1">
        <button className=" text-white" onClick={handleClickMiInforme}>
          <HiOutlineNewspaper size={30} />
          Mi Informe
        </button>
      </div>
      {/*Mi Horario */}
      <div className="hover:bg-blue-900 hover:rounded-xl h-16 w-24 text-center p-1">
        <button className="  text-white " onClick={handleClickMiHorario}>
          <FaCalendarAlt size={30} />
          Mi Horario
        </button>
      </div>
    </div>
  );
}

export default Botones_HeaderMatricula;

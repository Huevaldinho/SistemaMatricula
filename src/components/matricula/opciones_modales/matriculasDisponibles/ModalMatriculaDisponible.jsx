import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContextoOpciones } from "../../../../contexts/ContextoOpciones";
import {
  matriculasDisponibles,
  pedirHistorialAcademico,
} from "../../../../data/datos";
import TablaMatriculas from "./TablaMatriculas";

function ModalMatriculaDisponible() {
  const { handleModalMatricula } = useContext(ContextoOpciones);
  let matriculas = [];

  function handleMatriculas() {
    //Pedir a api
    matriculas = matriculasDisponibles(); //array con matriculas

    return matriculas;
  }
  //Funcion para manejar el pedido del historial academico
  const handleHistorialAcademico = (e) => {
    e.preventDefault();
    const historialAcademico = pedirHistorialAcademico();
    console.log("Ver historial academico");
  };
  const cerrarMatriculasDisponibles = (e) => {
    e.preventDefault();
    handleModalMatricula();
  };

  return (
    <>
      <div
        id="contactoModal"
        className="flex overflow-hidden fixed justify-center items-center inset-0 z-50 "
      >
        <div className="relative h-auto w-auto">
          {/*content*/}
          <div
            id="contentModal"
            className="border-0 rounded-lg relative flex flex-col w-full bg-white h-auto"
          >
            {/*header*/}
            <div
              id="headerModal"
              className="flex items-start justify-between p-3 border-b border-solid rounded-t bg-blue-800"
            >
              <h4
                id="textoModal"
                className="text-3xl font-semibold  text-white"
              >
                Matrículas Disponibles
              </h4>
              <button>
                <AiOutlineClose
                  size={30}
                  color="white"
                  className="m-1.5"
                  onClick={cerrarMatriculasDisponibles}
                />
              </button>
            </div>

            {/*body*/}
            <div id="bodyModal" className="relative p-6 flex-auto">
              <TablaMatriculas matriculas={handleMatriculas()} />
            </div>
            {/*footer*/}
            {/*Close button */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-blue-500 text-white hover:text-blue-500 hover:bg-white border-2 border-blue-500 rounded background-transparent font-light uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleHistorialAcademico}
              >
                Ver Historial Académico
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
} 

export default ModalMatriculaDisponible;

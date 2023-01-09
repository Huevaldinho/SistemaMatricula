import { useContext } from "react";
import { ContextoEstudiante } from "../../contexts/ContextoEstudiante";
import { Opciones } from "./Opciones";
function InfoEstudiante() {
  const { estudiante } = useContext(ContextoEstudiante); //To list all tasks on the context

  return (
    <div id="infoEstudiante" className="flex mb-1">
      <div id="divFoto" className=" bg-gray-400 h-20 w-20">
        <img
          id="foto"
          src="https://robohash.org/human"
          alt="Foto estudiante"
          className="h-auto w-auto"
        />
      </div>

      <div
        id="datosEstudiante"
        className="grid grid-rows-3 w-auto  h-auto pl-3"
      >
        <h1 className="text-white font-bold">
          {estudiante.nombre} {estudiante.apellidos}
        </h1>
        <h1 className="text-white font-light">{estudiante.carnet}</h1>
        <Opciones />
      </div>
    </div>
  );
}

export default InfoEstudiante;

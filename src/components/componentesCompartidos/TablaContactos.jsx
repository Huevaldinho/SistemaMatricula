import FilasContactos from "./FilasContactos";
import { useState } from "react";

function TablaContactos({ fila }) {
  //Estado para mostrar el cuerpo de la tabla.

  const [estadoTabla, setEstadoTabla] = useState(false);

  return (
    <>
      {/*Boton para mostrar el cuerpo de la tabla. */}
      <button
        data-dropdown-toggle="tabla"
        className="text-black text-center inline-flex items-center "
        type="button"
        onClick={(e) => setEstadoTabla(!estadoTabla)}
      >
        {fila.sede}
      </button>

      <table
        id="tabla"
        className="text-sm text-left text-gray-500 dark:text-gray-400"
      >
        {/*Si no se ha seleccionado la sede (boton) se esconde el cuerpo de la tabla. */}
        <tbody className={!estadoTabla ? "hidden" : null}>
          <FilasContactos fila={fila} />
        </tbody>
      </table>
    </>
  );
}

export default TablaContactos;

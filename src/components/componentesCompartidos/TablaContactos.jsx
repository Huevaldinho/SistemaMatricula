import FilasContactos from "./FilasContactos";
import { useState } from "react";

function TablaContactos({ fila }) {
    const [estadoTabla,setEstadoTabla] = useState(false);
  return (
    <>
      <button
        data-dropdown-toggle="tabla"
        className="text-black text-center inline-flex items-center "
        type="button"
        onClick={(e)=>setEstadoTabla(!estadoTabla)}
      >
        {fila.sede}
      </button>

      <table
        id="tabla"
        className="text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <tbody className={!estadoTabla?'hidden':null}>
          <FilasContactos fila={fila} />
        </tbody>
      </table>
    </>
  );
}

export default TablaContactos;
/*
 <button
        data-dropdown-toggle="tabla"
        classNameName="text-black text-center inline-flex items-center "
        type="button"
      >
        {fila.sede}
      </button>

      <table
        id="tabla"
        classNameName=" text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <FilasContactos fila={fila} />
      </table>
*/

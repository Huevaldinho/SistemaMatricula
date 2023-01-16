import { useState, useEffect } from "react";
function FechaHora() {
  let fecha = new Date();

  //Estado para cambiar la hora en la UI
  const [hora, sethora] = useState(new Date().toLocaleTimeString("es-CR"));
  //Efecto para actualizar el estado de la hora cada segundo
  useEffect(() => {
    setInterval(() => sethora(new Date().toLocaleTimeString("es-CR")), 1000);
  }, []);

  return (
    <div className="flex items-center justify-center font-light" id="fechaHora">
      <h2 className="text-white  text-center">
        Hora: <span className="font-bold whitespace-pre-wrap">{hora}         </span>
        Fecha:
        <span className="font-bold "> {fecha.toLocaleDateString()}</span>
      </h2>
    </div>
  );
}

export default FechaHora;

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
    <div className="font-light" id='fechaHora'>
      <h2 className="text-white  text-center">
        Hora: <span className="font-bold">{hora} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        Fecha:
        <span className="font-bold">
          {" "}
          {fecha.getDay() + 1}/{fecha.getMonth() + 1}/{fecha.getFullYear()}
        </span>
      </h2>
    </div>
  );
}

export default FechaHora;

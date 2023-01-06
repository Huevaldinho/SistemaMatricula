import LogoTec from "../../assets/LogoTec.png";
import { useState, useEffect } from "react";
function Header_MainPage() {
  let fecha = new Date();
  //Estado para cambiar la hora en la UI
  const [hora, sethora] = useState(new Date().toLocaleTimeString("es-CR"));
  //Efecto para actualizar el estado de la hora cada segundo
  useEffect(() => {
    setInterval(() => sethora(new Date().toLocaleTimeString("es-CR")), 1000);
  }, []);

  return (
    <div className="text-white bg-[#005085] grid grid-cols-3 gap-3 p-5">
      <div>
        <img src={LogoTec} alt="Logo" />
      </div>
      <div>
        <h2 className="text-white font-bold text-center">
          Hora: {hora} Fecha: {fecha.getDay() + 1}/{fecha.getMonth() + 1}/
          {fecha.getFullYear()}
        </h2>
      </div>
    </div>
  );
}

export default Header_MainPage;

import LogoTec from "../../assets/LogoTec.png";
import { useState, useEffect } from "react";
import FechaHora from "../componentesCompartidos/header/FechaHora";
function Header_MainPage() {
  let fecha = new Date();
  //Estado para cambiar la hora en la UI
  const [hora, sethora] = useState(new Date().toLocaleTimeString("es-CR"));
  //Efecto para actualizar el estado de la hora cada segundo
  useEffect(() => {
    setInterval(() => sethora(new Date().toLocaleTimeString("es-CR")), 1000);
  }, []);

  return (
    <header
      id="header"
      className="text-white bg-[#005085] grid grid-cols-3 gap-3 p-5 h-auto"
    >
      <div>
        <img src={LogoTec} alt="Logo" />
      </div>
      <FechaHora />
    </header>
  );
}

export default Header_MainPage;

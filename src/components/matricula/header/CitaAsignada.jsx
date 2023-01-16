import { useContext, useState, useEffect } from "react";
import ContextoOpciones from "../../../contexts/ContextoOpciones";
function CitaAsignada() {
  const { citaMatricula, citaActiva, isEmptyObject, matriculaSeleccionada } =
    useContext(ContextoOpciones);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    citaActiva();
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  //Estilo y texto por defecto (cuando no se ha seleccionado matricula).
  let estilo = "bg-yellow-400 text-black font-semibold p-1.2 m-5 rounded-md";
  let texto = "No hay Cita Asignada";
  //Cuando se ha seleccionado matricula.
  !isEmptyObject(matriculaSeleccionada)
    ? citaMatricula
      ? //Cuando la matricula esta activa.
        ((texto = "Cita Activa"),
        (estilo = "bg-green-500 text-black font-semibold p-1.2 m-5 rounded-md"))
      : //Cuando la matricula no esta activa.
        ((texto = "No está en su Cita de Matrícula"),
        (estilo = "bg-red-500 text-black font-semibold p-1.2 m-5 rounded-md"))
    : null; //Si no se ha seleccionado se usa el texto y estilo por defecto.F

  return <h1 className={estilo}>{texto}</h1>;
}

export default CitaAsignada;

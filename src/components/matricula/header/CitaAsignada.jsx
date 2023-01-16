import { useContext, useState, useEffect } from "react";
import ContextoOpciones from "../../../contexts/ContextoOpciones";
function CitaAsignada() {
  //estados y metodos para modificar la cita asignada (color y texto).
  const { citaMatricula, citaActiva, isEmptyObject, matriculaSeleccionada } =
    useContext(ContextoOpciones);
  //Timer para poder actualizar cada segundo la cita asignada (color y texto).
  const [time, setTime] = useState(Date.now());
  //Efecto actualiza cada segundo un timer y manda a verificar si se esta en cita activa.
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    //Actualiza el estado de la cita asignada en el contexto.
    citaActiva();
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  //Como el componente se actualiza cada segundo
  //este codigo de texto y estilo se ejecuta cada segundo. 

  //Estilo y texto por defecto (cuando no se ha seleccionado matricula).
  let estilo = "bg-yellow-400 text-black font-semibold p-1.2 m-5 rounded-md";
  let texto = "No hay Cita Asignada";

  !isEmptyObject(matriculaSeleccionada)
    ? //Cuando se ha seleccionado matricula.
      citaMatricula
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

import { createContext, useState, useEffect } from "react";

export const ContextoOpciones = createContext();

export function ContextoOpcionesProvider(props) {
  const [modalMatricula, setMatricula] = useState(true);
  const [matriculaSeleccionada, setMatriculaSeleccionada] = useState({});
  const [citaMatricula, setCitaMatricula] = useState(false); //false cuando aun no es la hora | true cuando esta en matricula

  /**
  Funcion para verificar si un objeto esta vacio.
   * @param  obj: Objeto a averirifacar si esta vacio.
   * @returns True si esta vacio| False si no lo esta
   */
  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };
  /**
   * Funcion para determinar si se esta en hora de matricula o no.
   */
  const citaActiva = () => {
    if (isEmptyObject(matriculaSeleccionada)) {
      return;
    }
    let fechaActual =
      new Date().toJSON().slice(0, 10) +
      " " +
      matriculaSeleccionada?.horaMatricula;

    const [fecha, hora] = fechaActual.split(" "); //Separa la fecha de la hora
    const [year, month, day] = fecha.split("-"); //Separa el dia, mes y anho
    const [hours, minutes, seconds] = hora.split(":"); //Separa hora,minuto y segundo
    fechaActual = new Date(+year, month - 1, +day, +hours, +minutes, +seconds); //Parsea la fecha y hora str a date

    setCitaMatricula(
      getInicioMatricula() <= fechaActual && fechaActual <= getFinMatricula()
    );
  };
  /*
   *    Funcion para convertir la fecha y hora de string a date.
   * @returns Date: Fecha inicio de la matricula.
   */
  const getInicioMatricula = () => {
    if (isEmptyObject(matriculaSeleccionada)) {
      return;
    }
    const inicioMatricula = matriculaSeleccionada?.inicio;
    const [fecha, hora] = inicioMatricula.split(" "); //Separa la fecha de la hora
    const [day, month, year] = fecha.split("/"); //Separa el dia, mes y anho
    const [hours, minutes, seconds] = hora.split(":"); //Separa hora,minuto y segundo

    return new Date(+year, month - 1, +day, +hours, +minutes, +seconds); //Parsea la fecha y hora str a date
  };
  /*
   *    Funcion para convertir la fecha y hora de string a date.
   * @returns Date: Fecha fin de la matricula.
   */
  const getFinMatricula = () => {
    if (isEmptyObject(matriculaSeleccionada)) {
      return;
    }
    const finMatricula = matriculaSeleccionada?.fin;
    const [fecha, hora] = finMatricula.split(" "); //Separa la fecha de la hora
    const [day, month, year] = fecha.split("/"); //Separa el dia, mes y anho
    const [hours, minutes, seconds] = hora.split(":"); //Separa hora,minuto y segundo
    return new Date(+year, month - 1, +day, +hours, +minutes, +seconds); //Parsea la fecha y hora str a date
  };

  /*
   * Funcion para que el contexto guarde la matricula seleccionada.
   */
  const handleMatricula = (matricula) => {
    setMatriculaSeleccionada(matricula);
  };

  /*
   * Funcion para cambiar el estado de la matricula (modal).
   */
  const handleModalMatricula = () => {
    setMatricula(!modalMatricula);
  };

  return (
    <ContextoOpciones.Provider
      value={{
        modalMatricula,
        handleModalMatricula,
        handleMatricula,
        matriculaSeleccionada,
        citaMatricula,
        setCitaMatricula,
        getInicioMatricula,
        getFinMatricula,
        citaActiva,
        isEmptyObject
      }}
    >
      {props.children}
    </ContextoOpciones.Provider>
  );
}

export default ContextoOpciones;

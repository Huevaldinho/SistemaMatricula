import { createContext, useState, useEffect } from "react";

export const ContextoOpciones = createContext();

export function ContextoOpcionesProvider(props) {
  const [modalMatricula, setMatricula] = useState(true);
  const [matriculaSeleccionada, setMatriculaSeleccionada] = useState({});

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
      }}
    >
      {props.children}
    </ContextoOpciones.Provider>
  );
}

export default ContextoOpciones;

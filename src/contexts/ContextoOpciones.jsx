import { createContext, useState } from "react";

export const ContextoOpciones = createContext();

export function ContextoOpcionesProvider(props) {
  const [modalMatricula, setMatricula] = useState(false);

  /**
   * Funcion para cambiar el estado de la matricula (modal).
   */
  const handleModalMatricula = () => {
    setMatricula(!modalMatricula);
  };

  return (
    <ContextoOpciones.Provider value={{ modalMatricula, handleModalMatricula }}>
      {props.children}
    </ContextoOpciones.Provider>
  );
}

export default ContextoOpciones;

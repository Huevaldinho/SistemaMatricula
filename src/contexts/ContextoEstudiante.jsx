import { createContext } from "react";

export const ContextoEstudiante = createContext();

export function ContextoEstudianteProvider(props) {
  //Cuando se hace login se guarda el usuario en esta constante.

  const estudiante = {
    nombre: "Felipe",
    apellidos: "Obando Arrieta",
    carnet: 2021035489,
    correo: "felipeobando@estudiantec.cr",
  };
  return (
    <ContextoEstudiante.Provider value={{ estudiante }}>
      {props.children}
    </ContextoEstudiante.Provider>
  );
}

export default ContextoEstudiante;

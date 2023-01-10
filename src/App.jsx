import { Router } from "./routes/Router";
import { ContextoEstudianteProvider } from "./contexts/ContextoEstudiante";
import { ContextoOpcionesProvider } from "./contexts/ContextoOpciones";

function App() {
  return (
    <div className="App">
      <ContextoEstudianteProvider id="contextoEstudiante">
        <ContextoOpcionesProvider id="contextoOpciones">
          {/*Enrutador de las paginas.*/}
          <Router />
        </ContextoOpcionesProvider>
      </ContextoEstudianteProvider>
    </div>
  );
}

export default App;

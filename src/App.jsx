import { Router } from "./routes/Router";
import { ContextoEstudianteProvider } from "./contexts/ContextoEstudiante";

function App() {
  return (
    <div className="App">
      <ContextoEstudianteProvider id='contextoEstudiante'>
        {/*Enrutador de las paginas.*/}
        <Router />
      </ContextoEstudianteProvider>
    </div>
  );
}

export default App;

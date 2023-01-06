import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //"Usuario no válido, solamente @estudiantec.cr"
  const [loginIncorrecto, setLoginIncorrecto] = useState("");

  let tryLoginAPI = false;//Usar API para iniciar sesion. False muestra alerta | True redirecciona a /matricula.
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //LLamar api para hacer el login.
    //redux-react-session es una opcion para mantener la sesion del usuario.
    //al parecer es compatible con react-router


    //Despues de autenticarse, redirigir a pantalla matricula
    //Si no se logro autenticar, se debe mostrar alerta.
    tryLoginAPI
      ? navigate("/matricula")
      : (alert("No se ha podido iniciar sesion. Usuario no válido, solamente @estudiantec.cr"),
        setLoginIncorrecto("Usuario no válido, solamente @estudiantec.cr"));
  };
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="bg-slate-100 px-6 py-8 rounded-xl shadow-xl shadow-slate-400 text-black w-full"
        >
          <div className="bg-gradient-to-l hover:bg-gradient-to-r"></div>

          <h1 className="mb-8 text-3xl text-center text-[#005085] font-semibold">
            Sistema de matrícula
          </h1>
          <input
            type="text"
            className="border-2 border-slate-300 w-full p-3 rounded-md mb-4"
            name="email"
            autoComplete="true"
            autoFocus
            placeholder="Correo @estudiantec.cr"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <input
            type="password"
            className="border-2 border-slate-300 w-full p-3 rounded-md mb-4"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
          rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Ingresar
          </button>
          <p className="text-red-600 text-center">{loginIncorrecto}</p>
          {/**Este */}
          <h1 className="text-gray-400 hover:underline">
            ¿Olvidaste tu contraseña?
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;

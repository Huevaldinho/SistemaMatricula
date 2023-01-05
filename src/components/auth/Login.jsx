import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    //LLamar api para hacer el login.
    //redux-react-session es una opcion para mantener la sesion del usuario.
    //al parecer es compatible con react-router
    console.log("Login button clicked");
  };
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form
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
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          />
          <input
            type="password"
            className="border-2 border-slate-300 w-full p-3 rounded-md mb-4"
            name="password"
            placeholder="Contraseña"
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
          />
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
          rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Create Account
          </button>
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

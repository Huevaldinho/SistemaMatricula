import { AiOutlineMail } from "react-icons/ai";
function Footer_MainPage() {
  //Preguntar version en contexto o api.
  const version = "v1";
  const fecha = new Date();

  return (
    //
    <div className="bg-slate-50 grid grid-cols-3 gap-3 p-5 border-2 border-zinc-300">
      <div>
        {/**
           NO SE ALINEA
         */}
        <h1
          onClick={(e) => {
            e.preventDefault();
            console.log("Mostrar ventana con contactos");
          }}
          className="hover:text-gray-500"
        >
          <AiOutlineMail size={30} /> Contactos de Admisión y Registro
        </h1>
      </div>
      <div className="text-gray-500 text-center">
        DATIC - Tecnológico de Costa Rica - {version}- © {fecha.getFullYear()}
      </div>
    </div>
  );
}

export default Footer_MainPage;

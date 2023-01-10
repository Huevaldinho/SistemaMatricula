import ContactosAdmisionRegistro from "./ContactosAdmisionRegistro";
function Footer_MainPage() {
  //Preguntar version en contexto o api.
  const version = "v1";
  const fecha = new Date();

  return (
    //
    <div
      id="footer"
      className="bg-slate-50 grid grid-cols-3 gap-3 p-5 border-2 border-zinc-300"
    >
      <ContactosAdmisionRegistro />

      <div className="text-gray-500 text-center">
        DATIC - Tecnológico de Costa Rica - {version}- © {fecha.getFullYear()}
      </div>
    </div>
  );
}

export default Footer_MainPage;

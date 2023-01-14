import ContactosAdmisionRegistro from "./contactosAdminRegis/ContactosAdmisionRegistro";
//Footer de todas las paginas.
function Footer() {
  //Preguntar version en contexto o api.
  const version = "v1";
  const fecha = new Date();

  return (
    <footer
      id="footer"
      className="flex flex-1 bottom-0 right-0 left-0  grid-cols-3 gap-3 p-4 border-2 border-zinc-300"
    >
      <ContactosAdmisionRegistro />

      <div className="text-gray-500 text-center">
        DATIC - Tecnológico de Costa Rica - {version}- © {fecha.getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;

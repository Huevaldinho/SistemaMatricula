import TablaContactos from "./TablaContactos";
function BodyModal({ contactos }) {
  return (
    <div id="bodyModal" className="relative p-6 flex-auto">
      {contactos.map((sede) => (
        <>
          {/*Para cada sede se crea una tabla. */}
          <TablaContactos key={sede.codigo} fila={sede} />
          <br />
        </>
      ))}
    </div>
  );
}

export default BodyModal;

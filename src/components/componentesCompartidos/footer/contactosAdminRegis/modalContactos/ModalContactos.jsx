import HeaderModal from "./HeaderModal";
import BodyModal from "./BodyModal";
import BotonCerrarModal from "./BotonCerrarModal";

function ModalContactos({ contactos ,handleModal}) {
  return (
    <>
      <div
        id="modalContactos"
        className="flex overflow-hidden fixed justify-center items-center inset-0 z-50 "
      >
        {/*Contenido modal*/}
        <div
          id="contenidoModal"
          className="border-0 rounded-lg relative h-auto w-auto flex flex-col  bg-white "
        >
          {/*header*/}
          <HeaderModal />
          {/*body*/}
          <BodyModal contactos={contactos} />
          {/*Boton */}
          <BotonCerrarModal handleModal={handleModal} />
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ModalContactos;

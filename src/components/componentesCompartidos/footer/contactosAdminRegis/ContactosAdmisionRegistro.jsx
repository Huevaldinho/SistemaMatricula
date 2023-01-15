import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { contactosAdminRegistro } from "../../../../data/datos";
import ModalContactos from "./modalContactos/ModalContactos";

function ContactosAdmisionRegistro() {
  const [showModal, setShowModal] = useState(false);
  //Pedir a API.
  const contactos = contactosAdminRegistro();

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div id="contactos" className="flex hover:underline">
      <AiOutlineMail id="mailIcon" size={30} onClick={handleModal} />
      <h3
        id="contactoText"
        className=" text-slate-600 font-light text-sm pt-1"
        onClick={handleModal}
      >
        Contactos de Admisión y Registro
      </h3>
      {/* Al darle click al texto se muestra el modal con los contactos.*/}
      {showModal ? (
        <ModalContactos contactos={contactos} handleModal={handleModal} />
      ) : null}
    </div>
  );
}

export default ContactosAdmisionRegistro;

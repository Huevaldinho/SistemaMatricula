import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import TablaContactos from "./TablaContactos";
import { contactosAdminRegistro } from "../../../../data/datos";

 function ContactosAdmisionRegistro() {
  const [showModal, setShowModal] = useState(false);
  const contactos = contactosAdminRegistro();

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div id="contactos" className="flex hover:underline">
      <>
        <AiOutlineMail id="mailIcon" size={30} onClick={handleModal} />
      </>
      <>
        <h3
          id="contactoText"
          className=" text-slate-600 font-light text-sm pt-1"
          onClick={handleModal}
        >
          Contactos de Admisión y Registro
        </h3>
        

           
      </>
      {showModal ? (
        <>
          <div
            id="contactoModal"
            className="flex overflow-hidden fixed justify-center items-center inset-0 z-50 "
          >
            <div className="relative h-auto w-auto">
              {/*content*/}
              <div
                id="contentModal"
                className="border-0 rounded-lg relative flex flex-col w-full bg-white h-auto"
              >
                {/*header*/}
                <div
                  id="headerModal"
                  className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <h4 id="textoModal" className="text-3xl font-semibold">
                    Contactos Admisión y Registro
                  </h4>

                </div>
                <h3 className="text-black font-light p-3">Has click en la sede para ver los contactos</h3>
                {/*body*/}
                <div
                  id="bodyModal"
                  className="relative p-6 flex-auto"
                >
                  {contactos.map((sede) => (
                    <>
                      <TablaContactos key={sede.codigo} fila={sede} />
                      <br/>
                    </>
                  ))}
                </div>
                {/*footer*/}
                {/*Close button */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 border-2 border-red-500 rounded background-transparent font-light uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default ContactosAdmisionRegistro;
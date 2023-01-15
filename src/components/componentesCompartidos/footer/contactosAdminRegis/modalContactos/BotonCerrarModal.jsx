function BotonCerrarModal({ handleModal }) {
  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
      <button
        className="text-red-500 border-2 border-red-500 rounded background-transparent font-light uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleModal}
      >
        Cerrar
      </button>
    </div>
  );
}

export default BotonCerrarModal;

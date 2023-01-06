import { HiDotsVertical, HiChevronDown } from "react-icons/hi";
function Opciones() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //Cada opcion tiene un handleSubmit diferente porque
    //cada una invoca un componente diferente.

    console.log("Se ha seleccionado: " + e.target.value);
  };

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        name="opciones"
        className="w-full p-2 text-gray-600 bg-white border-2 border-slate-500 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option onClick={handleSubmit}>Matrículas Disponibles</option>
        <option>Mi Historial Académico</option>
        <option>Requisitos Pendientes</option>
        <option>Código de PIN</option>
        <option>Ayuda</option>
      </select>
    </div>
  );
}

export default Opciones;

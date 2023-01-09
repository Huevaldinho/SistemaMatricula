export function Opciones() {
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
      Cada opcion tiene un handleSubmit diferente porque
    cada una invoca un componente diferente. Sin embargo,
    las opciones crean un componente Modal.

    
      La parte del cuerpo de la matricula solo
    muestra los cursos disponibles segun la matricula que se 
    haya seleccionado.    
    */
    console.log("Se ha seleccionado: " + e.target.value);
  };

  return (
    <div id="opciones" className="h-auto">
      <select
        name="opciones"
        className="p-1 text-gray-600 text-sm bg-white border-2 border-slate-500 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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

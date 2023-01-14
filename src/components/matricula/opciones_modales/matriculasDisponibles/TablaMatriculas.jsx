import FilasTablaMatriculas from "./FilasTablaMatriculas";
import HeadTableMatriculas from "./HeadTablaMatriculas";

function TablaMatriculas({ matriculas }) {
  //Si el arreglo de matriculas es diferente de [] es porque
  //hay matriculas disponibles. En caso contrario no hay matriculas disponibles.
  return matriculas.length !== 0 ? (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <HeadTableMatriculas />
        <tbody>
          <FilasTablaMatriculas matriculas={matriculas} />
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="text-black font-normal">No hay matriculas disponibles.</h1>
  );
}

export default TablaMatriculas;

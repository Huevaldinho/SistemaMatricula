import Footer from "../components/componentesCompartidos/footer/Footer";
import BodyMatricula from "../components/matricula/body/BodyMatricula";
import Header_Matricula from "../components/matricula/header/Header_Matricula";
function Matricula() {
  return (
    <div id="matricula" className="">
      <Header_Matricula />
      <BodyMatricula />
      <Footer />
    </div>
  );
}

export default Matricula;

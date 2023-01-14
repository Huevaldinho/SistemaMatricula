import Footer from "../components/componentesCompartidos/footer/Footer";
import Header_MainPage from "../components/mainPage/Header_MainPage";
import Login from "../components/mainPage/Login";
export default function MainPage() {
  return (
    <div id="mainPage" className="relative">
      <Header_MainPage />
      <Login />
      <Footer />
    </div>
  );
}

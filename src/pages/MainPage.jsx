import Footer_MainPage from "../components/componentesCompartidos/Footer";
import Header_MainPage from "../components/auth/Header_MainPage";
import Login from "../components/auth/Login";
export default function MainPage() {
  return (
    <div className="bg-white h-screen">
      <Header_MainPage />
      <Login />
      <Footer_MainPage />
    </div>
  );
}

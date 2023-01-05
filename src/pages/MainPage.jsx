import Footer_MainPage from "../components/mainPage/Footer_MainPage";
import Header_MainPage from "../components/mainPage/Header_MainPage";
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

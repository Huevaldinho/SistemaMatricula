import Footer_MainPage from "../components/mainPage/Footer_MainPage";
import Header_MainPage from "../components/mainPage/Header_MainPage";
export default function MainPage() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Header_MainPage />
      <h1 className="text-white ">Body</h1>
      <Footer_MainPage />
    </div>
  );
}

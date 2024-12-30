import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

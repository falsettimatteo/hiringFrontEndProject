import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Africa from "./pages/Africa";
import Antartica from "./pages/Antartica";
import Asia from "./pages/Asia";
import Earth from "./pages/Earth";
import Europe from "./pages/Europe";
import ContinentsCard from "./pages/MainPage";
import NorthAmerica from "./pages/NorthAmerica";
import Oceania from "./pages/Oceania";
import SeeMore from "./pages/SeeMore";
import SouthAmerica from "./pages/SouthAmerica";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/seeMore/:code" element={<SeeMore />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/antartica" element={<Antartica />} />
        <Route path="/northamerica" element={<NorthAmerica />} />
        <Route path="/southamerica" element={<SouthAmerica />} />
        <Route path="/oceania" element={<Oceania />} />
        <Route path="/all" element={<Earth />} />
        <Route path="/" element={<ContinentsCard />} />
        
      </Routes>
    </>
  );
}

export default App;

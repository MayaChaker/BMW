import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import NewModels from "./pages/NewModels";
import LuxuryCollection from "./pages/LuxuryCollection";
import BestSellingModels from "./pages/BestSellingModels";
import BmwSeriesTable from "./pages/BmwSeriesTable";
import CarDetails from "./pages/CarDetails";
import Contact from "./pages/Contact";
import "./styles/shared.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/new-models" element={<NewModels />} />
        <Route path="/cars/luxury-collection" element={<LuxuryCollection />} />
        <Route
          path="/cars/best-selling-models"
          element={<BestSellingModels />}
        />
        <Route path="/cars/bmw-series-table" element={<BmwSeriesTable />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

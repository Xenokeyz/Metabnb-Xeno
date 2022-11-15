import "./app.css";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home-page/home-page";
import HomePage from "./pages/Airbnb/AirbnbPage";
import PlacesPage from "./pages/places-page/places-page";

function App() {
  return (
    <Routes>
      <Route path="/Metabnb-Xeno" element={<HomePage />} />
      <Route path="/Metabnb-Xeno/places" element={<PlacesPage />} />
    </Routes>
  );
}

export default App;

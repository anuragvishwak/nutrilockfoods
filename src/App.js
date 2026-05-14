import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import DefaultLandingPage from "./DefaultLandingPage";
import AboutUs from "./AboutUs.js";
import Product from "./Product.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

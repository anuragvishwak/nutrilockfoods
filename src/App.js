import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs.JS";
import ContactUs from "./ContactUs";
import DefaultLandingPage from "./DefaultLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

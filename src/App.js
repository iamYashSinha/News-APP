import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Catogories from "./components/Pages/Catogories";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/general" element={<Catogories cat="general" />} />
          <Route path="/business" element={<Catogories cat="business" />} />
          <Route path="/entertainment" element={<Catogories cat="entertainment" />} />
          <Route path="/health" element={<Catogories cat="health" />} />
          <Route path="/science" element={<Catogories cat="science" />} />
          <Route path="/sports" element={<Catogories cat="sports" />} />
          <Route path="/technology" element={<Catogories cat="technology" />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Catogories from "./components/Pages/Catogories";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/general" element={<Catogories cat="general" />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;

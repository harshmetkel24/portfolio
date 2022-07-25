import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contributions from "./Pages/Contributions";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

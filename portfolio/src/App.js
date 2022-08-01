import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// pages
import PersonalDetails from "./Pages/PersonalDetails";
import Projects from "./Pages/Projects";
import Contributions from "./Pages/Contributions";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

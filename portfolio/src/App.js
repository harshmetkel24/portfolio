import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// pages
import PersonalDetails from "./Pages/PersonalDetails";
import { Projects } from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";

// defining themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThemeContext = createContext();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider
      theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

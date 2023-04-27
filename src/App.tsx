import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`flex flex-col ${dark ? "dark" : ""}`}>
      <Navbar toggleDark={() => setDark(!dark)} />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

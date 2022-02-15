import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Education from "./pages/Education/Education";
import Artwork from "./pages/Artwork/Artwork";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/new-portfolio/" element={<Home />} />
        <Route path="/websites/" element={<Websites />} />
        <Route path="/education/" element={<Education />} />
        <Route path="/artwork/" element={<Artwork />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/skills/" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;

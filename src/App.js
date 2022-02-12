import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Websites from "./pages/Websites/Websites";
import Education from "./pages/Education/Education";
import Artwork from "./pages/Artwork/Artwork";
import Music from "./pages/Music/Music";
import Contact from "./pages/Contact/Contact";
import Games from "./pages/Games/Games";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/new-portfolio/" element={<Home />} />
        <Route path="/new-portfolio/websites/" element={<Websites />} />
        <Route path="/new-portfolio/education/" element={<Education />} />
        <Route path="/new-portfolio/artwork/" element={<Artwork />} />
        <Route path="/new-portfolio/music/" element={<Music />} />
        <Route path="/new-portfolio/contact/" element={<Contact />} />
        <Route path="/new-portfolio/games/" element={<Games />} />
        <Route path="/new-portfolio/skills/" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;

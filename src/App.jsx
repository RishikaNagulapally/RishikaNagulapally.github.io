import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
import Navbar from "./assets/pages/navbar";
import ContactFooter from "./assets/pages/contact";
import Skills from "./assets/pages/skills";
import Experience from "./assets/pages/experience";
import Projects from "./assets/pages/projects";
import IEEE from "./assets/pages/ieee";
import GDG from "./assets/pages/gdg";
import Hack from "./assets/pages/hack";

export default function App() {
  return (
    <Router basename="/"> {/* This is correct for GitHub Pages */}
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />          {/* Includes AboutMe (with Download CV) */}
                  <Experience />
                  <Skills />
                  <Projects />
                </>
              }
            />
            <Route path="/ieee" element={<IEEE />} />
            <Route path="/gdg" element={<GDG />} />
            <Route path="/hack" element={<Hack />} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
}

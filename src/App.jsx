import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Blogs from "./pages/Blogs";
import Error from "./pages/404";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Navbar/>
      <AnimatePresence initial={false}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;

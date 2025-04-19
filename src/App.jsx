import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Component/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="bg-stone-900 font-['Poppins'] text-neutral-300  overflow-hidden ">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

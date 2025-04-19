import { Menu, Home, User, Briefcase, Mail } from "lucide-react"; // Added icons
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center mt-7">
      <h1 className="text-main text-4xl font-poppins font-['Brumery Demo']">
        <Link to="/">Najar</Link>
      </h1>
      <nav className="relative">
        <Menu
          className={`cursor-pointer transition ${
            isOpen && "rotate-90 transition"
          }`}
          onClick={toggleMenu}
        />
        {isOpen && (
          <ul className="gap-5 absolute top-10 right-0 bg-stone-900 p-5 rounded-lg shadow-lg w-40 border-2 border-main">
            <li className="text-main font-bold tracking-wider py-1 hover:text-second transition flex items-center gap-2">
              <Home size={16} /> {/* Added Home icon */}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-main font-bold tracking-wider py-1 hover:text-second transition flex items-center gap-2">
              <User size={16} /> {/* Added User icon */}
              <NavLink to="about">About Me</NavLink>
            </li>
            <li className="text-main font-bold tracking-wider py-1 hover:text-second transition flex items-center gap-2">
              <Briefcase size={16} /> {/* Added Briefcase icon */}
              <NavLink to="Projects">Projects</NavLink>
            </li>
            <li className="text-main font-bold tracking-wider py-1 hover:text-second transition flex items-center gap-2">
              <Mail size={16} /> {/* Added Mail icon */}
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;

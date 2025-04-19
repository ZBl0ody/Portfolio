// Footer.jsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold"> Ahmed Alnajar</h1>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav className="flex space-x-6 text-gray-400">
          <a href="about" className="hover:text-second transition">
            About
          </a>
          <a href="projects" className="hover:text-second transition">
            Projects
          </a>
          <a href="contact" className="hover:text-second transition">
            Contact
          </a>
        </nav>

        <div className="flex space-x-4">
          <a
            href="https://github.com/ZBl0ody"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-second transition " />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-sameer-abdon-b99156280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-second transition" />
          </a>
          <a href="mailto:eng.ahmedsameer0@gmail.com">
            <Mail className="hover:text-second transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

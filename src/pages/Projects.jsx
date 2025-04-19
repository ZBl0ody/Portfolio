import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, ShoppingCart } from "lucide-react"; // Added icons

const Projects = () => {
  const projects = [
    {
      title: "Carbon Footprint Calculator",
      description:
        "A web app that allows users to estimate their carbon footprint based on lifestyle inputs. Built with React, Node.js, and RESTful APIs.",
      tech: ["React", "Node.js", "Tailwind CSS", "Express"],
    },
    {
      title: "Personal Portfolio",
      description:
        "A fully responsive personal portfolio to showcase skills, experience, and projects. Built using React, Tailwind, and Framer Motion.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "E-Commerce UI Clone",
      description:
        "Frontend clone of a modern e-commerce interface using reusable components and React Router.",
      tech: ["React", "CSS Modules", "JavaScript"],
    },
  ];

  return (
    <section className="mt-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.h2
        className="text-main text-4xl mb-12 font-bold text-center uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-stone-800 text-white p-6 rounded-2xl border border-stone-700 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-main font-semibold mb-2 flex items-center gap-2">
              {index === 0 && <Code size={20} />}{" "}
              {/* Icon for the first project */}
              {index === 1 && <Globe size={20} />}{" "}
              {/* Icon for the second project */}
              {index === 2 && <ShoppingCart size={20} />}{" "}
              {/* Icon for the third project */}
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-second/30 text-red-100 px-3 py-1 rounded-full border border-main"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

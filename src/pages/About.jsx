import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { GraduationCap, CheckCircle, User, Award } from "lucide-react"; // Added icons

const About = () => {
  const profile =
    "Ahmed Sameer Abdon is a skilled front-end developer specializing in React, Next.js, and Three.js, with a strong passion for creating dynamic and engaging user experiences. He has a keen eye for detail and excels in crafting visually appealing interfaces. Ahmed is also experienced in team collaboration, leadership, and staff training.";

  const ex = [
    {
      id: 1,
      head: "IT Specialist | Bernasos Stationary | Apr – Oct 2024",
      body: "Provided technical support for hardware, software, and network issues. Maintained IT infrastructure, including servers, networks, and workstations. Performed system backups, updates, and patch management.",
    },
    {
      id: 2,
      head: "Freelance Graphic Designer",
      body: "Designed original graphics for social media campaigns. Stayed current with tools and trends. Delivered banners and signage for events and trade shows.",
    },
    {
      id: 3,
      head: "Volunteer | Resala Medical Mission | Summer 2022",
      body: "Assisted in medical exams and treatments. Educated patients on preventive care. Managed patient records and maintained confidentiality in a fast-paced setting.",
    },
  ];

  const education = {
    uni: "6 October University, Egypt",
    degree: "Bachelor of Computer Science & Information Systems",
    period: "2019 – 2024",
    gpa: "A (Excellent)",
    project: "Developed a Carbon Footprint Calculator web application.",
  };

  const skill = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Framer Motion",
    "Bootstrap",
    "Redux | Context API",
    "Responsive Web Design",
    "RESTful APIs",
    "Webpack",
    "Jest | React Testing Library",
    "Git & GitHub",
    "Bash",
    "Agile | ITIL | Scrum",
    "Problem Solving",
    "Teamwork",
    "Communication",
  ];

  const certificates = [
    "Professional Front-End Web Development Nanodegree",
    "Web Development Challenger Track (Udacity)",
  ];

  return (
    <section className="mt-24 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-main mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Ahmed Sameer Abdon
      </motion.h2>

      {/* Profile */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-main mb-4 flex items-center gap-2">
          <User size={24} /> Profile {/* Added User icon */}
        </h3>
        <p className="text-gray-300 leading-relaxed">{profile}</p>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="grid gap-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ex.map((el) => (
          <motion.div
            key={el.id}
            className="bg-stone-800 text-white p-6 rounded-2xl shadow-md border border-stone-700 hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-main mb-2">{el.head}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{el.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-main mb-4 flex items-center gap-2">
          <GraduationCap size={24} /> Education {/* Added GraduationCap icon */}
        </h3>
        <p className="text-gray-300 mb-1">
          <strong>{education.uni}</strong> — {education.degree} (
          {education.period})
        </p>
        <p className="text-gray-300 mb-1">GPA: {education.gpa}</p>
        <p className="text-gray-300">{education.project}</p>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-main mb-6 flex items-center gap-2">
          <CheckCircle size={24} /> Skills & Abilities{" "}
          {/* Added CheckCircle icon */}
        </h3>
        <ul className="flex flex-wrap gap-4">
          {skill.map((el, index) => (
            <motion.li
              key={index}
              className="bg-second/20 text-red-100 px-4 py-2 rounded-full text-sm font-medium border border-main hover:bg-second transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {el}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-main mb-4 flex items-center gap-2">
          <Award size={24} /> Certificates {/* Added Award icon */}
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {certificates.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;

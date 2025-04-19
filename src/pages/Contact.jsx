import React from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-5 px-6 md:px-12 max-w-5xl mx-auto aspect-video  ">
      <motion.h2
        className="text-4xl font-bold text-center text-main mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="grid gap-6 bg-stone-800 p-8 rounded-2xl shadow-lg border border-stone-700 h-86"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-gray-300 mb-2 font-medium flex items-center gap-2"
          >
            <User size={16} /> Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-stone-900 border border-main text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-main"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-gray-300 mb-2 font-medium flex items-center gap-2"
          >
            <Mail size={16} /> Email
          </label>
          <input
            id="email"
            type="email"
            className="bg-stone-900 border border-main text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-main"
            placeholder="Your email address"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-gray-300 mb-2 font-medium flex items-center gap-2"
          >
            <MessageCircle size={16} /> Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="bg-stone-900 border border-main text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-main"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-main hover:bg-second transition-colors text-white py-2 px-6 rounded-md font-semibold text-lg"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;

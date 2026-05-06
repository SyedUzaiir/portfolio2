"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Full Stack",
    skills: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "MySQL", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "NLP", "Predictive Modeling", "Data Visualization"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "Oracle Cloud", "Linux", "CI/CD", "Docker Basics"],
  },
  {
    title: "Tools & Core",
    skills: ["Git", "Figma", "Postman", "DSA", "DBMS", "OS", "OOP"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-[var(--accent-color)] mb-12 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6 text-[var(--accent-color)]">{category.title}</h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-color-1)] text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

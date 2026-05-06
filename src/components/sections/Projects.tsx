"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LuminaDB",
    description: "Full-stack NLP-powered interface that converts plain English queries into MongoDB Query Language. Built a FastAPI backend achieving sub-200ms average query translation latency.",
    tags: ["React.js", "Node.js", "FastAPI", "MongoDB", "NLP"],
    github: "https://github.com/SyedUzaiir/luminai",
    link: "#",
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "BioSense AI",
    description: "ML-based ICU diabetes prediction system using ensemble classification models, achieving 87%+ prediction accuracy. Deployed inference endpoints on AWS Lambda.",
    tags: ["Python", "TensorFlow", "AWS Lambda", "scikit-learn"],
    github: "https://github.com/SyedUzaiir/biosense-ai",
    link: "#",
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "CareerFlow",
    description: "Full-stack career management platform enabling users to track job applications, manage resumes, and receive AI-driven job match recommendations.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/SyedUzaiir/CareerFlow",
    link: "#",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Street Smart",
    description: "Full-stack web platform for geo-tagged civic issue reporting, integrating Leaflet.js maps API for real-time location visualization.",
    tags: ["JavaScript", "Leaflet.js", "MongoDB", "REST APIs"],
    github: "#", // Add link if available
    link: "#",
    color: "from-purple-400 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-[var(--accent-color)] mb-12 rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] p-8 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--accent-color)]/10 transition-all duration-500"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-70`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                  </svg>
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-[var(--text-primary)]/10 text-[var(--text-primary)] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

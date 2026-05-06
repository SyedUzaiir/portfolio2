"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Internship",
    company: "TechSaksham (Microsoft & SAP)",
    date: "2025",
    description: "Developed machine learning pipelines and gained exposure to cloud infrastructure.",
  },
];

const achievements = [
  "HackerRank Gold Badge (Java) - 4 badges total",
  "Solved 200+ LeetCode problems",
  "Top ranks in state-level coding contests",
  "Joint Secretary, Student Developer Club",
  "Vice Security Club Leader - Led technical workshops for 50+ students",
  "Hackathon Participant - Built AI and full stack prototypes",
];

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
  "Salesforce Certified Agentforce Specialist",
  "NPTEL: Python for Data Science (Elite)",
  "MongoDB Certification",
  "Front-End Developer Certification (Infosys Springboard)",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience & Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            
            <div className="relative border-l-2 border-[var(--card-border)] ml-4 pl-8 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[var(--bg-color-1)] border-4 border-[var(--accent-color)] rounded-full"></div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <h4 className="text-lg text-[var(--accent-color)] mb-2">{exp.company}</h4>
                  <p className="text-sm text-[var(--text-muted)] mb-3">{exp.date}</p>
                  <p className="text-[var(--text-secondary)]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-[var(--accent-color)]" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex gap-3 p-4 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-xl items-center"
                >
                  <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full shrink-0"></div>
                  <span className="font-medium text-[var(--text-primary)]">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Achievements Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[var(--accent-color)]" />
            <h2 className="text-3xl font-bold">Achievements & Leadership</h2>
          </div>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-[var(--card-bg)] to-transparent border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <p className="font-medium text-lg">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

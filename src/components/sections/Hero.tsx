"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[var(--accent-color)] font-medium mb-4 tracking-wide uppercase"
        >
          Welcome to my world
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-balance">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-purple-500">Syed Uzair Mohiuddin</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] font-medium mb-8">
          Full Stack Developer | AI/ML Enthusiast
        </h2>
        
        <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed text-balance">
          I craft scalable web applications, design machine learning pipelines, and build cloud-native architectures. 
          Driven by a passion for impactful, production-ready software.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-color-1)] rounded-full font-medium transition-transform"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md rounded-full font-medium transition-transform shadow-sm"
          >
            <Download className="w-4 h-4" /> Resume
          </motion.a>
          
          <div className="flex gap-4 ml-2 md:ml-6 mt-4 md:mt-0">
            <a href="https://github.com/syeduzaiir" target="_blank" rel="noreferrer" className="p-3 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-color-1)] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/syeduzairmohiuddin" target="_blank" rel="noreferrer" className="p-3 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-color-1)] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:syeduzairmohiuddin33@gmail.com" className="p-3 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-color-1)] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { isNight, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl font-bold tracking-tighter"
      >
        UZAIIR.
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle Theme"
      >
        {isNight ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.button>
    </nav>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {GitHubCalendar} from "react-github-calendar";
import { Code2, GitMerge } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const codingProfiles = [
  {
    platform: "LeetCode",
    stats: "200+ Problems Solved",
    link: "https://leetcode.com/u/uzairmohiuddin/",
    color: "text-yellow-500",
  },
  {
    platform: "Codeforces",
    stats: "1200+ Rating",
    link: "https://codeforces.com/profile/UzairMohiuddin",
    color: "text-blue-500",
  },
  {
    platform: "CodeChef",
    stats: "1400+ Rating",
    link: "https://www.codechef.com/users/uzair_777",
    color: "text-amber-700",
  },
];

export const Activity = () => {
  const { isNight } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="activity" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Coding Activity
        </h2>
        <div className="w-20 h-1 bg-[var(--accent-color)] mb-12 rounded-full"></div>
      </motion.div>

      <div className="flex flex-col xl:flex-row gap-12">
        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] p-8 rounded-3xl overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-8">
            <GitMerge className="w-6 h-6 text-[var(--accent-color)]" />
            <h3 className="text-2xl font-bold">GitHub Contributions</h3>
          </div>

          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[800px]">
              {mounted && (
                <GitHubCalendar
                  username="syeduzaiir"
                  colorScheme={isNight ? "dark" : "light"}
                  blockSize={14}
                  blockMargin={5}
                  fontSize={14}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="xl:w-1/3 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="w-6 h-6 text-[var(--accent-color)]" />
            <h3 className="text-2xl font-bold">Profiles</h3>
          </div>

          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border)] rounded-2xl hover:border-[var(--accent-color)] transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className={`text-xl font-bold mb-1 ${profile.color}`}>
                    {profile.platform}
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    {profile.stats}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[var(--text-primary)]/5 flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
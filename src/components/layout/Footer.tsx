import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full p-6 mt-20 border-t border-white/20 text-center text-sm opacity-60">
      <p>© {new Date().getFullYear()} Syed Uzair Mohiuddin. Crafted with Next.js & Framer Motion.</p>
    </footer>
  );
};

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully! (Simulated)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="p-8 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] rounded-3xl flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="p-4 bg-[var(--accent-color)]/20 text-[var(--accent-color)] rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Email</h3>
              <a href="mailto:syeduzairmohiuddin33@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
                syeduzairmohiuddin33@gmail.com
              </a>
            </div>
          </div>

          <div className="p-8 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] rounded-3xl flex items-start gap-4 hover:shadow-lg transition-shadow">
            <div className="p-4 bg-[var(--accent-color)]/20 text-[var(--accent-color)] rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Phone</h3>
              <a href="tel:+917842296528" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
                +91 7842296528
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-3/5 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--bg-color-1)]/50 border border-[var(--card-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--bg-color-1)]/50 border border-[var(--card-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Your Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-[var(--bg-color-1)]/50 border border-[var(--card-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-shadow resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-[var(--text-primary)] text-[var(--bg-color-1)] font-bold rounded-xl flex justify-center items-center gap-2 transition-transform disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </motion.button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const FLOCK_SIZE = 10;

interface BirdParams {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  ease: number;
  offsetX: number;
  offsetY: number;
  scale: number;
}

export const CustomCursor = () => {
  const birdsRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const isMovingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isNight } = useTheme();

  const birdsDataRef = useRef<BirdParams[] | null>(null);

  useEffect(() => {
    if (!birdsDataRef.current) {
      birdsDataRef.current = Array.from({ length: FLOCK_SIZE }).map(() => ({
        x: -100,
        y: -100,
        vx: 0,
        vy: 0,
        angle: 0,
        ease: Math.random() * 0.05 + 0.02,
        offsetX: (Math.random() - 0.5) * 40,
        offsetY: (Math.random() - 0.5) * 40,
        scale: Math.random() * 0.5 + 0.5,
      }));
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isMovingRef.current = true;
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      const mouse = mouseRef.current;
      const birdsData = birdsDataRef.current;
      if (!birdsData) return;

      birdsData.forEach((bird, index) => {
        const targetX = mouse.x + bird.offsetX;
        const targetY = mouse.y + bird.offsetY;

        // Calculate distance
        const dx = targetX - bird.x;
        const dy = targetY - bird.y;

        // Lerp position
        bird.x += dx * bird.ease;
        bird.y += dy * bird.ease;

        // Calculate rotation angle based on movement direction
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          bird.angle = Math.atan2(dy, dx) + Math.PI / 2; // +90deg to face direction of motion
        }

        // Apply idle hover animation if not moving much
        if (!isMovingRef.current) {
           bird.y += Math.sin(Date.now() / 300 + index) * 0.5;
           // Gentle rocking
           bird.angle += Math.sin(Date.now() / 500 + index) * 0.01;
        }

        // Update DOM element
        if (birdsRef.current[index]) {
          birdsRef.current[index].style.transform = `translate3d(${bird.x}px, ${bird.y}px, 0) rotate(${bird.angle}rad) scale(${bird.scale})`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {Array.from({ length: FLOCK_SIZE }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) birdsRef.current[index] = el;
          }}
          className={`absolute top-0 left-0 w-6 h-6 -ml-3 -mt-3 opacity-80 ${isNight ? 'text-slate-200' : 'text-black'}`}
          style={{ willChange: "transform" }}
        >
          {/* Simple Bird SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 14c0 0 5-4 10 0 5-4 10 0 10 0" />
          </svg>
        </div>
      ))}
    </div>
  );
};

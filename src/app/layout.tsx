import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { BackgroundCanvas } from "@/components/layout/BackgroundCanvas";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Uzair Mohiuddin | Portfolio",
  description: "Interactive watercolor portfolio of Syed Uzair Mohiuddin, Full Stack Developer & AI/ML Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <ThemeProvider>
          {/* SVG Noise Filter for Watercolor Texture */}
          <svg className="hidden">
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.6"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
            </filter>
          </svg>
          <div className="watercolor-overlay"></div>
          
          <BackgroundCanvas />
          <CustomCursor />
          <Navbar />
          
          <main className="relative z-10 flex flex-col min-h-screen w-full pt-24 px-6 md:px-12 lg:px-24">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

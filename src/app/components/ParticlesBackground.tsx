"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== "undefined") {
        await import("particles.js");

        if (window.particlesJS) {
          window.particlesJS.load(
            "particles-js",
            "/particles/particles-config.json", // ✅ caminho correto
            () => console.log("✨ Particles.js carregado com sucesso!")
          );
        }
      }
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a1a]" 
    ></div>
  );
}

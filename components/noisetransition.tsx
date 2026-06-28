"use client";

import { useEffect, useRef, useState } from "react";

const SCALE = 4; // 3-5 looks good
const FPS = 20;

export default function NoiseTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [active, setActive] = useState(false);
  const activeRef = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const start = () => setActive(true);
    const end = () => setActive(false);

    window.addEventListener("noise-transition:start", start);
    window.addEventListener("noise-transition:end", end);

    return () => {
      window.removeEventListener("noise-transition:start", start);
      window.removeEventListener("noise-transition:end", end);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: false,
    })!;

    ctx.imageSmoothingEnabled = false;

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / SCALE);
      canvas.height = Math.ceil(window.innerHeight / SCALE);
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    let previous = 0;

    const frameDuration = 1000 / FPS;

    const render = (time: number) => {
      animationId = requestAnimationFrame(render);

      if (!activeRef.current) return;

      if (time - previous < frameDuration) return;
      previous = time;

      ctx.fillStyle = "rgb(15,15,15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          let value = 35 + Math.random() * 150;

          // occasional bright sparkle
          if (Math.random() < 0.012) value = 255;

          // don't draw every pixel
          if (Math.random() < 0.35) continue;

          ctx.fillStyle = `rgb(${value},${value},${value})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-200 ${
        active ? "opacity-80" : "opacity-0"
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full noise-canvas"
      />

      <div className="scanlines" />

      <div className="crt-glow" />
    </div>
  );
}
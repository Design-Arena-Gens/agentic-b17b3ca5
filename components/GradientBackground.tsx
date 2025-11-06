"use client";

import { useEffect } from "react";

export const GradientBackground = () => {
  useEffect(() => {
    const root = document.documentElement;
    const handler = () => {
      const hour = new Date().getHours();
      const isDay = hour >= 6 && hour < 18;
      root.style.setProperty("--panel", isDay ? "rgba(226,232,240,0.85)" : "rgba(17,24,39,0.85)");
      root.style.setProperty("--accent", isDay ? "#0ea5e9" : "#8b5cf6");
      root.style.setProperty("-webkit-font-smoothing", "antialiased");
      root.style.setProperty("color-scheme", isDay ? "light" : "dark");
    };

    handler();
    const interval = setInterval(handler, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="twinkling" aria-hidden />;
};

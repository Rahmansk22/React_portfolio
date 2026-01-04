import React, { useEffect, useRef } from "react";

// Simple animated sparkles using canvas
export default function SparkleBackground({ count = 60 }) {
  const canvasRef = useRef();
  const animationRef = useRef();
  const sparkles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate sparkles
    sparkles.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.7,
      dx: (Math.random() - 0.5) * 0.18,
      dy: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.5 ? '#ffe066' : '#6a82fb',
      twinkle: Math.random() * Math.PI * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let s of sparkles.current) {
        ctx.save();
        ctx.globalAlpha = s.opacity * (0.7 + 0.3 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Animate
        s.x += s.dx;
        s.y += s.dy;
        s.twinkle += 0.08 + Math.random() * 0.04;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    // Resize handler
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

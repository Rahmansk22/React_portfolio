import React, { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Texture } from 'three';

const FloatingIcons = React.lazy(() => import("./Components/FloatingIcons"));
const SparkleBackground = React.lazy(() => import("./Components/SparkleBackground"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const HeroSection = React.lazy(() => import("./Components/HeroSection"));
const Experience = React.lazy(() => import("./Components/Experience"));
const Education = React.lazy(() => import("./Components/Education"));
const Skills = React.lazy(() => import("./Components/Skills"));
const Projects = React.lazy(() => import("./Components/Projects"));
const ContactForm = React.lazy(() => import("./Components/ContactForm"));
const Footer = React.lazy(() => import("./Components/Footer"));

function ColorfulPlanet() {
  const meshRef = useRef();
  // Create a color gradient texture using canvas
  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(
      size / 2, size / 2, size / 8,
      size / 2, size / 2, size / 2
    );
    grad.addColorStop(0, '#fffbe6'); // bright center
    grad.addColorStop(0.2, '#ffe066'); // yellow
    grad.addColorStop(0.4, '#ff6f91'); // pink
    grad.addColorStop(0.7, '#6a82fb'); // blue
    grad.addColorStop(1, '#120136'); // deep purple/space
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    // Add some craters/spots
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * size,
        Math.random() * size,
        Math.random() * 20 + 8,
        0, 2 * Math.PI
      );
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fill();
    }
    // Create texture from canvas
    const tex = new Texture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.x = Math.sin(state.mouse.y * Math.PI) * 0.25;
      meshRef.current.position.x = state.mouse.x * 2;
      meshRef.current.position.y = state.mouse.y * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1.7, 64, 64]} />
      <meshStandardMaterial map={texture} emissive="#fffbe6" emissiveIntensity={0.5} metalness={0.7} roughness={0.18} />
      {/* Glow effect */}
      <mesh scale={1.15}>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshBasicMaterial color="#ffe066" transparent opacity={0.18} />
      </mesh>
      <mesh scale={1.25}>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshBasicMaterial color="#6a82fb" transparent opacity={0.10} />
      </mesh>
    </mesh>
  );
}


function App() {
  const [hideFloating, setHideFloating] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setHideFloating(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div
        className="relative min-h-screen flex flex-col overflow-x-hidden overflow-y-auto"
        style={{ color: "var(--color-text)", backgroundColor: "var(--color-bg)" }}
        role="main"
        tabIndex={-1}
      >
        {/* 3D Animated Background */}
        <div style={{ position: 'fixed', zIndex: 0, width: '100vw', height: '100vh', top: 0, left: 0 }}>
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <Stars radius={80} depth={50} count={5000} factor={4} saturation={0.5} fade speed={2} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
          <SparkleBackground count={60} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Suspense fallback={<div className="w-full text-center py-12 text-teal-400">Loading...</div>}>
            <nav aria-label="Main navigation">
              <Navbar />
            </nav>
            <div style={{ pointerEvents: 'none', transition: 'opacity 0.6s' }} aria-hidden="true">
              <div style={{ opacity: hideFloating ? 0 : 1, transition: 'opacity 0.6s' }}>
                <FloatingIcons countMultiplier={5} />
              </div>
            </div>
            <div className="w-full mt-4 overflow-auto flex-grow">
              <Routes>
                <Route path="/" element={<>
                  <motion.div initial={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <HeroSection />
                  </motion.div>
                  <motion.div initial={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
                    <Experience />
                  </motion.div>
                  <motion.div initial={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}>
                    <Education />
                  </motion.div>
                  <motion.div initial={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}>
                    <Projects />
                  </motion.div>
                  <motion.div initial={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }} ref={skillsRef}>
                    <Skills />
                  </motion.div>
                  <motion.div initial={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}>
                    <ContactForm />
                  </motion.div>
                </>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <footer aria-label="Site footer">
              <Footer />
            </footer>
          </Suspense>
        </div>
      </div>
    </Router>
  );
// Animated gradient wave divider component
function DividerWave({ flip }) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, margin: 0 }}>
      <svg
        viewBox="0 0 1440 90"
        style={{ display: 'block', width: '100%', height: '60px', transform: flip ? 'scaleY(-1)' : undefined }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#6a82fb" />
            <stop offset="100%" stopColor="#120136" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,90 L0,90 Z"
          fill="url(#waveGradient)"
          opacity="0.7"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M0,60 C360,120 1080,0 1440,60 L1440,90 L0,90 Z;M0,70 C400,0 1040,120 1440,70 L1440,90 L0,90 Z;M0,60 C360,120 1080,0 1440,60 L1440,90 L0,90 Z"
          />
        </path>
      </svg>
    </div>
  );
}
}

export default App;

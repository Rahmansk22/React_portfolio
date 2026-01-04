import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiTypescript, 
  SiAngular, 
  SiPhp, 
  SiMongodb, 
  SiPostgresql
} from "react-icons/si";

const icons = [
  { name: "HTML", IconComponent: SiHtml5, color: "#E34F26" },
  { name: "CSS", IconComponent: SiCss3, color: "#1572B6" },
  { name: "JS", IconComponent: SiJavascript, color: "#F7DF1E" },
  { name: "React", IconComponent: SiReact, color: "#61DAFB" },
  { name: "Node", IconComponent: SiNodedotjs, color: "#339933" },
  { name: "Python", IconComponent: SiPython, color: "#3776AB" },
  { name: "Git", IconComponent: SiGit, color: "#F05032" },
  { name: "GitHub", IconComponent: SiGithub, color: "#181717" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED" },
  { name: "TypeScript", IconComponent: SiTypescript, color: "#3178C6" },
  { name: "Angular", IconComponent: SiAngular, color: "#DD0031" },
  { name: "PHP", IconComponent: SiPhp, color: "#777BB4" },
  { name: "Mongo", IconComponent: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", IconComponent: SiPostgresql, color: "#336791" }
];


function FloatingIcons({ countMultiplier = 0.7, styleOverride = {} }) {
  // Use fewer icons on mobile
  let actualMultiplier = countMultiplier;
  if (typeof window !== "undefined" && window.innerWidth < 640) {
    actualMultiplier = 0.35;
  }
  const extendedIcons = [];
  for (let i = 0; i < actualMultiplier; i++) {
    extendedIcons.push(...icons);
  }

  const parentRef = React.useRef(null);
  return (
    <div
      ref={parentRef}
      className="border-2 border-teal-500 rounded-lg"
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 20, pointerEvents: "none", ...styleOverride }}
    >
      {extendedIcons.map((icon, index) => {
        const size = 20 + Math.random() * 40;
        const startTop = 10 + Math.random() * 80;
        const startLeft = 10 + Math.random() * 80;
        // Generate random keyframes for floating effect
        const yKeyframes = [0, -20 + Math.random() * 40, 20 - Math.random() * 40, 0];
        const xKeyframes = [0, 20 - Math.random() * 40, -20 + Math.random() * 40, 0];
        const delay = Math.random() * 2;
        const duration = 4 + Math.random() * 4;
        const style = {
          top: `${startTop}%`,
          left: `${startLeft}%`,
          position: "absolute",
          fontSize: size,
          opacity: 1,
          userSelect: "none",
          filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))"
        };
        const Icon = icon.IconComponent;
        return (
          <motion.span
            key={index}
            style={{ ...style, touchAction: "none", cursor: "grab", pointerEvents: "auto" }}
            initial={{ y: 0, x: 0 }}
            animate={{ y: yKeyframes, x: xKeyframes, rotate: [0, 8, -8, 0] }}
            transition={{ duration, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay }}
            drag
            dragMomentum={false}
            dragElastic={0.18}
            dragConstraints={parentRef}
            whileTap={{ scale: 1.2, zIndex: 99 }}
            whileDrag={{ zIndex: 99 }}
          >
            <Icon size={size} color={icon.color} />
          </motion.span>
        );
      })}
    </div>
  );
}

export default FloatingIcons;

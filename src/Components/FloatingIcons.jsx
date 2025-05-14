import React from "react";
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

function FloatingIcons({ countMultiplier = 2.5, styleOverride = {} }) {
  // Duplicate icons array based on countMultiplier to increase number of icons rendered
  const extendedIcons = [];
  for (let i = 0; i < countMultiplier; i++) {
    extendedIcons.push(...icons);
  }

  return (
    <div className="border-2 border-teal-500 rounded-lg" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 20, pointerEvents: "none", ...styleOverride }}>
      {extendedIcons.map((icon, index) => {
        const size = 20 + Math.random() * 40;
        const direction = Math.random() < 0.5 ? 1 : -1; // Randomly choose left-to-right or right-to-left
        const style = {
          top: `${10 + Math.random() * 80}%`,
          left: `${10 + Math.random() * 80}%`,
          position: "absolute",
          fontSize: size,
          opacity: 1,
          userSelect: "none",
          filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))" // subtle glow for visibility
        };
        const Icon = icon.IconComponent;
        return (
          <motion.span
            key={index}
            style={style}
            initial={{ y: 0, x: 0 }}
            animate={{ y: [0, -30, 0], x: [0, 15 * direction, 0] }} // move left or right randomly
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
          >
            <Icon size={size} color={icon.color} />
          </motion.span>
        );
      })}
    </div>
  );
}

export default FloatingIcons;

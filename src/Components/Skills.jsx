import React from "react";
import { 
  SiNodedotjs, 
  SiAwsamplify, 
  SiMysql, 
  SiPostgresql, 
  SiMysql as SiSql, 
  SiMongodb, 
  SiDocker, 
  SiKubernetes, 
  SiGit, 
  SiReact, 
  SiJavascript 
} from "react-icons/si";

const skills = [
  { name: "Node.js", IconComponent: SiNodedotjs, color: "#339933" },
  { name: "AWS", IconComponent: SiAwsamplify, color: "#FF9900" },
  { name: "MySQL", IconComponent: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", IconComponent: SiPostgresql, color: "#336791" },
  { name: "SQL", IconComponent: SiSql, color: "#E38C00" },
  { name: "MongoDB", IconComponent: SiMongodb, color: "#47A248" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", IconComponent: SiKubernetes, color: "#326CE5" },
  { name: "Git", IconComponent: SiGit, color: "#F05032" },
  { name: "React", IconComponent: SiReact, color: "#61DAFB" },
  { name: "JavaScript", IconComponent: SiJavascript, color: "#F7DF1E" }
];

function Skills() {
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0,half);
  const secondHalf = skills.slice(half);

  // Duplicate arrays to create continuous scrolling effect
  const firstHalfExtended = [...firstHalf, ...firstHalf];
  const secondHalfExtended = [...secondHalf, ...secondHalf];

  return (
    <div id="skills" className="w-full">
      <section className="py-12 px-4 sm:px-10 md:px-20 w-full max-w-full box-border">
        <h2 className="text-3xl font-bold text-teal-500 mb-20 text-left">Skills</h2>
        <div className="overflow-hidden relative space-y-10">
          {/* First horizontal scroll left to right */}
          <div className="flex space-x-10 animate-scroll whitespace-nowrap">
            {firstHalfExtended.map((skill, index) => {
              const Icon = skill.IconComponent;
              return (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center bg-[#112240] rounded-md p-6 min-w-[100px] border-2 border-teal-500 shadow-[0_10px_15px_5px_rgba(20,184,166,0.7)]"
                >
                  <Icon className="h-20 w-20 mb-2" style={{ color: skill.color }} />
                  <span className="text-white font-semibold text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>
          {/* Second horizontal scroll right to left */}
          <div className="flex space-x-10 animate-scroll-reverse whitespace-nowrap">
            {secondHalfExtended.map((skill, index) => {
              const Icon = skill.IconComponent;
              return (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center bg-[#112240] rounded-md p-6 min-w-[100px] border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)]"
                >
                  <Icon className="h-20 w-20 mb-2" style={{ color: skill.color }} />
                  <span className="text-white font-semibold text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 10s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
}

export default Skills;

import React from "react";
import { useState } from "react";
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
  { name: "Node.js", IconComponent: SiNodedotjs, color: "#339933", lightColor: "#4CAF50" },
  { name: "AWS", IconComponent: SiAwsamplify, color: "#FF9900", lightColor: "#FFB84D" },
  { name: "MySQL", IconComponent: SiMysql, color: "#4479A1", lightColor: "#6CA0DC" },
  { name: "PostgreSQL", IconComponent: SiPostgresql, color: "#336791", lightColor: "#5B9BD5" },
  { name: "SQL", IconComponent: SiSql, color: "#E38C00", lightColor: "#FFD700" },
  { name: "MongoDB", IconComponent: SiMongodb, color: "#47A248", lightColor: "#8BC34A" },
  { name: "Docker", IconComponent: SiDocker, color: "#2496ED", lightColor: "#64B5F6" },
  { name: "Kubernetes", IconComponent: SiKubernetes, color: "#326CE5", lightColor: "#90CAF9" },
  { name: "Git", IconComponent: SiGit, color: "#F05032", lightColor: "#FF7043" },
  { name: "React", IconComponent: SiReact, color: "#61DAFB", lightColor: "#00B8D9" },
  { name: "JavaScript", IconComponent: SiJavascript, color: "#F7DF1E", lightColor: "#FFD600" }
];



function Skills() {
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  // Duplicate arrays to create continuous scrolling effect
  const firstHalfExtended = [...firstHalf, ...firstHalf];
  const secondHalfExtended = [...secondHalf, ...secondHalf];

  // Animation state
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  // Detect theme
  const [isLightTheme, setIsLightTheme] = useState(false);
  React.useEffect(() => {
    const body = document.body;
    const checkTheme = () => {
      setIsLightTheme(body.classList.contains('light-theme'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="w-full">
      <section className="py-24 px-8 sm:px-10 md:px-20 w-full max-w-full box-border">
        <h2 className="text-3xl font-bold text-teal-500 mb-20 text-left">Skills</h2>
        <div className="overflow-x-auto relative space-y-10">
          {/* First horizontal scroll left to right */}
          <div className="relative overflow-hidden">
            <div
              className={`flex space-x-10 whitespace-nowrap hide-scrollbar${paused ? '' : ' animate-scroll'} pr-16 sm:pr-20 md:pr-32`}
              onClick={() => setPaused((prev) => !prev)}
              style={{ cursor: 'pointer', minHeight: '200px', alignItems: 'center' }}
            >
              <>
                {firstHalfExtended.map((skill, index) => {
                  const Icon = skill.IconComponent;
                  return (
                      <div
                        key={index}
                        className="inline-flex flex-col items-center justify-center rounded-md p-6 min-w-[100px] border-2 transition-transform duration-300"
                        style={{
                          background: 'var(--color-card-bg)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text)',
                          boxShadow: '0 10px 15px 5px rgba(20,184,166,0.18)',
                          transform: hoveredIndex === index ? 'scale(1.13)' : 'scale(1)',
                          zIndex: hoveredIndex === index ? 2 : 1,
                        }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Icon
                        className="h-20 w-20 mb-2"
                        style={{
                          color: isLightTheme ? skill.lightColor : skill.color,
                        }}
                      />
                      <span
                        className="font-semibold text-sm"
                          style={{ color: 'var(--color-text)' }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
          {/* Second horizontal scroll right to left */}
          <div className="relative overflow-hidden">
            <div
              className={`flex space-x-10 whitespace-nowrap hide-scrollbar${paused ? '' : ' animate-scroll-reverse'} pr-16 sm:pr-20 md:pr-32`}
              onClick={() => setPaused((prev) => !prev)}
              style={{ cursor: 'pointer', minHeight: '200px', alignItems: 'center'}}
            >
              <>
                {secondHalfExtended.map((skill, index) => {
                  const Icon = skill.IconComponent;
                  return (
                      <div
                        key={index}
                        className="inline-flex flex-col items-center justify-center rounded-md p-6 min-w-[100px] border-2 transition-transform duration-300"
                        style={{
                          background: 'var(--color-card-bg)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-text)',
                          boxShadow: '0 0 15px 5px rgba(20,184,166,0.25)',
                          transform: hoveredIndex2 === index ? 'scale(1.13)' : 'scale(1)',
                          zIndex: hoveredIndex2 === index ? 2 : 1,
                        }}
                      onMouseEnter={() => setHoveredIndex2(index)}
                      onMouseLeave={() => setHoveredIndex2(null)}
                    >
                      <Icon
                        className="h-20 w-20 mb-2"
                        style={{
                          color: isLightTheme ? skill.lightColor : skill.color,
                        }}
                      />
                      <span
                        className="font-semibold text-sm"
                          style={{ color: 'var(--color-text)' }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </>
            </div>
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
            animation: scroll 7s linear infinite;
            animation-play-state: running;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 7s linear infinite;
            animation-play-state: running;
          }
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
      </section>
    </div>
  );
}
export default Skills;
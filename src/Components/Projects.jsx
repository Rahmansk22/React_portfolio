import React from "react";
import musicRecommendation from "../assets/projectimages/music-recommendation-sys.jpg";
import collegeChatBot from "../assets/projectimages/college-chatbot.jpg";
import detectPixelated from "../assets/projectimages/detect-pixelated-img.webp";
import timetableGenerator from "../assets/projectimages/time-table-generator.jpg";
import customGPT from "../assets/projectimages/custom-gpt.jpg";
import bookVerse from "../assets/projectimages/bookverse.jpg";
import dragonaii from "../assets/projectimages/dragonai.jpg";
import expenseTracker from "../assets/projectimages/expensetracker.jpg";

const projects = [
  {
    title: "Django Expense Tracker",
    description: "Expense Tracker",
    tags: ["Django", "React", "REST API", "Full Stack"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/Djano-Expense-tracker",
    imageUrl: expenseTracker,
  },
  {
    title: "Django Book Verse",
    description: "Book Verse",
    tags: ["Django", "Web App", "Backend", "Books"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/Django-Book-verse",
    imageUrl: bookVerse,
  },
  {
    title: "DragonAIi",
    description: "AI Chat",
    tags: ["AI", "Chat App", "Frontend", "React", "Next.js"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/chat-frontend",
    imageUrl: dragonaii,
  },
  {
    title: "Emo SYNC",
    description: "Music System",
    tags: ["Python", "Machine Learning"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/Music-recommendation-system",
    imageUrl: musicRecommendation,
  },
  {
    title: "College-ChatBot",
    description: "College Bot",
    tags: ["Python", "Chatbot", "NLP"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/College-ChatBot",
    imageUrl: collegeChatBot,
  },
  {
    title: "Detect PixelatedImage",
    description: "Image Detect",
    tags: ["Python", "Image Processing"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/DetectPixelatedImage_and_Correct_It",
    imageUrl: detectPixelated,
  },
  {
    title: "Timetable-Generator",
    description: "Schedule Maker",
    tags: ["Python", "Scheduler"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/Timetable-Generator",
    imageUrl: timetableGenerator,
  },
  {
    title: "Custom-GPT",
    description: "Private GPT",
    tags: ["Python", "GPT", "AI"],
    liveDemo: "",
    sourceCode: "https://github.com/Rahmansk22/private-gpt",
    imageUrl: customGPT,
  },
];

function Projects() {
  // Duplicate projects for continuous scrolling
  const projectsExtended = [...projects, ...projects, ...projects];
  const [paused, setPaused] = React.useState(false);

  return (
    <div id="projects" className="w-full">
      <section className="py-24 px-4 sm:px-10 md:px-20 w-full max-w-screen box-border">
        <h2 className="text-3xl font-bold text-teal-500 mb-20">Projects</h2>

        {/* 🔹 Scroll container — ONLY place that toggles pause */}
        <div
          id="projects-scroll-container"
          className="overflow-x-auto overflow-y-visible relative hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch", cursor: "pointer" }}
          onClick={() => setPaused((prev) => !prev)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 🔹 Animated row (NO onClick here) */}
          <div
            className="flex w-max space-x-20 whitespace-nowrap animate-scroll"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {projectsExtended.map((project, index) => (
              <div
                key={index}
                className="project-card inline-block min-w-[280px] max-w-xs border-2 border-teal-500 shadow-[0_10px_15px_5px_rgba(20,184,166,0.9)] rounded-md p-6 text-white transition-transform duration-300 hover:scale-105 align-top cursor-pointer"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  background: "var(--color-card-bg)",
                }}
                // 🔥 Stop bubbling so pause does NOT toggle again
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />

                <h3 className="text-xl font-semibold text-teal-500 mb-2 break-words">
                  {project.title}
                </h3>

                <p className="mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#233554] rounded-full px-3 py-1 text-sm text-teal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.sourceCode, "_blank");
                    }}
                    className="text-cyan-400 hover:underline flex items-center gap-1 bg-transparent border-none cursor-pointer"
                    aria-label={`Open source code for ${project.title}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                    </svg>
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

import React from "react";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
      <div
        className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full p-1 mb-2"
        style={{
          borderRadius: "9999px",
          border: "4px solid #14b8a6",
          boxShadow: "0 0 15px 5px rgba(20, 184, 166, 0.9)",
          backgroundColor: "#0a192f",
        }}
      >
        <img
          src="/profile.webp"
          alt="Profile"
          className="relative rounded-full w-full h-full object-cover"
          style={{ filter: "none" }}
        />
      </div>
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 11ch }
          }
          @keyframes blink-caret {
            50% { border-color: transparent }
            100% { border-color: #14b8a6 }
          }
          .typing-effect {
            overflow: hidden;
            white-space: nowrap;
            border-right: 4px solid #14b8a6;
            font-weight: 700;
            font-size: 2.5rem;
            color: #14b8a6;
            text-shadow: 0 0 10px rgba(20, 184, 166, 0.8);
            animation: typing 3s steps(11) forwards, blink-caret 0.75s step-end infinite;
            max-width: 11ch;
            margin: 30px auto 20px auto;
          }
        `}
      </style>
      <div className="typing-effect">
        I'm RAHMAN
      </div>
      <h2
        className="text-2xl sm:text-3xl font-medium mb-6 text-center m-2 text smoke-white"
        style={{
          animation: "fadeIn 3s ease-in forwards",
          opacity: 0,
        }}
      >
        Software Developer & Full Stack Developer
      </h2>
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <a
        href="/Resume.pdf"
        download
        style={{
          backgroundColor: "rgba(20,184,166,0.9)",
          color: "var(--color-bg)",
          boxShadow: "0 4px 6px rgba(20,184,166,0.7), 0 0 15px rgba(20,184,166,0.9)",
          transform: "translateZ(20px)",
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
          marginTop: "1rem",
          textAlign: "center",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          textDecoration: "none",
        }}
        className="hover:bg-teal-600 transition-transform duration-300"
      >
        Download Resume🗂️⤓
      </a>
    </div>
  );
};

export default HeroSection;

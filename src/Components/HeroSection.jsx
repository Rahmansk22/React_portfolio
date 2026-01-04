import React from "react";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen w-full p-4 pt-16 sm:pt-20 md:pt-24 bg-transparent">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 animate-profile-float" style={{marginTop: '8px'}}>
        <div className="absolute inset-0 rounded-full z-0 hero-img-bg" />
        <div className="absolute inset-0 rounded-full z-10 hero-img-glass" />
        <img
          src="/profile.webp"
          alt="Profile"
          className="relative rounded-full w-full h-full object-cover z-20 hero-img"
        />
      </div>
      <style>{`
        .hero-img-bg {
          background: linear-gradient(135deg, #14b8a6 0%, #6a82fb 100%);
          filter: blur(8px) opacity(0.7);
          box-shadow: 0 0 32px 8px #14b8a6, 0 0 64px 16px #6a82fb;
        }
        .hero-img-glass {
          background: rgba(255,255,255,0.10);
          border: 3.5px solid rgba(20,184,166,0.7);
          box-shadow: 0 4px 32px 0 rgba(20,184,166,0.18);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }
        .hero-img {
          border: 2.5px solid rgba(255,255,255,0.18);
          box-shadow: 0 2px 24px 0 #14b8a6, 0 0 32px 8px #6a82fb;
        }
        .light-theme .hero-img-bg {
          background: linear-gradient(135deg, #ffe066 0%, #14b8a6 100%);
          box-shadow: 0 0 32px 8px #ffe066, 0 0 64px 16px #14b8a6;
        }
        .light-theme .hero-img-glass {
          background: rgba(255,255,255,0.18);
          border: 3.5px solid #ffe066;
          box-shadow: 0 4px 32px 0 #ffe06644;
        }
        .light-theme .hero-img {
          border: 2.5px solid #ffe06644;
          box-shadow: 0 2px 24px 0 #ffe066, 0 0 32px 8px #14b8a6;
        }
        @keyframes profile-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px) scale(1.03); }
        }
        .animate-profile-float {
          animation: profile-float 3.5s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
        .gradient-text {
          background: linear-gradient(90deg, #14b8a6 10%, #6a82fb 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          filter: drop-shadow(0 2px 16px #14b8a6aa);
        }
        .glass-btn {
          background: rgba(255,255,255,0.12);
          border: 2.5px solid #14b8a6;
          box-shadow: 0 4px 24px 0 #14b8a6, 0 0 32px 8px #6a82fb;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #14b8a6;
          font-weight: 700;
          font-size: 1.15rem;
          border-radius: 0.75rem;
          padding: 0.85rem 2.2rem 0.85rem 2.7rem;
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          transition: box-shadow 0.3s, background 0.3s, color 0.3s, transform 0.2s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .glass-btn:hover, .glass-btn:focus-visible {
          background: rgba(20,184,166,0.18);
          color: #fff;
          box-shadow: 0 8px 32px 0 #6a82fb, 0 0 48px 12px #14b8a6;
          transform: scale(1.04) translateY(-2px);
        }
        .resume-icon {
          width: 1.7em;
          height: 1.7em;
          display: inline-block;
          vertical-align: middle;
          filter: drop-shadow(0 0 8px #6a82fb88);
          animation: icon-bounce 1.2s infinite alternate cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes icon-bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px) scale(1.08); }
        }
      `}</style>
      <h1 className="gradient-text text-4xl sm:text-5xl font-extrabold text-center fade-in-up" style={{letterSpacing: '0.03em'}}>I'm RAHMAN</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center fade-in-up" style={{animationDelay: '0.4s', animationDuration: '1.3s', color: 'var(--main-text)'}}>Software Developer & Full Stack Developer</h2>
      <a
        href="/Resume.pdf"
        download
        className="glass-btn fade-in-up mt-4 sm:mt-6"
        style={{animationDelay: '0.7s', animationDuration: '1.2s'}}
        aria-label="Download Resume"
      >
        <span className="resume-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="3" width="18" height="26" rx="4" fill="#fff" fillOpacity="0.13" stroke="#14b8a6" strokeWidth="2.2"/>
            <path d="M16 10v10M16 20l-4-4m4 4l4-4" stroke="#14b8a6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="11" y="6" width="10" height="2.5" rx="1.2" fill="#6a82fb"/>
          </svg>
        </span>
        Download Resume
      </a>
    </div>
  );
};

export default HeroSection;

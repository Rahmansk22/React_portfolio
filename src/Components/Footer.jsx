import React, { useState, useEffect } from "react";

function Footer() {
  const [clicked, setClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000); // message visible for 4 seconds
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setShowMessage(true);
    }
  };

  return (
    <>
      <footer className="w-full bg-[#0a192f] text-teal-500 border-t border-teal-500 flex items-center justify-center gap-2 relative py-4">
        &copy; {new Date().getFullYear()} All rights reserved.
        <button
          onClick={handleClick}
          aria-label="Like"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            padding: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={clicked ? "red" : "none"}
            stroke="red"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </footer>
      {showMessage && (
        <div className="fixed top-0 right-0 mt-4 mr-4 bg-black text-white px-6 py-3 rounded-md shadow-lg animate-popup z-50">
          Thanks for loving it😍🎉!
          <span className="absolute top-0 left-0 w-full h-1 border-t-4 border-green-500 animate-line"></span>
          <span className="absolute top-0 right-0 w-1 h-full border-r-4 border-green-500 animate-line-delay"></span>
          <span className="absolute bottom-0 left-0 w-full h-1 border-b-4 border-green-500 animate-line-delay2"></span>
          <span className="absolute top-0 left-0 w-1 h-full border-l-4 border-green-500 animate-line-delay3"></span>
        </div>
      )}
      <style>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        @keyframes line-move-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes line-move-vertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-popup {
          animation: popup 4s ease forwards;
        }
        .animate-line {
          animation: line-move-horizontal 2s linear 1s forwards;
          border-top-style: solid;
        }
        .animate-line-delay {
          animation: line-move-vertical 2s linear 1s forwards;
          border-right-style: solid;
        }
        .animate-line-delay2 {
          animation: line-move-horizontal 2s linear 1s forwards;
          border-bottom-style: solid;
        }
        .animate-line-delay3 {
          animation: line-move-vertical 2s linear 1s forwards;
          border-left-style: solid;
        }
      `}</style>
    </>
  );
}

export default Footer;

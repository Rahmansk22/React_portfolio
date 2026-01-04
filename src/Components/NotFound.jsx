import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a192f] text-teal-400">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <a href="/" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">Go Home</a>
    </div>
  );
}

export default NotFound;

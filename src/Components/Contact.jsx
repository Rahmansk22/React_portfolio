import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xeogvqqn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
          // Redirect to Formspree or another page if needed
          // window.location.href = "https://formspree.io/f/xeogvqqn";
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  if (submitted) {
    return (
      <div id="contact" className="px-6 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">Thank you for your message!</h2>
        <p className="text-white">I will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <div id="contact" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-500 mb-20">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#112240] rounded-md p-6 shadow-md">
          <h3 className="text-xl font-semibold text-teal-500 mb-4">Get in touch</h3>
          <p className="text-white flex items-center gap-2 mb-10 group cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-400 group-hover:text-teal-400 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M25 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
            <span className="group-hover:text-orange-500 transition-colors duration-300">ar22060426@gmail.com</span>
          </p>
          <h4 className="text-teal-500 font-semibold mb-10">Connect me with</h4>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-6 cursor-pointer text-white hover:text-cyan-400">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                </svg>
                <span>Connect me on GitHub</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 cursor-pointer text-white hover:text-cyan-400">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 0-2.151 1.454-2.151 2.959v5.706h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v5.605z" />
                </svg>
                <span>Connect me on LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 cursor-pointer text-white hover:text-cyan-400">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.928 0 .386.044.762.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.834-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.317-3.808 2.103-6.115 2.103-.397 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>Connect me on Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xeogvqqn"
          method="POST"
          className="bg-[#112240] rounded-md p-6 border-2 border-teal-500 shadow-[0_0_15px_5px_rgba(20,184,166,0.9)] flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold text-teal-500 mb-4">Send a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-[#0a192f] text-white rounded-md p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-[#0a192f] text-white rounded-md p-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="bg-[#0a192f] text-white rounded-md p-2 resize-none"
          />
          <button
            type="submit"
            className="bg-teal-500 text-smoke-white font-semibold py-2 rounded-md hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

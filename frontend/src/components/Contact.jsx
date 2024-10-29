import * as Icons from "react-bootstrap-icons";
import React, { useEffect } from "react";

const Contact = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
    sr.reveal("#content-2", { delay: 2000, origin: "bottom" });
  }, [sr]);

  return (
    <div className="contact h-screen bg-[#081325] text-gray-300 flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
      <div className="pb-6 text-center">
        <h2
          id="text"
          className="text-4xl font-bold inline border-b-4 border-pink-600"
        >
          Contact
        </h2>
        <p id="content" className="mt-4 mb-3 text-lg max-w-prose mx-auto">
          Feel free to reach out! Whether you have a question, want to
          collaborate, or just say hi, I'll be happy to chat.
        </p>
      </div>
      <div id="content-2" className="social-media-icons flex space-x-8">
        {/* Instagram */}
        <div className="relative group">
          <a
            href="https://www.instagram.com/patrycjabochnak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <Icons.Instagram size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-300">
            Instagram
          </span>
        </div>
        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <Icons.Linkedin size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-300">
            LinkedIn
          </span>
        </div>
        {/* GitHub */}
        <div className="relative group">
          <a
            href="https://github.com/PatrycjaBochnak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition duration-300"
          >
            <Icons.Github size={40} />
          </a>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all text-gray-300">
            GitHub
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

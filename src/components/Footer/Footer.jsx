import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Laxmi Poojari</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {["about", "skills", "experience", "work", "education", "contact"].map(
            (id) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className="hover:text-purple-500 text-sm sm:text-base my-1"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            )
          )}
        </nav>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a
            href="https://github.com/Laxmipujari39"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/laxmi-poojari-162b06319/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_.laxmi_poojari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Laxmi Poojari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

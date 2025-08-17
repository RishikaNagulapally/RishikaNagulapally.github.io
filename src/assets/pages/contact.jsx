import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- Desktop & Tablet View --- */}
        <div className="hidden sm:block">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Let's Connect 🤝
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto text-center leading-relaxed">
            Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <a
              href="mailto:rishikareddynagulapally@gmail.com"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300 text-center min-w-[180px]"
            >
              📬 Email Me
            </a>
            <a
              href=""
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 transition duration-300 text-center min-w-[180px]"
            >
              💼 View Projects
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-3xl mb-10">
            <a
              href="https://www.linkedin.com/in/rishika-reddy-9744a7298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition-colors duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RishikaNagulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rishikareddynagulapally@gmail.com"
              className="hover:text-[#d44638] transition-colors duration-200 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/rishikareddie__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e4405f] transition-colors duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rishikareddy.nagulapally.5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877f2] transition-colors duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          <p className="text-center text-sm text-gray-400 select-none">
            © {new Date().getFullYear()} Rishika.
          </p>
        </div>

        {/* --- Mobile View --- */}
        <div className="block sm:hidden">
          <h2 className="text-2xl font-bold mb-5 px-4 text-left">
            Let's Connect 🤝
          </h2>

          <p className="text-gray-300 text-sm mb-8 px-4 text-left leading-relaxed">
            Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
          </p>

          <div className="flex flex-col gap-4 mb-8 px-4">
            <a
              href="mailto:rishikareddynagulapally@gmail.com"
              className="bg-white text-black py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300 text-center w-full"
            >
              📬 Email Me
            </a>
            <a
              href=""
              className="bg-gray-800 text-white py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 transition duration-300 text-center w-full"
            >
              💼 View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 text-4xl mb-8 px-4">
            <a
              href="https://www.linkedin.com/in/rishika-reddy-9744a7298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition-colors duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RishikaNagulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rishikareddynagulapally@gmail.com"
              className="hover:text-[#d44638] transition-colors duration-200 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/rishikareddie__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e4405f] transition-colors duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rishikareddy.nagulapally.5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877f2] transition-colors duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Centered Name and Year */}
          <p className="text-center text-sm text-gray-400 select-none">
            © {new Date().getFullYear()} Rishika
          </p>
        </div>
      </div>
    </footer>
  );
}

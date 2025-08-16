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
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#e8e0f4] to-[#fce3e1] text-gray-800 py-12 px-6 mt-20 mb-20 sm:mb-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* --- Desktop & Tablet View --- */}
        <div className="hidden sm:block">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1e2746] text-center">
            Let's Connect 🤝
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-xl mx-auto text-center leading-relaxed">
            Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <a
              href="mailto:rishikareddynagulapally@gmail.com"
              className="bg-[#ff8357] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#ff6b3c] transition duration-300 text-center min-w-[180px]"
            >
              📬 Email Me
            </a>
            <a
              href=""
              className="bg-[#1e2746] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#2f3d6c] transition duration-300 text-center min-w-[180px]"
            >
              💼 View Projects
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-3xl mb-10">
            <a
              href="https://www.linkedin.com/in/rishika-reddy-9744a7298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RishikaNagulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:advaitkasturi20@gmail.com"
              className="text-[#d44638] hover:scale-110 transition-transform duration-200"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/rishikareddie__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e4405f] hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rishikareddy.nagulapally.5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877f2] hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:scale-110 transition-transform duration-200"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          <p className="text-center text-sm text-gray-500 select-none">
            © {new Date().getFullYear()} Rishika.
          </p>
        </div>

        {/* --- Mobile View --- */}
        <div className="block sm:hidden">
          <h2 className="text-2xl font-bold mb-5 text-[#1e2746] text-center px-4">
            Let's Connect 🤝
          </h2>

          <p className="text-gray-700 text-sm mb-8 px-6 text-center leading-relaxed">
            Whether you have a question, want to collaborate, or just say hi — my inbox is always open!
          </p>

          <div className="flex flex-col gap-4 mb-8 px-6">
            <a
              href="mailto:advaitkasturi20@gmail.com"
              className="bg-[#ff8357] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#ff6b3c] transition duration-300 text-center w-full"
            >
              📬 Email Me
            </a>
            <a
              href=""
              className="bg-[#1e2746] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#2f3d6c] transition duration-300 text-center w-full"
            >
              💼 View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 text-4xl mb-8 px-6">
            <a
              href="https://www.linkedin.com/in/rishika-reddy-9744a7298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RishikaNagulapally"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rishikareddynaguapally@gmail.com"
              className="text-[#d44638] hover:scale-110 transition-transform duration-200"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/rishikareddie__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e4405f] hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rishikareddy.nagulapally.5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877f2] hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:scale-110 transition-transform duration-200"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          <p className="text-center text-sm text-gray-500 select-none px-6">
            © {new Date().getFullYear()} Rishika.
          </p>
        </div>
      </div>
    </footer>
  );
}

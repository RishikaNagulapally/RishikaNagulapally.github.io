import React, { useState, useEffect } from "react";
import { Home, Code, Briefcase, User, Mail, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // for mobile dropdown

  const navLinks = [
    { name: "Home", href: "#home", icon: <User size={20} /> },
    { name: "Experience", href: "#experience", icon: <Home size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
    { name: "The Competitive Edge", href: "/hack", icon: <Code size={20} /> },
  ];

  useEffect(() => {
    const hash = location.hash ? location.hash.substring(1) : null;
    const pathname = location.pathname;

    if (pathname === "/hack") {
      setActive("The Competitive Edge");
    } else if (hash) {
      const found = navLinks.find((link) =>
        link.href.toLowerCase().includes(`#${hash.toLowerCase()}`)
      );
      setActive(found ? found.name : "Home");
    } else {
      setActive("Home");
    }
  }, [location]);

  const handleLinkClick = async (name, href, e) => {
    e.preventDefault();
    setActive(name);
    setIsOpen(false); // close dropdown on mobile after click

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: false });

        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black px-12 py-5 shadow-lg">
        <div className="flex justify-center items-center max-w-6xl mx-auto">
          <div className="flex space-x-20 relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`relative flex items-center text-lg font-semibold text-gray-300 cursor-pointer
                  transition duration-300 ease-in-out transform
                  hover:text-orange-400 hover:scale-105 focus:text-orange-400
                  ${active === link.name ? "text-orange-500 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)] scale-105" : ""}
                `}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 text-orange-500 font-mono text-base select-none drop-shadow-[0_0_4px_rgba(255,140,0,0.8)]">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Top with Dropdown) */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <span className="text-lg font-bold text-orange-500">Rishika</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-orange-500"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="flex flex-col space-y-2 px-4 pb-4 bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`text-gray-300 font-medium transition duration-200
                  hover:text-orange-400
                  ${active === link.name ? "text-orange-500 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)]" : ""}
                `}
              >
                <span>{link.name}</span>
                {active === link.name && (
                  <span className="ml-1 text-orange-500 font-mono text-sm select-none">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Home, Code, Briefcase, User, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home", icon: <User size={24} /> },
    { name: "Experience", href: "#experience", icon: <Home size={24} /> },
    { name: "Skills", href: "#skills", icon: <Code size={24} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={24} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={24} /> },
    { name: "The Competitive Edge", href: "/hack", icon: <Code size={24} /> },
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
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-[0_0_20px_rgba(255,140,0,0.3)] px-12 py-5">
        <div className="flex justify-center items-center max-w-6xl mx-auto relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-orange-600/20 via-orange-400/10 to-orange-600/20 blur-lg opacity-30"
          ></div>

          <div className="flex space-x-20 relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`relative flex items-center text-lg font-semibold text-gray-300 cursor-pointer
                  transition duration-300 ease-in-out transform
                  hover:text-orange-400 hover:scale-105 focus:text-orange-400
                  ${
                    active === link.name
                      ? "text-orange-500 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)] scale-105"
                      : ""
                  }
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

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-t border-orange-600 shadow-[0_0_20px_rgba(255,140,0,0.8)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-orange-500/50 to-transparent pointer-events-none"></div>

        <div className="flex justify-around items-center max-w-full px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(link.name, link.href, e)}
              className={`flex flex-col items-center justify-center cursor-pointer text-gray-300 transition duration-250 ease-in-out
                hover:text-orange-500 focus:text-orange-500
                ${
                  active === link.name
                    ? "text-orange-500 drop-shadow-[0_0_8px_rgba(255,140,0,0.85)]"
                    : ""
                }
              `}
              aria-current={active === link.name ? "page" : undefined}
            >
              <div
                className={`transition-transform duration-300 ${
                  active === link.name ? "scale-110" : "scale-100"
                }`}
              >
                {link.icon}
              </div>
              <span className="text-[10px] font-semibold mt-1 leading-tight">{link.name}</span>
              <span
                className={`block w-5 h-[2px] bg-orange-500 rounded-full mt-0.5 transition-all duration-300 ${
                  active === link.name ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

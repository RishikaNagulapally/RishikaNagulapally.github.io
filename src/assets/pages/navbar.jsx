import React, { useState, useEffect } from "react";
import { Home, Code, Briefcase, User, Mail, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <User size={20} /> },
    { name: "Experience", href: "#experience", icon: <Home size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code size={20} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
    { name: "The Competitive Edge", href: "/hack", icon: <Code size={20} /> },
  ];

  /* ===================== SCROLL SPY ===================== */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.substring(1));

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const activeLink = navLinks.find(
            (l) => l.href === `#${sectionIds[i]}`
          );
          if (activeLink) setActive(activeLink.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* ===================== ROUTE CHANGE ===================== */
  useEffect(() => {
    if (location.pathname === "/hack") {
      setActive("The Competitive Edge");
    }
  }, [location.pathname]);

  const handleLinkClick = (name, href, e) => {
    e.preventDefault();
    setActive(name);
    setIsOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-black px-12 py-5 shadow-lg">
        <div className="flex justify-center max-w-6xl mx-auto">
          <div className="flex space-x-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`relative text-lg font-semibold transition duration-300 ease-in-out
                  hover:text-orange-400 hover:scale-105
                  ${
                    active === link.name
                      ? "text-orange-500 scale-105 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)]"
                      : "text-gray-300"
                  }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 text-orange-500 font-mono select-none drop-shadow-[0_0_4px_rgba(255,140,0,0.8)]">
                    {"</>"}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
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

        {isOpen && (
          <div className="flex flex-col space-y-3 px-4 pb-4 bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                className={`font-medium transition
                  ${
                    active === link.name
                      ? "text-orange-500 drop-shadow-[0_0_6px_rgba(255,140,0,0.7)]"
                      : "text-gray-300 hover:text-orange-400"
                  }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="ml-2 text-orange-500 font-mono text-sm select-none">
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

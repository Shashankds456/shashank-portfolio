import { useState } from "react";
import { NavLink } from "react-router-dom";
import portfolioData from "../data/portfolioData";

const navItems = [
  { name: "Home", path: "/" },
  { name: "My Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-wider text-white"
        >
          {portfolioData.personal.name}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop GitHub */}
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition hover:border-white/50 hover:text-white md:block"
        >
          GitHub ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-xl border border-white/10 px-3 py-2 text-xl text-gray-300 transition hover:border-white/30 hover:text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 pb-6 pt-4 md:hidden">

          <div className="flex flex-col">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/5 py-3.5 text-sm transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile GitHub */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
            >
              GitHub ↗
            </a>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const navLinks = [
    { name: "Home", path: "" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-white shadow-2xl shadow-gray-600 w-[80%] mx-auto items-center rounded-2xl sticky z-50 top-0 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between">
          <div className="w-full h-full flex items-center">
            <img
              className="w-10 h-10 object-contain mix-blend-multiply" // 'mix-blend-multiply' hides white backgrounds
              src="https://i.pinimg.com/1200x/e4/70/de/e470de2191b7d18eaebed27824e037ee.jpg"
              alt="logo"
            />
          </div>
          <nav>
            <div className="hidden sm:flex items-center gap-4 lg:gap-10 font-bold text-gray-800 hover:text-[18px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group flex items-center gap-1.5 py-2 px-4 rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm hover:text-indigo-600 text-[11px] lg:text-[15px] whitespace-nowrap"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="bx bxs-circle text-[6px]"></i>
                  </span>

                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;

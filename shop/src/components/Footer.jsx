import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-gray-950 dark:text-white">
              ANDY SHOP.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Premium apparel for the modern individual. Quality, comfort, and
              style delivered to your doorstep.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon="bx bxl-facebook" />
              <SocialIcon icon="bx bxl-instagram" />
              <SocialIcon icon="bx bxl-twitter" />
              <SocialIcon icon="bx bxl-tiktok" />
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <FooterGroup
              title="Collection"
              links={["Men's Wear", "Women's Wear", "New Arrivals", "Trending"]}
            />
            <FooterGroup
              title="Company"
              links={["About Us", "Contact", "Careers", "Terms"]}
            />
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-950 dark:text-white uppercase text-xs tracking-widest">
              Stay Updated
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-0 py-3 text-sm outline-none focus:border-black dark:focus:border-white transition-all"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xl hover:translate-x-1 transition-transform">
                <i className="bx bx-right-arrow-alt dark:text-white"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
            © {new Date().getFullYear()} ANDY SHOP DESIGN.
          </p>
          <div className="flex items-center gap-6">
            <i className="bx bxl-visa text-3xl text-gray-400"></i>
            <i className="bx bxl-mastercard text-3xl text-gray-400"></i>
            <i className="bx bxl-paypal text-3xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-component for Social Icons using Boxicons
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-gray-400 border border-gray-100 dark:border-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition-all"
  >
    <i className={icon}></i>
  </a>
);

const FooterGroup = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="font-bold text-gray-950 dark:text-white uppercase text-xs tracking-widest">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

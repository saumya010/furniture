"use client";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 bg-white">
      <nav className="container mx-auto py-10">
        <div className="flex items-center justify-between relative">
          <div className="pl-6 text-xl font-bold">
            <a
              href="/"
              className="text-xl text-[var(--primary-color)] [font-family:var(--font-family-heading)] sm:text-3xl"
            >
              <span>Home Comforts</span>
            </a>
          </div>
          <button
            id="mobile-menu-button"
            type="button"
            className="pr-6 text-[var(--dark-text-color)] lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded={menuOpen}
            aria-label="Navigation Menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i
              className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} feather feather-menu`}
              aria-hidden="true"
            ></i>
          </button>
          <div
            id="navigation-menu"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full mt-4 w-full flex-col bg-white pb-4 lg:static lg:mt-0 lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:pb-0`}
          >
            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a href="#about" onClick={closeMenu} className="text-[var(--dark-text-color)]">
                  About Us
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a href="#gallery" onClick={closeMenu} className="text-[var(--dark-text-color)]">
                  Products
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a href="#contact" onClick={closeMenu} className="text-[var(--dark-text-color)]">
                  Customization
                </a>
              </li>
            </ul>
            <div className="flex mt-4 flex-col lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

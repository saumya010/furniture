import React from "react";

const Header = () => {
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
            data-collapse-toggle="navigation-menu"
            type="button"
            className="pr-6 text-[var(--dark-text-color)] lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <i
              className="fa-regular fa-bars feather feather-menu"
              aria-hidden="true"
            ></i>
          </button>
          <div
            id="navigation-menu"
            className="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:pb-0"
          >
            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a href="/about-us" className="text-[var(--dark-text-color)]">
                  About Us
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <div className="group relative">
                  <button
                    type="button"
                    className="flex items-center text-[var(--dark-text-color)] cursor-pointer lg:justify-center"
                  >
                    <span>Products</span>
                    <i
                      className="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <a
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/products?filter=chairs"
                      >
                        Chairs
                      </a>
                      <a
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/products?filter=recliners"
                      >
                        Recliners
                      </a>
                      <a
                        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/products?filter=sofas"
                      >
                        Sofas
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a
                  href="/customization"
                  className="text-[var(--dark-text-color)]"
                >
                  Customization
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a
                  href="/made-in-usa"
                  className="text-[var(--dark-text-color)]"
                >
                  Made in the USA
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <a
                  href="/customer-stories"
                  className="text-[var(--dark-text-color)]"
                >
                  Customer Stories
                </a>
              </li>
            </ul>
            <div className="flex mt-4 flex-col lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
              <a
                href="/signin"
                className="px-4 py-2 text-[var(--dark-text-color)]"
              >
                Sign In
              </a>
              <a
                href="/products"
                className="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

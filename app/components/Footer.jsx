import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 bg-[var(--light-background-color)]">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center pt-12 text-left text-xl font-bold md:justify-start lg:pt-20">
          <a
            href="/"
            className="text-xl [font-family:var(--font-family-heading)]"
          >
            <span>Home Comforts</span>
          </a>
        </div>
        <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:space-x-24">
          <div className="mb-8">
            <p className="text-center text-xs md:text-left">
              The Power of Best. It’s all yours! When you shop for a chair,
              recliner or sofa, you’re buying more than a piece of furniture.
              You’re transforming a house into a home, pulling a room together,
              and picking out an heirloom to pass down for generations. At Best
              Home Furnishings, we know no two chairs will be used the same way.
              That’s why we build furniture that’s fully customizable to fit
              your life, style, and space. When you buy from Best, you’re
              supporting local families and communities in the USA. You’re also
              taking home the chair, sofa or recliner of your dreams. Because
              from start to finish - It’s all yours.
            </p>
            <div className="my-8 flex flex-row justify-center md:justify-start">
              <a href="/" className="mx-2" aria-label="Visit our Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="/" className="mx-2" aria-label="Visit our Twitter">
                <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
              </a>
              <a href="/" className="mx-2" aria-label="Visit our LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="mb-8 space-y-3">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <a href="/about-us">About Us</a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <a href="/products">Products</a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <a href="/customization">Customization</a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <a href="/made-in-usa">Made in the USA</a>
            </div>
          </div>
          <div className="mb-8 space-y-3">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <p>456 Design Avenue, Denver, CO, 80203</p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <p>(720) 555-4321</p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <p>contact@luxuryinteriors.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-12 text-center text-sm">
        © 2025 Home Comforts, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex h-[700px] w-full px-6 pt-48 text-center md:px-12 lg:px-24 xl:px-52 code-section"
      id="snlmsb"
    >
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-75 hero-image"
        data-landingsite-gallery-type="image"
        data-seo-image=""
        data-media='{"id":"2112749005","src":"iStock","type":"image"}'
      ></div>
      <div className="z-10 h-full w-full max-w-3xl md:w-3/4 md:pr-12 lg:w-1/2">
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-3xl font-semibold text-[var(--light-text-color)] [font-family:var(--font-family-heading)] sm:text-3xl md:pr-28 md:text-5xl">
            Transform Your Home
          </h1>
          <p className="mb-8 text-lg text-[var(--light-text-color)]">
            Elevate your living environment with furniture tailored to your
            unique style and lifestyle. Every piece at Best Home Furnishings is
            crafted with you in mind, ensuring endless customization
            possibilities to perfectly suit your home. From chic recliners to
            sophisticated sofas, our furniture serves both function and legacy.
          </p>
          <div>
            <a
              href="/products"
              className="inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
            >
              <span>Explore Our Collection</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

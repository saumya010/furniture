import React from "react";
import Image from "next/image";
import AboutImage from "../assets/images/furniture-about.webp";

const About = () => {
  return (
    <section className="mt-8">
      <div className="container mx-auto px-6 pt-12 md:mt-2 md:pt-12">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="relative lg:w-1/2 xl:w-1/3">
            <div className="absolute -left-24 -top-12 h-full w-full rounded-bl-[115px] rounded-br-[0px] rounded-tl-[0px] rounded-tr-[47px] bg-[var(--light-background-color)]"></div>
            <Image
              className="bl-3xl relative z-10 mx-auto h-full rounded-bl-[40px] rounded-br-[76px] rounded-tl-[104px] rounded-tr-[45px] object-cover lg:h-1/2 xl:h-full"
              src={AboutImage}
              alt="About"
              data-landingsite-gallery-type="image"
            />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 xl:w-2/3">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-left md:text-5xl md:leading-[64px]">
              Elevate Your Home with Customized Furniture
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">
              Transform your living space into a sanctuary with furniture that
              reflects your unique style and personality. Each piece from Best
              Home Furnishings is designed for versatility, ensuring it fits
              seamlessly into your lifestyle.
            </p>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">
              Imagine customizing your chair, recliner, or sofa to embody your
              personal taste. Our furniture is crafted to become cherished
              heirlooms, bringing joy and comfort for generations.
            </p>
            <ul className="mb-12 list-disc pl-6 text-xl">
              <li className="mb-3">
                Quality craftsmanship that lasts through the years
              </li>
              <li className="mb-3">
                Fully customizable options to fit your needs
              </li>
              <li className="mb-3">
                Support local families and communities with each purchase
              </li>
              <li>Invest in timeless pieces that tell your story</li>
            </ul>
            <div className="flex justify-center md:block">
              <a
                href="/products"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                Discover Our Customization Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import User1 from "../assets/images/user-1.jpg";
import User2 from "../assets/images/user-2.jpg";
import User3 from "../assets/images/user-3.jpg";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-[34rem] relative flex flex-row rounded-2xl bg-[#ffffff] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:w-96">
      <div className="absolute -top-6 right-5">
        <i
          className="fa-solid fa-quote-right text-6xl text-[var(--primary-color)]"
          aria-hidden="true"
        ></i>
      </div>
      <div className="absolute -bottom-6 left-5">
        <i
          className="fa-solid fa-quote-left text-6xl text-[var(--primary-color)]"
          aria-hidden="true"
        ></i>
      </div>
      <div className="h-full w-[70px]">
        <Image
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={image}
          alt={title}
          data-landingsite-gallery-type="image"
          data-testimonial-image=""
          data-dont-replace=""
        />
      </div>
      <div className="flex-1 p-6 pt-0">
        <div className="text-sm">{title}</div>
        <div className="mb-4">
          <i
            className="fa-solid fa-star fa-xs text-yellow-500"
            aria-hidden="true"
          ></i>
          <i
            className="fa-solid fa-star fa-xs text-yellow-500"
            aria-hidden="true"
          ></i>
          <i
            className="fa-solid fa-star fa-xs text-yellow-500"
            aria-hidden="true"
          ></i>
          <i
            className="fa-solid fa-star fa-xs text-yellow-500"
            aria-hidden="true"
          ></i>
          <i
            className="fa-solid fa-star fa-xs text-yellow-500"
            aria-hidden="true"
          ></i>
        </div>
        <div className="text-[var(--dark-text-color)]">{description}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="bg-gradient-to-b from-[var(--light-background-color)] code-section"
      id="sghjl9c"
    >
      <div className="container mx-auto mt-8 px-6 pb-12 pt-8 md:mt-20 md:pb-24 md:pt-20">
        <div className="mb-3 text-center text-3xl font-semibold [font-family:var(--font-family-heading)] md:text-5xl">
          Our Satisfied Customers
        </div>
        <div className="mb-12 text-center text-sm text-gray-500">
          Discover how our furniture has transformed homes
        </div>
        <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-20 lg:space-y-0">
          <Card
            image={User1}
            title="Emily Rose"
            description="Choosing Best Home Furnishings was the best decision! My chair perfectly complements my living space and adapts to my lifestyle."
          />
          <Card
            image={User2}
            title="David Lee"
            description="The customization options available allowed me to create a sofa that fits perfectly in my living room. The quality is outstanding!"
          />
          <Card
            image={User3}
            title="Jon Doe"
            description="The craftsmanship in my new recliner is exceptional. I love how it's tailored to my preferences and enhances my living experience!"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

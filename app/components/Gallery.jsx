import React from "react";
import Image from "next/image";
import Gallery1 from "../assets/images/gallery-1.webp";
import Gallery2 from "../assets/images/gallery-2.webp";
import Gallery3 from "../assets/images/gallery-3.webp";
import Gallery4 from "../assets/images/gallery-4.webp";
import Gallery5 from "../assets/images/gallery-5.webp";
import Gallery6 from "../assets/images/gallery-6.webp";
import Gallery7 from "../assets/images/gallery-7.webp";
import Gallery8 from "../assets/images/gallery-8.webp";

const Item = ({ image, title, description }) => {
  return (
    <div className="flex flex-col">
      <Image
        className="h-64 rounded-lg object-cover"
        src={image}
        alt={title}
        data-landingsite-gallery-type="image"
      />
      <div>
        <div className="mt-4 font-semibold text-[var(--primary-color)]">
          {title}
        </div>
        <div className="mt-4 text-[var(--gray-text-color)]">{description}</div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="code-section" id="snu8f5j">
      <div className="container mx-auto px-6 md:pt-24">
        <div className="mb-12 text-3xl font-semibold [font-family:var(--font-family-heading)] md:text-5xl">
          Our Exquisite Gallery
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24 xl:grid-cols-4">
          <Item
            image={Gallery1}
            title="Transform Your Space"
            description="Choose from our array of customizable furniture that effortlessly transforms any room into a personal sanctuary. Explore the endless design possibilities!"
          />
          <Item
            image={Gallery2}
            title="Crafted for You"
            description="Experience the perfect blend of comfort and design with our fully customizable chairs and sofas, tailored specifically to fit your unique style."
          />
          <Item
            image={Gallery3}
            title="Inspired by You"
            description="Every piece of furniture is designed to tell your story, creating not just a space, but a reflection of your journey and lifestyle. Shop with us today!"
          />
          <Item
            image={Gallery4}
            title="Quality Meets Craftsmanship"
            description="Commitment to quality and American craftsmanship ensures that each heirloom piece is thoughtfully made to adapt to your home and lifestyle."
          />
          <Item
            image={Gallery5}
            title="A Canvas for Your Vision"
            description="Our diverse collection of customizable furniture invites you to create a space that resonates with your taste, showcasing contemporary flair or timeless elegance."
          />
          <Item
            image={Gallery6}
            title="Your Dream Space Awaits"
            description="Imagine bringing your dream home to life with furniture that feels authentically you. Let's explore your options together and create something special!"
          />
          <Item
            image={Gallery7}
            title="Timeless Quality"
            description="Step into a world where each piece of furniture becomes an heirloom, treasured not just for its beauty, but for the memories it holds. Connect with us for your ideal piece!"
          />
          <Item
            image={Gallery8}
            title="Modern Living Spaces"
            description="Explore contemporary furniture design that adapts to your evolving lifestyle. Create a space that's both functional and aesthetically pleasing."
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

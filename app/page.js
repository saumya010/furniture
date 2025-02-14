import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Gallery />
    <Testimonials />
    <Footer />
    </>
  );
}

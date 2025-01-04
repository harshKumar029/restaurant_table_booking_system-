"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import backgroundImage from "../../public/image/Heroimg.jpg";
import desserts from "../../public/image/desserts.jpg";
import dinnermenu from "../../public/image/dinnermenu.jpg";
import lunchmenu from "../../public/image/lunchmenu.jpg";
import wine from "../../public/image/wine.jpg";
import Canteen from "../../public/image/Canteen.jpg";
import bottomhomeimg from "../../public/image/bottomhomeimg.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main>
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${isMobile ? Canteen.src : backgroundImage.src})`,
      }}
    >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="min-h-screen flex items-center justify-center text-center relative z-10">
          <div className="text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-5xl md:text-6xl uppercase font-thin mb-6 tracking-[0.1rem] sm:tracking-[0.45rem]">
              An Extraordinary Dining Experience
            </h2>
            <p className="text-[#C6915E] text-xl space-x-2 mb-6">
              &#9733; &#9733; &#9733;
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-jost mb-8">
              The finest prime steak. Exquisite wines. Genuine service.
            </p>

            <Link
              href="/booking"
              className="border-2 border-[#C6915E] font-jost text-[#C6915E] py-2 px-8 text-lg sm:text-xl md:text-2xl hover:bg-yellow-500/10 transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Canteen Section */}
      <section className="w-[95%] m-auto h-screen flex flex-col md:flex-row">
        <div className=" mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-3">
            <h3 className="text-[#C6915E] uppercase text-sm font-semibold font-jost">
              Our Heritage
            </h3>
            <h2 className="text-5xl sm:text-6xl md:text-[3.5rem] lg:text-7xl text-[#fff] font-thin uppercase">
              An American Steakhouse
            </h2>
            <p className="text-[#EEEEEE] font-normal text-base sm:text-lg md:text-lg">
              Patio Time Steakhouse is a classic American steakhouse. Rooted in
              classic tradition, we provide customers with an elegant and
              vibrant dining atmosphere, award-winning cuisine and impeccable
              wines, making every meal with us an unforgettable experience.
            </p>
            <p className="pt-3">
              <Link
                href="#"
                className="text-[#EEEEEE] uppercase underline decoration-[#C6915E] hover:text-[#C6915E]/80 transition-colors underline-offset-4"
              >
                Know More
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-2/3 relative h-[300px] md:h-[500px]">
            <Image
              src={Canteen}
              alt="Canteen"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="w-[80%] mx-auto">
            {/* Decrease width of container */}
            <div className="border border-[#C6915E] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
              <Image
                src={desserts}
                alt="desserts"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#C6915E] pt-4 text-lg uppercase">
              Desserts Menu
            </p>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="border border-[#C6915E] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
              <Image
                src={dinnermenu}
                alt="dinnermenu"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#C6915E] pt-4 text-lg uppercase">
              Dinner Menu
            </p>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="border border-[#C6915E] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
              <Image
                src={lunchmenu}
                alt="lunchmenu"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#C6915E] pt-4 text-lg uppercase">
              Lunch Menu
            </p>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="border border-[#C6915E] rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-1.5">
              <Image
                src={wine}
                alt="wine"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-[#C6915E] pt-4 text-lg uppercase">
              Wines & Cocktails
            </p>
          </div>
        </div>
      </section>
      <section
        className="h-[500px] bg-cover bg-center relative px-5"
        style={{
          backgroundImage: `url(${bottomhomeimg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>/
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <p className="text-[#C6915E] text-xl space-x-2 mb-6">
            &#9733; &#9733; &#9733;
          </p>
          <div className="text-center">
            <h4 className="text-white font-thin text-3xl md:text-5xl mb-8 tracking-[0.4rem] uppercase">
              Make a reservation
            </h4>
            <Link
              href="/booking"
              className="border-2 border-[#C6915E] font-jost uppercase text-[#C6915E] py-2 px-8 text-sm hover:bg-yellow-500/10 transition-colors"
            >
              Book a Table Now
            </Link>
            <p className="text-[#EEEEEE] mt-8 text-sm md:text-base max-w-2xl mx-auto">
              For banquet inquiries, please call our direct banquet line at
              (222) 121-2323 or fax to (545) 345-6756. You may also E-mail us at
              saiasheesh.botcha@neina.co.
            </p>
          </div>
          <p className="text-[#C6915E] text-xl space-x-2 mt-6">
            &#9733; &#9733; &#9733;
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

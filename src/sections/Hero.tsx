"use client"

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { useState } from "react";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="hero">
      <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />

          <div className="size-[620px] hero-ring" />
          <div className="size-[820px] hero-ring" />
          <div className="size-[1020px] hero-ring" />
          <div className="size-[1220px] hero-ring" />
          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit
            orbitDuration="30s"
            shouldSpin
            spinDuration="4s"
          >
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit
            orbitDuration="32s"
            shouldSpin
            spinDuration="4s"
          >
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="4s"
          >
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="7s"
          >
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="7s"
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>

          <HeroOrbit
            size={710}
            rotation={150}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="4s"
          >
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="7s"
          >
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="Person peeking behind Macbook"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Open for work</div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional,
              high-performing web applications. Let's connect!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-10">
            {/* "Explore my Work" Button */}
            <a
              href="#projects" // Link to the Projects section
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span className="font-semibold">Explore my Work</span>
              <ArrowDown className="size-4" />
            </a>

            {/* "Let's Connect" Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transform "
            >
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-[400px] relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-lg text-gray-900 font-semibold mb-4 text-center">
                Let's Connect
              </h2>
              <div className="flex flex-col gap-4">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/huntarb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  <span>LinkedIn</span>
                </a>
                {/* Github Button */}
                <a
                  href="https://github.com/harbeeny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  <span>GitHub</span>
                </a>
                {/* Email Button */}
                <a
                  href="mailto:hntrbeeny@gmail.com?subject=Let's Connect &body=Hi Hunter, I would like to connect with you."
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

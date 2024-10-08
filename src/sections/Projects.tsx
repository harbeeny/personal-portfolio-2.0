"use client";

import Roomies from "@/assets/images/roomies.png";
import Pricewise from "@/assets/images/Pricewise.png";
import Chatlation from "@/assets/images/Chatlation.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useState } from "react";

// Vimeo URL for the Roomie demo video
const roomieVimeoLink =
  "https://player.vimeo.com/video/1017641419?badge=0&autopause=0&player_id=0&app_id=58479";

const portfolioProjects = [
  {
    name: "Roomie",
    year: "2024",
    title: "Roommate Finder App",
    results: [
      { title: "Cross-Platform mobile app" },
      { title: "Modern day matching platform" },
      { title: "Excellent user experience" },
    ],
    vimeoLink: roomieVimeoLink,
    image: Roomies,
  },
  {
    name: "Chatlation",
    year: "2024",
    title: "Saas Translater Chat Room",
    results: [
      { title: "NextAuth middleware protection" },
      { title: "Google Translate Firebase API" },
      { title: "Real-time chat functionality" },
    ],
    link: "https://saas-translator-app-umber.vercel.app/",
    image: Chatlation,
  },
  {
    name: "Pricewise",
    year: "2024",
    title: "Amazon Web-Scrapper",
    results: [
      { title: "Automated data updates" },
      { title: "Real time price monitoring" },
      { title: "Email notification alerts" },
    ],
    link: "https://pricewise-6zoatlb6y-harbeenys-projects.vercel.app/",
    image: Pricewise,
  },
];

export const ProjectsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState<string | null>(null);

  const openVideoModal = (videoLink: string) => {
    setCurrentVideoLink(videoLink);
    setIsVideoModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoLink(null);
    document.body.style.overflow = "auto"; // Enable scrolling again
  };

  return (
    <section className="py-20 pb-16 sm:py-20 lg:py-28" id="projects">
      <div className="">
        <div className="container">
          <SectionHeader
            eyebrow="Real-world Results"
            title="Featured Projects"
            description="See how I transform concepts into engaging digital experiences."
          />
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                key={project.title}
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.name}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                          key={result.title}
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    {project.vimeoLink ? (
                      <button
                        onClick={() => openVideoModal(project.vimeoLink)}
                        className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl px-6 font-semibold inline-flex items-center justify-center gap-2 mt-8 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                      >
                        <span>Watch Demo Video</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl px-6 font-semibold inline-flex items-center justify-center gap-2 mt-8 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && currentVideoLink && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeVideoModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-3xl h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="relative w-full h-full">
              <iframe
                src={currentVideoLink}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Roomie Demo Video"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

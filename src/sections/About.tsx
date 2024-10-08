"use client"

// import StarIcon from "@/assets/icons/star.svg";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";
import bookCover from "@/assets/images/atomic-habits.png"
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import PythonIcon from "@/assets/icons/python.svg"
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import GitIcon from "@/assets/icons/git.svg"
import JavaIcon from "@/assets/icons/java.svg"
import PostgresIcon from "@/assets/icons/postgres.svg"
import TSIcon from "@/assets/icons/typescript.svg"

import { Card  } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "Tailwindcss",
    iconType: TailwindIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresIcon,
  },
  {
    title: "Typescript",
    iconType: TSIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "50%",
    top: "5%",
  },
  {
    title: "Pickleball",
    emoji: "🥒🎾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🧑‍🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Traveling",
    emoji: "🛫",
    left: "45%",
    top: "70%",
  },
  {
    title: "Eating",
    emoji: "🍽️",
    left: "65%",
    top: "25%",
  }
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do, and what inspires me."
          />
          
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the book shaping my perspective."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookCover} alt="Book Cover" />
                </div>
              </Card>
              
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapper="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapper="-translate-x-1/2 animate-move-right [animation-duration:20s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span className="">{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1 translate-y-1 size-10 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <Image
                    src={smileMemoji}
                    alt="smiling memoji"
                    className="size-10"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

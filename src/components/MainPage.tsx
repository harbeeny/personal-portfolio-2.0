// import { AboutSection } from "@/sections/About";
// import { ContactSection } from "@/sections/Contact";
// import { Header } from "@/sections/Header";
// import { HeroSection } from "@/sections/Hero";
// import { ProjectsSection } from "@/sections/Projects";
// import { useState, useEffect } from "react";
// import React from "react";

// export const MainPage = () => {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");
//     const options = {
//       root: null,
//       rootMargin: "-50% 0px -50% 0px",
//       threshold: 0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//           console.log("Active Section:", entry.target.id); // Add this line
//         }
//       });
//     }, options);

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     // Cleanup the observer on unmount
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <Header activeSection={activeSection} />
//       <main>
//         <HeroSection />
//         <ProjectsSection />
//         <AboutSection />
//         <ContactSection />
//       </main>
//     </>
//   );
// };

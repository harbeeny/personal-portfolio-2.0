// TODO: Have the section highlighted when on that id 

import { a } from "framer-motion/client";

export const Header = () => {
  
  // const navItems = [
  //   {id:"hero", label:"Home"},
  //   {id:"projects", label:"Projects"},
  //   {id:"about", label:"About"},
  //   {id:"contact", label:"Contact"},
  // ]
  // return (
  //   <div className="flex justify-center items-center fixed top-3 w-full z-10">
  //     <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
  //       {navItems.map((item) => (
  //         <a
  //           key={item.id}
  //           href={`#${item.id}`}
  //           className={`nav-item ${
  //             activeSection === item.id ? 'active': ''}`}

  //         >
  //           {item.label}
  //         </a>
  //       ))}
  //     </nav>
  //   </div>
  
return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href="#hero" className="nav-item" >
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </div>
  );
};

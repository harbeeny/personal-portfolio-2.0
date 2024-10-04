import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const footerLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/huntarb/",
    },
    {
      title: "Github",
      href: "https://github.com/harbeeny",
    },
    {
      title: "Resume",
      href: "/HAResume.pdf",
    },
  ];

  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Adjusted positioning and z-index */}
      <div className="absolute h-[400px] w-[1600px] top-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)] z-0 pointer-events-none"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((link) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

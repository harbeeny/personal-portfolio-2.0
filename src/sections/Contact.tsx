import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative z-20">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
            {/* Background decorative element */}
            <div
              className="absolute inset-0 opacity-10 z-0 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your next project to life? Let's connect and
                  discuss how I can help you achieve your goals!
                </p>
              </div>
              <div>
                {/* Use the anchor tag as the button */}
                <a
                  href="mailto:hntrbeeny@gmail.com?subject=Let's Connect! &body=Hi Hunter, I would like to connect with you."
                  className="text-white bg-gray-900 inline-flex items-center rounded-xl px-6 h-12 gap-2 w-max border border-gray-900 relative z-20 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

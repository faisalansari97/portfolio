import React from "react";
import { Mail, Phone, MapPin, Download, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-10 md:pt-28 sm:pt-2 pb-10 md:20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up space-y-6">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-sm font-medium text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new opportunities
              </div> */}

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 flex items-center justify-start lg:justify-start gap-3 text-left">
                  {PERSONAL_INFO.title}
                </h2>
              </div>

              <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mx-0 text-left">
                {PERSONAL_INFO.bio}
              </p>

              {/* Contact/Location Info - Left Aligned */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-start">
                <div className="flex flex-wrap justify-start gap-4 md:gap-6 text-sm md:text-base text-slate-600 dark:text-slate-400">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                      <Mail size={18} />
                    </div>
                    {PERSONAL_INFO.email}
                  </a>

                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <MapPin size={18} />
                    </div>
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Buttons - Left Aligned */}
              <div className="pt-4 md:pt-8 flex flex-wrap gap-4 justify-start">
                <a
                  href="#projects"
                  className="group px-4 py-3 md:px-8 md:py-4 text-sm md:text-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <button
                  className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1CpfvFL9vJ54edqB-FKg0jDwNXCGxZX0g/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  <Download size={18} />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[500px]">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary-100 dark:bg-slate-800 rounded-full blur-3xl opacity-20 -z-10 animate-pulse-slow"></div>

              {/* Image Container with Shape - ROTATION REMOVED */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={"images/profile_image1.jpg"}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white dark:bg-slate-900 p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 block animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

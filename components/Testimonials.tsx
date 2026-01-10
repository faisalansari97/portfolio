import React from "react";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const isSingle = TESTIMONIALS.length === 1;
  return (
    <section
      id="testimonials"
      className="py-10 md:py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            What People Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Feedback from clients and collaborators I've worked with.
          </p>
        </div>

        <div
          className={
            isSingle
              ? "flex justify-center gap-8"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900/40 rounded-2xl p-5 md:p-8 border border-slate-150 dark:border-slate-800 relative hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="absolute top-6 right-8 text-primary-200 dark:text-primary-900/50">
                <Quote size={40} className="fill-current" />
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed text-md md:text-lg">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}{" "}
                    <span className="text-primary-400">•</span>{" "}
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

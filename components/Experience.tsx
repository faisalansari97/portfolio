import React from "react";
import { EXPERIENCE } from "../constants";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A track record of building scalable products and leading engineering
            teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 dark:bg-slate-900/40 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/5 flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-2 font-medium text-slate-900 dark:text-slate-200">
                      <Building2 size={16} className="text-primary-500" />
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <Calendar size={14} className="text-primary-500" />
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base flex-grow">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/50">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider opacity-80">
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

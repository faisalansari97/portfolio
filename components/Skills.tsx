import React from "react";
import { SKILLS } from "../constants";
import { Code, Server, Wrench } from "lucide-react";

const SkillIcon = ({ title }) => {
  if (title.includes("Frontend"))
    return <Code className="w-6 h-6 text-primary-500" />;
  if (title.includes("Backend"))
    return <Server className="w-6 h-6 text-indigo-500" />;
  return <Wrench className="w-6 h-6 text-emerald-500" />;
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 md:py-24  bg-white dark:bg-slate-900/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A comprehensive toolbelt for building modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <SkillIcon title={category.title} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

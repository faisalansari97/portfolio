import React from "react";
import { PROJECTS } from "../constants";
import { ExternalLink, Smartphone, Globe, ArrowUpRight } from "lucide-react";

const ProjectLink = ({ link }) => {
  const getIcon = () => {
    switch (link.type) {
      case "android":
        return <Smartphone size={14} />;
      case "ios":
        return <Smartphone size={14} />;
      default:
        return <Globe size={14} />;
    }
  };

  return (
    <a
      href={link.url}
      className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-200 group/link"
      target="_blank"
      rel="noreferrer"
    >
      {getIcon()}
      {link.label}
      <ExternalLink
        size={12}
        className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
      />
    </a>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 md:py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 gap-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg mx-auto">
              A collection of mobile and web applications I've engineered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-primary-900/5 dark:hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-5 md:p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {project.role}
                    </p>
                  </div>
                  {/* <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    <ArrowUpRight size={20} />
                  </div> */}
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="mb-4 md:mb-8 space-y-2">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-500 dark:text-slate-500 flex items-start gap-2.5"
                      >
                        <span className="mt-1.5 block w-1 h-1 rounded-full bg-primary-400 shrink-0"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 md:pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.links.length > 0 ? (
                      project.links.map((link, i) => (
                        <ProjectLink link={link} />
                      ))
                    ) : (
                      <span className="text-xs font-medium text-slate-400 italic px-2 ">
                        Confidential / Internal Project
                      </span>
                    )}
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

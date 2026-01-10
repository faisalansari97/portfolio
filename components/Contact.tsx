import React from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-10 md:pt-24 pb-0 md:pb-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Open for Work
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
          Let's Work Together
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for freelance projects and full-time
          opportunities. If you're interested in building something scalable and
          user-centric, let's connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Say Hello
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-lg transition-all hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <Linkedin size={20} className="text-[#0077b5]" />
            LinkedIn Profile
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="flex flex-col items-center text-center p-4">
             <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-3">
               <Mail className="w-5 h-5 text-slate-400" />
             </div>
             <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</span>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-slate-900 dark:text-white hover:text-primary-600 transition-colors">
               {PERSONAL_INFO.email}
             </a>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
             <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-3">
               <Linkedin className="w-5 h-5 text-slate-400" />
             </div>
             <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">Social</span>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="font-medium text-slate-900 dark:text-white hover:text-primary-600 transition-colors">
               LinkedIn Profile
             </a>
          </div>

          <div className="flex flex-col items-center text-center p-4">
             <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-3">
               <MapPin className="w-5 h-5 text-slate-400" />
             </div>
             <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</span>
             <span className="font-medium text-slate-900 dark:text-white">
               {PERSONAL_INFO.location}
             </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

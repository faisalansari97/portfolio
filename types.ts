export interface Link {
  label: string;
  url: string;
  type: 'web' | 'android' | 'ios';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  links: Link[];
  features?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  description: string;
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
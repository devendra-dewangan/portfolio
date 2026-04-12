export interface Project {
  name: string;
  completiondate: string;
  status: string;
  description: string[];
  company:string

  // 🔥 Optional but important for UI
  image?: string;
  techstack?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export type Projects = Project[];
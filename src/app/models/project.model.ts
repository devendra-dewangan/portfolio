export interface Project {
  id: string;
  name: string;

  role?: string;
  organization?: string;
  duration?: string;

  completionDate: string;
  status: 'Completed' | 'Ongoing';

  description: string[];

  // Optional UI fields
  image?: string;
  techStack?: string[];
  github?: string;
  live?: string;

  highlights?: string[];
  featured?: boolean;
}

export type Projects = Project[];
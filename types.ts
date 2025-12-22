
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links: {
    pdf?: string;
    code?: string;
    project?: string;
  };
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  method: string;
  contributions: string[];
  imageUrl: string;
  githubUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

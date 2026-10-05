// 1. The Interface: This tells TypeScript what data is allowed
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string; 
  demoUrl?: string;   
  imageUrl?: string;  
  isFeatured?: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: "Languages" | "UI" | "Tooling";
}

// Project and technology details verified in this portfolio's codebase.
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with React and TypeScript, with project, skills, research, and contact pages and animated interface elements.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    isFeatured: true,
  }
];

export const SKILLS: Skill[] = [
  { id: 1, name: "TypeScript", category: "Languages" },
  { id: 2, name: "JavaScript", category: "Languages" },
  { id: 3, name: "React", category: "UI" },
  { id: 4, name: "Tailwind CSS", category: "UI" },
  { id: 5, name: "Wouter", category: "UI" },
  { id: 6, name: "Framer Motion", category: "UI" },
  { id: 7, name: "Vite", category: "Tooling" },
  { id: 8, name: "Recharts", category: "Tooling" },
  { id: 9, name: "Lucide React", category: "Tooling" }
];
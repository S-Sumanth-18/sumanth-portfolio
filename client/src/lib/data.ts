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
  performanceMetrics?: Record<string, number>; // Added to prevent errors in UI
}

export interface Skill {
  id: number;
  name: string;
  category: "Languages" | "AI/ML" | "Web";
}

// 2. The Data: All your AI/ML details and Skills in one place
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI-Driven Smart Healthcare Framework",
    description: "An advanced framework for Pneumonia detection from Chest X-rays using state-of-the-art Deep Learning models. Features Explainable AI (XAI) integration with Grad-CAM visualizations.",
    techStack: ["Python", "TensorFlow", "React", "Node.js", "Grad-CAM"],
    isFeatured: true,
    performanceMetrics: {
      "ResNet152V2": 96,
      "DenseNet121": 92,
      "EfficientNetB0": 90
    },
    githubUrl: "https://github.com/sumanth/healthcare-ai",
    demoUrl: "https://healthcare-ai-demo.com",
    imageUrl: ""
  },
  {
    id: 2,
    title: "Interactive DSA Visualizer",
    description: "A web-based tool to visualize complex Data Structures and Algorithms, helping students understand algorithmic flow.",
    techStack: ["React", "TypeScript", "D3.js"],
    isFeatured: false,
    githubUrl: "https://github.com/sumanth/dsa-viz",
    imageUrl: ""
  }
];

export const SKILLS: Skill[] = [
  { id: 1, name: "Java", category: "Languages" },
  { id: 2, name: "SQL", category: "Languages" },
  { id: 3, name: "JavaScript", category: "Languages" },
  { id: 4, name: "Deep Learning", category: "AI/ML" },
  { id: 5, name: "Computer Vision", category: "AI/ML" },
  { id: 6, name: "XAI (Grad-CAM)", category: "AI/ML" },
  { id: 7, name: "Node.js", category: "Web" },
  { id: 8, name: "MongoDB", category: "Web" },
  { id: 9, name: "Express", category: "Web" },
  { id: 10, name: "React", category: "Web" },
  { id: 11, name: "Tailwind CSS", category: "Web" }
];
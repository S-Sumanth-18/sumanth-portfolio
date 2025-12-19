import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    const seedSkills = [
      { name: "Java", category: "Languages" },
      { name: "SQL", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "Deep Learning", category: "AI/ML" },
      { name: "Computer Vision", category: "AI/ML" },
      { name: "XAI (Grad-CAM)", category: "AI/ML" },
      { name: "Node.js", category: "Web" },
      { name: "MongoDB", category: "Web" },
      { name: "Express", category: "Web" },
      { name: "React", category: "Web" },
      { name: "Tailwind CSS", category: "Web" },
    ];
    for (const skill of seedSkills) {
      await storage.createSkill(skill);
    }
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "AI-Driven Smart Healthcare Framework",
      description: "An advanced framework for Pneumonia detection from Chest X-rays using state-of-the-art Deep Learning models. Features Explainable AI (XAI) integration with Grad-CAM visualizations to provide transparency in model predictions.",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "Grad-CAM"],
      isFeatured: true,
      performanceMetrics: {
        "ResNet152V2": 96,
        "DenseNet121": 92,
        "EfficientNetB0": 90
      },
      githubUrl: "https://github.com/sumanth/healthcare-ai",
      demoUrl: "https://healthcare-ai-demo.com"
    });

    await storage.createProject({
      title: "Interactive DSA Visualizer",
      description: "A web-based tool to visualize complex Data Structures and Algorithms, helping students understand algorithmic flow. Features real-time execution tracking.",
      techStack: ["React", "TypeScript", "D3.js"],
      isFeatured: false,
      githubUrl: "https://github.com/sumanth/dsa-viz",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

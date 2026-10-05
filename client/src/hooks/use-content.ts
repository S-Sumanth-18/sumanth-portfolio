import { PROJECTS, SKILLS } from "@/lib/data";

// Static Skills Hook
export function useSkills() {
  return {
    data: SKILLS,
    isLoading: false,
    error: null,
  };
}

// Static Projects Hook
export function useProjects() {
  return {
    data: PROJECTS,
    isLoading: false,
    error: null,
  };
}

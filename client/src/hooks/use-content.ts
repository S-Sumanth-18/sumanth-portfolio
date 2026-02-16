import { PROJECTS, SKILLS } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

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

// Static Contact Form Hook
export function useContactForm() {
  const { toast } = useToast();
  
  return {
    mutate: (data: any) => {
      // Since there is no database, we log the message to the console
      console.log("Form Submission Received (Static Mode):", data);
      
      toast({
        title: "Message Logged (Static Mode)",
        description: "In this offline version, your message was printed to the browser console.",
        variant: "default",
      });
    },
    isPending: false,
    isSuccess: true,
  };
}
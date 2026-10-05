import { PROJECTS, SKILLS } from "./data";

const unavailable = "That information is not listed in the verified portfolio data.";

export function getKnightResponse(question: string): string {
  const query = question.toLowerCase().replace(/[^a-z0-9\s/.-]/g, " ").trim();

  if (/\b(who|about|identity|sumanth)\b/.test(query)) {
    return "Identity confirmed. Sumanth is a B.Tech Information Technology student. This portfolio documents projects and the technologies used in his work.";
  }

  if (/\b(education|degree|college|university|study|student)\b/.test(query)) {
    return "Education listed: B.Tech in Information Technology. The institution and expected graduation date are not provided in this portfolio.";
  }

  if (/\b(skill|skills|technology|technologies|tech stack|stack)\b/.test(query)) {
    const skills = SKILLS.map((skill) => skill.name).join(", ");
    return `Verified technologies in this portfolio: ${skills}. This list reflects the site's codebase, not proficiency ratings.`;
  }

  if (/\b(project|projects|work|built)\b/.test(query)) {
    const projects = PROJECTS.map((project) => `${project.title} (${project.techStack.join(", ")})`).join("; ");
    return projects ? `Projects listed: ${projects}.` : "No projects are currently listed.";
  }

  if (/\b(interest|interests|focus|development|developing)\b/.test(query)) {
    return "The portfolio says Sumanth uses it to document projects and the technologies in his work. It does not list additional development interests.";
  }

  if (/\b(contact|email|reach|linkedin)\b/.test(query)) {
    return "Contact details are not configured in the portfolio yet. No email address, public profile URL, or message endpoint is listed.";
  }

  if (/\b(github|git hub|source code|repository)\b/.test(query)) {
    return "A GitHub profile URL is not listed in the portfolio.";
  }

  if (/\b(resume|cv)\b/.test(query)) {
    return "A public resume link is not listed in the portfolio.";
  }

  if (/\b(navigate|navigation|pages|sections|where|page)\b/.test(query)) {
    return "Available sections: Home, Projects, Skills, Research, and Contact. Use the navigation bar or press Ctrl+K (Cmd+K on Mac) to open the command palette.";
  }

  if (/\b(help|what can you|commands)\b/.test(query)) {
    return "Ask me about Sumanth, education, listed technologies, projects, interests, contact details, or portfolio navigation. I only answer from information present on this site.";
  }

  return `${unavailable} Try asking about projects, skills, education, or navigation.`;
}
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Section title="Projects">
      {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
    </Section>
  );
}

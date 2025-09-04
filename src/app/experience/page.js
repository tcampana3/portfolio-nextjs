import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section title="Work Experience">
      {experience.map((e) => <ExperienceCard key={e.company} e={e} />)}
    </Section>
  );
}

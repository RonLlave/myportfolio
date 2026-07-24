// components/sections/SkillsSection.jsx
import SkillCategory from "../ui/SkillCategory";
import { skillCategories } from "@/app/_data/skills";

export default function SkillsSection() {
  const featured = skillCategories.filter((category) => category.featured);
  const rest = skillCategories.filter((category) => !category.featured);

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Tech Skills
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
      </div>

      <div className="space-y-6">
        {featured.map((category) => (
          <SkillCategory key={category.id} {...category} />
        ))}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((category) => (
            <SkillCategory key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

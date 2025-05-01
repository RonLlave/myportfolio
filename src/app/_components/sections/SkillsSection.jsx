// components/sections/SkillsSection.jsx
import SkillCategory from "../ui/SkillCategory";
import {
  skillsDatabase,
  skillsDesktopDev,
  skillsdevOps,
  skillsWebDev,
} from "@/app/_data/skills";
export default function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Tech Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory
          title="Web Development Tech Skills"
          skills={skillsWebDev()}
        />

        <SkillCategory
          title="Desktop Application Development Tech Skills"
          skills={skillsDesktopDev()}
        />

        <SkillCategory title="Database Tech Skills" skills={skillsDatabase()} />

        <SkillCategory
          title="Software Repository Management Tech Skills"
          skills={skillsdevOps()}
        />
      </div>
    </section>
  );
}

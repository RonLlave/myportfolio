// components/ui/SkillCategory.jsx
import SkillCard from "./SkillCard";

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

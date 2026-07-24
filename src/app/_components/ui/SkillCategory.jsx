// components/ui/SkillCategory.jsx
import SkillCard from "./SkillCard";

export default function SkillCategory({ title, caption, skills, featured }) {
  return (
    <div
      className={`rounded-xl border p-6 transition-colors ${
        featured
          ? "border-blue-500/40 bg-gradient-to-br from-blue-950/40 to-gray-800/80"
          : "border-gray-700/60 bg-gray-800/60 hover:border-gray-600"
      }`}
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {caption && (
          <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
            {caption}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            Icon={skill.Icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}

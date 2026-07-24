// components/ui/SkillCard.jsx
export default function SkillCard({ name, Icon, color }) {
  return (
    <div className="group flex items-center gap-2.5 rounded-lg border border-gray-700/60 bg-gray-900/70 px-3.5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-gray-900">
      <Icon
        aria-hidden="true"
        className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ color }}
      />
      <span className="text-sm font-medium text-gray-200">{name}</span>
    </div>
  );
}

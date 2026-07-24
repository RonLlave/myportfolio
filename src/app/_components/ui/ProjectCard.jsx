// components/ui/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <li className="group relative rounded-xl border border-gray-700/60 bg-gray-800/60 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-gray-800">
      {/* Accent bar that fills in on hover */}
      <span className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <h4 className="text-lg font-semibold text-white">{project.title}</h4>

      <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-blue-500/25 bg-blue-950/40 px-2.5 py-1 text-xs font-medium text-blue-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

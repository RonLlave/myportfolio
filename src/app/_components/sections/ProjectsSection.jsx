// components/sections/ProjectsSection.jsx
import ProjectCard from "../ui/ProjectCard";
import { projectCategories } from "@/app/_data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          A selection of systems I have delivered professionally. Interfaces are
          described rather than shown, as these applications hold internal
          company data.
        </p>
      </div>

      <div className="space-y-12">
        {projectCategories.map((category) => (
          <div key={category.id}>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-gray-700/60 pb-3">
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
              <span className="text-sm text-gray-500">{category.caption}</span>
            </div>

            <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {category.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

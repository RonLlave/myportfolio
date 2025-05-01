// components/sections/ProjectsSection.jsx
"use client";
import ProjectCard from "../ui/ProjectCard";
import { useProjects } from "../../_data/projects";

export default function ProjectsSection() {
  const projects = useProjects();

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        Projects
      </h2>
      <p className="text-gray-400 text-center mb-8 font-bold">
        My Sample Delivered Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

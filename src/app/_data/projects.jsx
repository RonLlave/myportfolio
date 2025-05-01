// _data/projects.jsx
"use client";
import { useState, useEffect } from "react";
import iconKanban from "@/app/public/Kanban Dashboard.jpeg";
import iconToolCrib from "@/app/public/Tool Crib.jpeg";
import iconScrew from "@/app/public/Screw Monitoring System.jpg";
export function useProjects() {
  // In a real app, you might fetch this from an API
  const projectsData = [
    {
      id: 1,
      title: "Kanban Dashboard",
      description:
        "A Kanban inventory dashboard system for immediate response between the warehouse to inventory station.",
      image: iconKanban,
      technologies: [".Net WPF", "MSSQL"],
    },
    {
      id: 2,
      title: "Tool Crib Inventory System",
      description:
        "Inventory managing system that shows a dashboard with Tools, each having its own information and status.",
      image: iconToolCrib,
      technologies: [".NET WPF", "MSSQL"],
    },
    {
      id: 3,
      title: "Screw Monitoring System",
      description:
        "A desktop application that monitors and collects screw torque data from the production line and consolidated for quality controlling.",
      image: iconScrew,
      technologies: ["C#", "MySQL"],
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return projects;
}

// _data/projects.jsx

// Projects are listed by category rather than shown as screenshots, since these
// were built for employers and their interfaces contain internal company data.
const webApplications = [
  {
    id: "bot-meeting",
    title: "Bot Meeting Management System",
    description:
      "Manages a user's Google Meet schedule and dispatches a Playwright bot that joins the meeting and records its audio with speaker diarization. The bot can be ended manually from the frontend or leaves automatically once no participants remain, then stores the recording. Each new recording automatically generates an AI summary and a timestamped, per-speaker dialogue transcript.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "Google Gemini",
      "Supabase",
      "Coolify",
    ],
  },
  {
    id: "academy-app",
    title: "Academy App",
    description:
      "A learning-course platform where admins publish courses and users work through them on mobile or desktop. Video streaming is handled through the Vimeo API, and each course ends with a quiz that computes the learner's passing rate.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Vimeo API",
      "PWA",
      "Supabase",
      "Coolify",
    ],
  },
  {
    id: "consultation-app",
    title: "Consultation App",
    description:
      "A record-keeping app for company consultations, available on both mobile and desktop. Every submitted consultation is rendered into a templated PDF and saved directly to the user's Google Drive.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PWA",
      "Google Drive API",
      "Supabase",
      "Coolify",
    ],
  },
  {
    id: "extra-services-app",
    title: "Extra Services App",
    description:
      "A mobile-focused app collecting a range of company forms in one place, with downloadable PDF brochures available for reference.",
    technologies: ["Next.js", "TypeScript", "PWA", "Supabase", "Coolify"],
  },
];

const desktopApplications = [
  {
    id: "kanban-dashboard",
    title: "Kanban Dashboard",
    description:
      "A Kanban inventory dashboard giving the warehouse and the inventory station immediate visibility of one another's stock movements.",
    technologies: [".NET WPF", "MSSQL"],
  },
  {
    id: "tool-crib",
    title: "Tool Crib Inventory System",
    description:
      "An inventory management system presenting a dashboard of tools, each tracked with its own detail record and live status.",
    technologies: [".NET WPF", "MSSQL"],
  },
  {
    id: "screw-monitoring",
    title: "Screw Monitoring System",
    description:
      "A desktop application that collects screw torque data from the production line and consolidates it for quality control review.",
    technologies: ["C#", "MySQL"],
  },
];

export const projectCategories = [
  {
    id: "web",
    title: "Web Applications",
    caption: "Built with Supabase and deployed on Coolify",
    projects: webApplications,
  },
  {
    id: "desktop",
    title: "Desktop Applications",
    caption: "Windows line-of-business and manufacturing tools",
    projects: desktopApplications,
  },
];

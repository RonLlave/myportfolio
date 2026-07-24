// _data/skills.jsx
// Icons come from react-icons / lucide-react rather than bitmap files so every
// skill renders at the same weight and new entries need no asset work.
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPwa,
  SiDotnet,
  SiSharp,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiClaude,
  SiGooglegemini,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { Drama, Server, Monitor, Boxes, Network } from "lucide-react";

const webDevelopment = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "PWA", Icon: SiPwa, color: "#5A0FC8" },
  { name: "Playwright", Icon: Drama, color: "#2EAD33" },
];

const aiEngineering = [
  { name: "Claude Code", Icon: SiClaude, color: "#D97757" },
  { name: "MCP Integration", Icon: Network, color: "#D97757" },
  { name: "Multi-Agent Sessions", Icon: Boxes, color: "#D97757" },
  { name: "Google Gemini", Icon: SiGooglegemini, color: "#8E75F8" },
];

const desktopDevelopment = [
  { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
  { name: "C#", Icon: SiSharp, color: "#68217A" },
  { name: "WPF", Icon: Monitor, color: "#0078D4" },
];

const database = [
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Microsoft SQL", Icon: DiMsqlServer, color: "#CC2927" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
];

const devOps = [
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Coolify", Icon: Server, color: "#8B5CF6" },
  { name: "Google Cloud OAuth", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Azure DevOps", Icon: VscAzureDevops, color: "#0078D4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export const skillCategories = [
  {
    id: "ai",
    title: "AI-Assisted Engineering",
    caption:
      "Claude Code drives my day-to-day development — MCP server setups, multi-agent sessions, and research. Gemini handles audio diarization and transcription.",
    skills: aiEngineering,
    featured: true,
  },
  {
    id: "web",
    title: "Web Development",
    caption: "Mobile-first apps built on the Next.js App Router",
    skills: webDevelopment,
  },
  {
    id: "database",
    title: "Databases",
    caption: "Relational and document stores, self-hosted or managed",
    skills: database,
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    caption: "Containerised, self-hosted delivery and source control",
    skills: devOps,
  },
  {
    id: "desktop",
    title: "Desktop Development",
    caption: "Windows line-of-business applications",
    skills: desktopDevelopment,
  },
];

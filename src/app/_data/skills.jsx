// Web Dev
import iconHTML from "@/app/public/HTML5.png";
import iconCSS from "@/app/public/CSS3.png";
import iconJS from "@/app/public/CSS3.png";
import iconReactJS from "@/app/public/React.png";
import iconNodeJS from "@/app/public/React.png";
import iconNextJS from "@/app/public/Nextjs.png";
import iconTailwindCSS from "@/app/public/Tailwind CSS.png";
import iconMongoDB from "@/app/public/MongoDB.png";

//Desktop
import iconNet from "@/app/public/NET.png";
import iconCSharp from "@/app/public/CSharp.png";
//Database
import iconMSSQL from "@/app/public/MSSQL.png";
import iconMySQL from "@/app/public/MySQL.png";
import iconSupabase from "@/app/public/Supabase.png";

//Devops
import iconAzure from "@/app/public/Azure.png";
import iconGit from "@/app/public/Git.png";
const webDevelopment = [
  {
    name: "HTML",
    icon: iconHTML,
  },
  {
    name: "CSS",
    icon: iconCSS,
  },
  {
    name: "JavaScript",
    icon: iconJS,
  },
  {
    name: "ReactJS",
    icon: iconReactJS,
  },
  {
    name: "NodeJS",
    icon: iconNodeJS,
  },
  {
    name: "NextJS",
    icon: iconNextJS,
  },
  {
    name: "Tailwind CSS",
    icon: iconTailwindCSS,
  },
];
const desktopDevelopment = [
  {
    name: ".NET",
    icon: iconNet,
  },
  {
    name: "C#",
    icon: iconCSharp,
  },
];
const database = [
  {
    name: "Microsoft SQL",
    icon: iconMSSQL,
  },
  {
    name: "MySQL",
    icon: iconMySQL,
  },
  {
    name: "Supabase",
    icon: iconSupabase,
  },
  {
    name: "Mongo DB",
    icon: iconMongoDB,
  },
];

const devOps = [
  {
    name: "Azure DevOps",
    icon: iconAzure,
  },
  {
    name: "Git",
    icon: iconGit,
  },
];

export function skillsWebDev() {
  return webDevelopment;
}

export function skillsDesktopDev() {
  return desktopDevelopment;
}

export function skillsDatabase() {
  return database;
}

export function skillsdevOps() {
  return devOps;
}

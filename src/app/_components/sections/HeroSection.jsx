// components/sections/HeroSection.jsx
import mePic from "@/app/public/me_2024.jpg";
import Image from "next/image";
import {
  Code,
  Command,
  Briefcase,
  Mail,
  CodeXml,
  Database,
  LaptopMinimal,
  Monitor,
  Globe,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg transform transition-all hover:scale-[1.01] w-220">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Ron Cymond Llave
                </span>
              </h1>

              <div className="flex space-x-3 text-sm">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/30 mb-4 text-md">
                  <Code size={24} className="text-blue-400" />
                  <span className=" text-blue-300">Full Stack Developer</span>
                </div>

                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/30 mb-4 text-md">
                  <CodeXml size={24} className="text-blue-400" />
                  <span className=" text-blue-300">Frontend Developer</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/30 mb-4 text-md">
                  <Database size={24} className="text-blue-400" />
                  <span className=" text-blue-300">Backend Developer</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-900/30 rounded-full border border-blue-500/30 mb-4 ">
                  <LaptopMinimal size={24} className="text-blue-400" />
                  <span className=" text-blue-300">Desktop Apps Developer</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <Command size={24} className="text-blue-400" />
                <p className="text-xl text-gray-300">
                  A Full Stack,Frontend, and Backend Developer
                </p>
              </div>

              <p className="text-lg text-gray-400">
                For Desktop and Web Development
              </p>
            </div>

            <div className="hidden lg:flex mt-8 space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Monitor className="w-5 h-5" />
                <span>6 Years Desktop Development Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-5 h-5" />
                <span>1 Year Web Development Experience</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing effect behind image */}
              <div className="absolute -inset-0.5 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-gray-800 ring-2 ring-blue-500/30 shadow-lg shadow-blue-900/20 w-full h-full">
                <Image
                  src={mePic}
                  alt="Ron Cymond Llave"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/sections/HeroSection.jsx
import mePic from "@/app/public/me_2024.jpg";
import Image from "next/image";
import {
  Sparkles,
  Code,
  Database,
  LaptopMinimal,
  Globe,
  Monitor,
  Mail,
  ArrowRight,
} from "lucide-react";

const roles = [
  { label: "AI-Assisted Development", Icon: Sparkles },
  { label: "Frontend Developer", Icon: Code },
  { label: "Backend Developer", Icon: Database },
  { label: "Desktop Apps Developer", Icon: LaptopMinimal },
];

const stats = [
  { value: "6+", label: "Years Desktop Development", Icon: Monitor },
  { value: "2.5+", label: "Years Web Development", Icon: Globe },
  { value: "1+", label: "Year AI-Assisted Development", Icon: Sparkles },
];

export default function HeroSection() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-20">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.07]" />

      <div className="relative z-10">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          {/* Content column */}
          <div className="w-full space-y-8 lg:w-3/5">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-8 shadow-lg backdrop-blur-sm">
              <p className="mb-3 text-sm font-medium tracking-wide text-gray-400">
                Hello, I&apos;m
              </p>

              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Ron Cymond Llave
                </span>
              </h1>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/30 px-4 py-2">
                <Sparkles size={18} className="text-cyan-300" />
                <span className="font-semibold text-blue-200">
                  AI-Powered Full Stack Developer
                </span>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I&apos;m a full stack developer who builds mobile-first web
                applications with Next.js, TypeScript and Supabase, backed by
                over six years of Windows desktop development in manufacturing
                and line-of-business systems. I use AI
                confidently across all of my professional work — Claude Code
                drives my day-to-day development, from MCP integrations to
                multi-agent sessions, and it has become a core part of how I
                design, build and ship software.
              </p>

              <div className="flex flex-wrap gap-2">
                {roles.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-950/40 px-3 py-1.5 text-sm text-blue-300"
                  >
                    <Icon size={15} className="text-blue-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats + call to action */}
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map(({ value, label, Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-blue-400" />
                    <div>
                      <p className="text-xl font-bold text-white">{value}</p>
                      <p className="text-sm text-gray-400">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                <Mail size={18} />
                Get in touch
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="flex w-full justify-center lg:w-2/5">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute -inset-0.5 animate-pulse rounded-full bg-blue-500 opacity-20 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-gray-800 shadow-lg shadow-blue-900/20 ring-2 ring-blue-500/30">
                <Image
                  src={mePic}
                  alt="Ron Cymond Llave"
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

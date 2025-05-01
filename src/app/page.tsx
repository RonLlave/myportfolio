// page.jsx
import Layout from '@/app/_components/layout/Layout';
import HeroSection from '@/app/_components/sections/HeroSection';
import SkillsSection from '@/app/_components/sections/SkillsSection';
import ProjectsSection from '@/app/_components/sections/ProjectsSection';
import ContactSection from '@/app/_components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
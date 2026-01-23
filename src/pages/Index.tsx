import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GamesSection from "@/components/GamesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SideProjectsSection from "@/components/SideProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SideProjectsSection />
        <GamesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

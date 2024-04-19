import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";


export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <AchievementsSection/>
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <AboutSection/>
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection/>
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <EmailSection/>
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <Footer/>
      </div>
    </main>
  );
}

import { AboutStatus } from "@/components/about-status";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GithubActivity } from "@/components/github-activity";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SocialBar } from "@/components/social-bar";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-0 md:px-4">
      <div className="page-frame my-0 min-h-screen overflow-hidden md:my-4">
        <Navbar />
        <main>
          <Hero />
          <SocialBar />
          <AboutStatus />
          <GithubActivity />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import { CarouselSkills } from "./components/carousel-skills";
import { Banner } from "./components/banner";
import { ProjectsSection } from "./components/projects-section";
import { CareerTimeline } from "./components/career-timeline";
import { Footer } from "./components/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Banner />
      <div className="mt-8">
        <CarouselSkills />
      </div>
      <ProjectsSection />
      <CareerTimeline />
      <Footer />
    </div>
  );
};

export default HomePage;

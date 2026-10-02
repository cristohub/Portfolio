import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./features/agency/components/Navbar";
import { Hero } from "./features/agency/components/Hero";
import { ServicesSection } from "./features/agency/components/ServicesSection";
import { ProjectsSection } from "./features/agency/components/ProjectsSection";
import { WhyUsSection } from "./features/agency/components/WhyUsSection";
import { QRRequestSection } from "./features/agency/components/QRRequestSection";
import { AgencyFooter } from "./features/agency/components/AgencyFooter";
import AboutFounder from "./features/home/components/AboutFounder";
import WhatsAppButton from "./features/layout/components/WhatsAppButton";
import BriefingPage from "./pages/BriefingPage";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#0a0a0f] text-white min-h-screen">
        <Navbar />
        <Hero />
        <AboutFounder />
        <ServicesSection />
        <ProjectsSection />
        <WhyUsSection />
        <QRRequestSection />

        <section id="briefing" className="scroll-mt-24">
          <BriefingPage />
        </section>
        <AgencyFooter />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

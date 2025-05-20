import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingNav } from "@/components/floating-nav";
import { ProjectShowcase } from "@/components/projects-showcase";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f6f0]">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}

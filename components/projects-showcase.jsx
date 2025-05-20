"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "Sales Dashboard",
      description:
        "Interactive CRM dashboard with real-time analytics and reporting",
      image: "/projects/Unknown6.jpg",
      tags: ["Salesforce", "Analytics", "Dashboard"],
    },
    {
      id: 2,
      title: "Customer Portal",
      description:
        "Customized client portal with integrated support ticketing system",
      image: "/projects/unknown-3.jpg",
      tags: ["HubSpot", "Portal", "Support"],
    },
    {
      id: 3,
      title: "Lead Management System",
      description:
        "Automated lead scoring and nurturing workflow implementation",
      image: "/projects/unknown-5.jpg",
      tags: ["Zoho CRM", "Automation", "Lead Scoring"],
    },
    {
      id: 4,
      title: "Email Campaign Manager",
      description:
        "Personalized email marketing campaigns with performance tracking",
      image: "/projects/unknown-4.jpg",
      tags: ["Marketing", "Email", "Analytics"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  }, [projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-play briefly when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f6f0]"
      id="projects"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8c7851]">
              Recent Projects
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Explore some of my recent CRM implementations and solutions
            </p>
          </div>
        </motion.div>

        <div className="mt-12 relative">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-white/80 mb-4 max-w-lg">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#8c7851]/80 text-white text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {/*    <Button
              variant="outline"
              size="icon"
              className="absolute  left-4 top-1/2  -translate-y-1/2 bg-white/50 border-[#e6dcc6] hover:bg-none rounded-full z-10"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-[#8c7851]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 border-[#e6dcc6] hover:bg-none  rounded-full z-10"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-[#8c7851]" />
            </Button> */}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-[#8c7851]" : "bg-[#e6dcc6]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

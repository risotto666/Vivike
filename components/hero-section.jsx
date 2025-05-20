"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/typewriter-effect";
import Image from "next/image";

export function HeroSection() {
  const words = [
    { text: "CRM" },
    { text: "Specialist" },
    { text: "with" },
    { text: "2" },
    { text: "years" },
    { text: "of" },
    { text: "experience" },
  ];

  return (
    <ParallaxProvider>
      <section className="w-full relative overflow-hidden" id="home">
        <Parallax speed={-20}>
          <div className="relative h-screen w-full ">
            {/* Parallax háttér + overlay */}
            <Image
              src="/crmBg.jpg"
              alt="Background"
              fill
              priority
              className="object-cover object-center  "
            />
            <div className="absolute inset-0 bg-[#8c7851]/40 z-0"></div>

            {/* Tartalom a háttéren */}
            <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 lg:py-32 h-full flex items-center">
              <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] w-full">
                <motion.div
                  className="flex flex-col justify-center space-y-4 text-center lg:text-left text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {" "}
                  <div className="pt-4 flex justify-center md:justify-start space-x-4">
                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#8c7851] text-[#8c7851]"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{Icon.name}</span>
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Vivien Szolik
                    </h1>
                    <div className="h-12 flex justify-center lg:justify-start">
                      <TypewriterEffect
                        words={words}
                        className="text-lg sm:text-xl md:text-2xl text-white/90"
                      />
                    </div>
                    <p className="max-w-[600px] text-white/80 text-base md:text-xl mt-4 mx-auto lg:mx-0">
                      Helping businesses build meaningful customer relationships
                      through innovative CRM solutions.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
                    <Button
                      onClick={() => {
                        const section = document.getElementById("services");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                      variant="outline"
                      className=" text-white border-white  hover:bg-white/10 w-full sm:w-auto"
                    >
                      My Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => {
                        const section = document.getElementById("contact");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Contact Me
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center mt-4 lg:mt-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="relative w-full max-w-[350px] lg:max-w-none aspect-square overflow-hidden rounded-2xl shadow-xl bg-white/20 backdrop-blur-sm p-3">
                    <Image
                      alt="Vivien Szolik - CRM Specialist"
                      src="/vivi.JPG"
                      fill
                      className="object-cover object-center mix-blend-overlay rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}

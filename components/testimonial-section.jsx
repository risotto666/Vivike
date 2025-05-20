"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useState } from "react";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      content:
        "Vivien completely transformed our sales process with a custom CRM solution. We've seen a 30% increase in lead conversions since implementation.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechStart",
      avatar: "/vivi.JPG",
      rating: 5,
    },
    {
      content:
        "Working with Vivien was a game-changer for our small business. The CRM system is intuitive and perfectly tailored to our needs.",
      name: "Michael Chen",
      title: "Founder, Retail Solutions",
      avatar: "/vivi.JPG",
      rating: 5,
    },
    {
      content:
        "Vivien's expertise in CRM customization helped us streamline our customer management process. Highly recommended!",
      name: "Jessica Williams",
      title: "Operations Manager, Creative Agency",
      avatar: "/vivi.JPG",
      rating: 4,
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f6f0]"
      id="testimonials"
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
              Client Testimonials
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              What my clients say about working with me
            </p>
          </div>
        </motion.div>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${activeIndex * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white border-[#e6dcc6] max-w-2xl mx-auto">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? "fill-[#8c7851] text-[#8c7851]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-[#e6dcc6] text-[#8c7851]">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-[#8c7851]" : "bg-[#e6dcc6]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

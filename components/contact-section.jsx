"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f0e5]"
      id="contact"
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
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Have a project in mind or want to learn more about my services?
              Let's talk!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
          {/* LEFT SIDE: Contact Info with map */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white pt-6 border-[#e6dcc6] overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-[#e6dcc6] relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.041796518932!2d0.1502352768431421!3d52.242624471989735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d871af122b54d7%3A0xf36b1c24a44d7e86!2s124%20The%20Sycamores%2C%20Milton%2C%20Cambridge%20CB24%206ZH!5e0!3m2!1sen!2suk!4v1747744274634!5m2!1sen!2suk"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6 space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#8c7851] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#8c7851]">Email</h3>
                      <p className="text-gray-600">vivien@crmportfolio.com</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#8c7851] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#8c7851]">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#8c7851] mt-1" />
                    <div>
                      <h3 className="font-medium text-[#8c7851]">Location</h3>
                      <p className="text-gray-600">Cambridge</p>
                    </div>
                  </div>
                  {/* Social Icons */}
                  <div className="pt-4 flex space-x-4">
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
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white pt-6 border-[#e6dcc6] max-w-2xl mx-auto">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col  items-center justify-center h-[320px] text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="w-16 h-16  bg-green-100 rounded-full flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-medium text-[#8c7851] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#8c7851]"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-[#e6dcc6] focus-visible:ring-[#8c7851]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#8c7851]"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-[#e6dcc6] focus-visible:ring-[#8c7851]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[#8c7851]"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] border-[#e6dcc6] focus-visible:ring-[#8c7851]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#8c7851] hover:bg-[#6a5a3d] flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

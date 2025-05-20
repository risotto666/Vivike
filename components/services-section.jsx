"use client"

import { BarChart3, Users, MessageSquare, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-[#8c7851]" />,
      title: "CRM Analytics",
      description: "Custom analytics dashboards to track customer interactions and business performance.",
    },
    {
      icon: <Users className="h-12 w-12 text-[#8c7851]" />,
      title: "Lead Management",
      description: "Streamlined lead capture, tracking, and conversion processes tailored to your business.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#8c7851]" />,
      title: "Communication Tools",
      description: "Integrated communication solutions to engage with your customers effectively.",
    },
    {
      icon: <Settings className="h-12 w-12 text-[#8c7851]" />,
      title: "CRM Customization",
      description: "Personalized CRM setup to match your specific business workflows and requirements.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f0e5]" id="services">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8c7851]">My Services</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Specialized CRM solutions tailored to meet your business needs
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-white border-[#e6dcc6] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle className="text-xl text-[#8c7851] mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

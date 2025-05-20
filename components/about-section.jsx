"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { SkillBar } from "@/components/skill-bar"

export function AboutSection() {
  const skills = [
    { name: "Salesforce", level: 85 },
    { name: "HubSpot", level: 90 },
    { name: "Zoho CRM", level: 75 },
    { name: "Microsoft Dynamics", level: 70 },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f6f0]" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#8c7851]">About Me</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                I'm a dedicated CRM specialist with 2 years of experience helping businesses optimize their customer
                relationships.
              </p>
            </div>
            <ul className="grid gap-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#8c7851]" />
                <span>2 years of hands-on CRM implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#8c7851]" />
                <span>15+ successful client projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#8c7851]" />
                <span>Certified in multiple CRM platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#8c7851]" />
                <span>Specialized in small to medium business solutions</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#8c7851]">My CRM Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

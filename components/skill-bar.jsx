"use client"

import { motion } from "framer-motion"

export function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-[#8c7851]">{level}%</span>
      </div>
      <div className="h-2 w-full bg-[#e6dcc6]/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#8c7851] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

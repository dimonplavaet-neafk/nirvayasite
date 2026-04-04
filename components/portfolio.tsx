"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Клип для артиста",
    tag: "Клип",
    description: "AI-клип для независимого артиста с полным сохранением внешности и motion control",
    number: "01",
  },
  {
    title: "Рекламный ролик бренда",
    tag: "Реклама",
    description: "Рекламная кампания для премиального бренда с кинематографичными визуальными эффектами",
    number: "02",
  },
  {
    title: "Промо для маркетплейса",
    tag: "Промо",
    description: "Серия промо-роликов для запуска нового продукта на маркетплейсе",
    number: "03",
  },
  {
    title: "Social Media кампания",
    tag: "Reels",
    description: "Вертикальные ролики для Instagram и TikTok с миллионными охватами",
    number: "04",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Vertical gradient from top - teal at 0.02 opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `linear-gradient(180deg, var(--teal) 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Heading with circuit-style decorations */}
          <div className="flex items-center justify-center gap-4">
            {/* Left circuit decoration */}
            <div className="hidden md:flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px origin-right"
                style={{ backgroundColor: 'rgba(200,148,62,0.15)' }}
              />
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: 20 } : {}}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="w-px origin-top"
                style={{ backgroundColor: 'rgba(200,148,62,0.15)' }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: 1.1 }}
                className="w-[3px] h-[3px] rounded-full bg-gold -ml-[1.5px]"
              />
            </div>
            
            <h2 className="font-heading font-semibold text-3xl md:text-5xl uppercase tracking-[0.12em] text-center">
              Showreel & Кейсы
            </h2>
            
            {/* Right circuit decoration - mirrored */}
            <div className="hidden md:flex items-center flex-row-reverse">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px origin-left"
                style={{ backgroundColor: 'rgba(200,148,62,0.15)' }}
              />
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: 20 } : {}}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="w-px origin-top"
                style={{ backgroundColor: 'rgba(200,148,62,0.15)' }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: 1.1 }}
                className="w-[3px] h-[3px] rounded-full bg-gold -mr-[1.5px]"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-placeholder-bg border border-placeholder-border rounded-sm overflow-hidden transition-all duration-500 portfolio-card">
                {/* Number in top left */}
                <span className="absolute top-4 left-4 font-heading font-semibold text-2xl text-gold/30 z-10">
                  {project.number}
                </span>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center text-foreground-muted text-sm">
                  16:9 превью
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-foreground font-medium mb-4 max-w-xs">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-foreground font-medium text-sm tracking-wide hover:gap-3 transition-all border border-foreground/50 px-4 py-2 rounded-sm">
                    Смотреть <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Animated border on hover - draws clockwise */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2"
                    className="portfolio-border-animation"
                    style={{
                      strokeDasharray: '1000',
                      strokeDashoffset: '1000',
                    }}
                  />
                </svg>
              </div>

              {/* Project info */}
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-heading font-semibold text-lg uppercase tracking-wider group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <span className="text-foreground-muted text-sm font-heading font-normal">
                  {project.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

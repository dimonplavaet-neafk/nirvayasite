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

// Semicircle decoration component
function SemicircleDecoration({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex items-center justify-center gap-[10px] mb-8">
      {/* Left semicircle - opens left */}
      <motion.svg
        initial={{ opacity: 0, x: 5 }}
        animate={isInView ? { opacity: 0.2, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
      >
        <path
          d="M40 20 A20 20 0 0 1 40 0"
          stroke="#C8943E"
          strokeWidth="1"
          fill="none"
        />
      </motion.svg>
      
      {/* Right semicircle - opens right */}
      <motion.svg
        initial={{ opacity: 0, x: -5 }}
        animate={isInView ? { opacity: 0.2, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
      >
        <path
          d="M0 0 A20 20 0 0 1 0 20"
          stroke="#C8943E"
          strokeWidth="1"
          fill="none"
        />
      </motion.svg>
    </div>
  )
}

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
          {/* Semicircle decoration above heading */}
          <SemicircleDecoration isInView={isInView} />
          
          {/* Heading with extending lines - centered */}
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold hidden md:block"
            />
            <h2 className="font-serif font-normal text-3xl md:text-5xl uppercase tracking-[0.15em] text-center">
              Избранные работы
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold hidden md:block"
            />
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
                <span className="absolute top-4 left-4 font-heading text-2xl text-gold/30 z-10">
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
                <h3 className="font-heading text-lg uppercase tracking-wider group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <span className="text-foreground-muted text-sm font-serif">
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

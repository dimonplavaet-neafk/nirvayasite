"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Виталий",
    role: "Креативный директор / Дизайн",
    bio: "Более 8 лет в визуальном дизайне и арт-дирекшне. Работал с брендами в fashion, музыкальной индустрии и digital-рекламе. Отвечает за визуальную концепцию каждого проекта — от цветовой палитры и композиции кадра до финальной стилистики. Его подход: каждый кадр должен выглядеть как произведение искусства.",
  },
  {
    name: "Дмитрий",
    role: "AI-продюсер / Генерация",
    bio: "Специалист по генеративным нейросетям с глубоким пониманием архитектуры моделей Runway, Kling, Sora, Midjourney и Stable Diffusion. Более 5 лет в сфере машинного обучения и компьютерного зрения. Владеет тонкой настройкой промптов, LoRA-обучением и техниками сохранения консистентности персонажа. Превращает техническую мощь AI в кинематографичный результат.",
  },
  {
    name: "Владислав",
    role: "Монтажёр / Пост-продакшн",
    bio: "Профессиональный монтажёр с опытом работы над полнометражными проектами, рекламными кампаниями и музыкальными клипами. Мастер DaVinci Resolve: цветокоррекция, многослойный композитинг, motion graphics и звуковой дизайн. Знает, как превратить набор AI-сцен в единую историю с ритмом, драматургией и эмоциональным воздействием на зрителя.",
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-[0.15em]">
            Наша команда
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular placeholder image */}
              <div className="relative mb-6 group/avatar">
                <div className="w-[150px] h-[150px] rounded-full bg-placeholder-bg border border-placeholder-border flex items-center justify-center overflow-hidden relative z-10">
                  <span className="text-foreground-muted text-xs">Фото</span>
                </div>
                {/* Teal glow behind circle */}
                <div className="absolute inset-0 rounded-full bg-teal/20 blur-xl opacity-50 group-hover/avatar:opacity-80 transition-opacity" />
              </div>

              {/* Name */}
              <h3 className="font-heading text-xl text-gold uppercase tracking-wider mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-foreground-muted text-sm mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-foreground/70 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

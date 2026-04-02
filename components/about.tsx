"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Film, Sparkles, Layers, Clock } from "lucide-react"

const stats = [
  { icon: Film, number: 50, suffix: "+", label: "завершённых проектов" },
  { icon: Sparkles, number: 0, suffix: "", label: "AI + режиссура", isText: true, text: "AI + режиссура" },
  { icon: Layers, number: 0, suffix: "", label: "кино-качество", isText: true, text: "Кино-качество" },
  { icon: Clock, number: 7, suffix: "", label: "дней средний срок" },
]

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || value === 0 || hasAnimated) return

    setHasAnimated(true)
    let startTime: number | null = null
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, hasAnimated])

  return (
    <span>
      {displayValue}{suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })

  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Diamond grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--gold) 1px, transparent 1px),
            linear-gradient(-45deg, var(--gold) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text content - 60% */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-gold text-sm tracking-wider mb-4"
            >
              О NIRVAYA STUDIO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.15em] leading-tight mb-8"
            >
              Мы не используем технологии — мы ими владеем
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 leading-relaxed"
            >
              <p>
                <span className="text-gold font-medium">NIRVAYA STUDIO</span> — продакшн-студия нового формата. Мы — команда из трёх профессионалов, каждый из которых мастер в своей области: дизайн, генерация и монтаж.
              </p>
              <p>
                Мы создаём кинематографичные клипы, рекламные ролики и промо-видео, которые выглядят на миллион — независимо от масштаба бюджета.
              </p>
              <p>
                Наш подход: сочетание классического видеопроизводства, глубокого понимания визуального языка и передовых инструментов, включая AI-генерацию, motion control и профессиональную пост-обработку в DaVinci Resolve. <span className="text-foreground">Мы умеем всё — от живой съёмки до полностью сгенерированных миров.</span>
              </p>
              <p>
                AI для нас — это инструмент, как камера или свет. Не замена мастерства, а его усилитель. Наша ключевая сила — сохранение внешности реального человека в кадре, режиссура каждой сцены и монтаж, который превращает набор кадров в историю с эмоцией и ритмом.
              </p>
              <p className="font-serif italic text-foreground/60">
                NIRVAYA STUDIO — это несокрушимое качество. Каждый кадр. Каждый проект.
              </p>
            </motion.div>
          </div>

          {/* Image placeholder - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[3/4] bg-placeholder-bg border border-placeholder-border rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-foreground-muted text-sm">
                Стилизованное изображение
              </div>
              {/* Teal glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-teal/20 blur-3xl opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-gold/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-4" />
                <div className="font-heading text-3xl md:text-4xl text-gold mb-2">
                  {stat.isText ? (
                    <span className="text-xl md:text-2xl">{stat.text}</span>
                  ) : (
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} isInView={statsInView} />
                  )}
                </div>
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Музыкальные клипы",
    description: "Полноценные AI-клипы с сохранением внешности артиста, motion control и кинематографичным монтажом",
  },
  {
    title: "Рекламные ролики",
    description: "Коммерческая реклама для брендов, продуктов и сервисов — дорого, масштабно, эффективно",
  },
  {
    title: "Промо для маркетплейсов",
    description: "Видео-карточки и ролики для Amazon, Wildberries, Ozon — продающий визуал нового уровня",
  },
  {
    title: "Social Media и Reels",
    description: "Короткие вертикальные ролики для Instagram, TikTok, YouTube Shorts — цепляющие с первой секунды",
  },
  {
    title: "Контент для брендов",
    description: "Имиджевые ролики, презентации продуктов, визуальные истории для digital-маркетинга",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Diamond grid background at 0.02 opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--gold) 1px, transparent 1px),
            linear-gradient(-45deg, var(--gold) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Heading with extending lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold hidden md:block"
            />
            <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-[0.15em]">
              Что мы создаём
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gold hidden md:block"
            />
          </div>
          
          <p className="font-serif text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Каждый проект — это кинематографичная история с характером и стилем
          </p>
          
          {/* Pulsing teal line below subtitle */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-px mx-auto animate-pulse-line"
            style={{ backgroundColor: 'var(--teal)' }}
          />
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible md:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-auto snap-start group"
              >
                <div 
                  className="relative h-[380px] md:h-[440px] bg-placeholder-bg rounded-sm overflow-hidden cursor-pointer transition-all duration-500 group service-card"
                  style={{
                    border: '1px solid transparent',
                    backgroundImage: `linear-gradient(var(--placeholder-bg), var(--placeholder-bg)), linear-gradient(135deg, rgba(200, 148, 62, 0.3), rgba(27, 107, 138, 0.3))`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  {/* Background placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0E1A]/90" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-lg uppercase tracking-wider">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gold transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <p className="text-foreground-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

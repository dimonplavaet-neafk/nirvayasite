"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const mainProjects = [
  {
    title: "Клипы",
    tag: "Музыкальные видео",
    description: "Музыкальные клипы, сторителлинг, визуальные истории",
    number: "01",
  },
  {
    title: "Рекламные ролики",
    tag: "Коммерция",
    description: "Рекламные кампании, промо, презентации продуктов",
    number: "02",
  },
]

const styles = [
  {
    title: "Аниме",
    description: "Дух японской анимации в новом прочтении",
  },
  {
    title: "Пластилин",
    description: "Тактильный мир, оживший на экране",
  },
  {
    title: "Pixar",
    description: "Мировой стандарт анимации — без студии в Калифорнии",
  },
  {
    title: "Палех",
    description: "Вековые традиции в цифровом формате",
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const stylesRef = useRef(null)
  const stylesInView = useInView(stylesRef, { once: true, amount: 0.3 })

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "linear-gradient(180deg, var(--teal) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px origin-right"
                style={{ backgroundColor: "rgba(200,148,62,0.15)" }}
              />
            </div>

            <h2 className="font-heading font-semibold text-3xl md:text-5xl uppercase tracking-[0.12em] text-center">
              Наши работы
            </h2>

            <div className="hidden md:flex items-center flex-row-reverse">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px origin-left"
                style={{ backgroundColor: "rgba(200,148,62,0.15)" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Два основных проекта 16:9 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-placeholder-bg border border-placeholder-border rounded-sm overflow-hidden transition-all duration-500 portfolio-card">
                <span className="absolute top-4 left-4 font-heading font-semibold text-2xl text-gold/30 z-10">
                  {project.number}
                </span>
                <div className="absolute inset-0 flex items-center justify-center text-foreground-muted text-sm">
                  16:9 превью
                </div>
                <div className="absolute inset-0 bg-teal/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-foreground font-medium mb-4 max-w-xs">{project.description}</p>
                  <button className="inline-flex items-center gap-2 text-foreground font-medium text-sm tracking-wide hover:gap-3 transition-all border border-foreground/50 px-4 py-2 rounded-sm">
                    Смотреть <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100">
                  <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="var(--gold)" strokeWidth="2" className="portfolio-border-animation" style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }} />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-lg uppercase tracking-wider group-hover:text-gold transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Подзаголовок стилей */}
        <div ref={stylesRef} className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={stylesInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="font-heading font-semibold text-2xl md:text-4xl uppercase tracking-[0.15em] styles-gradient-text">
              Стили
            </h3>
            <p className="text-foreground/50 text-sm md:text-base mt-3 max-w-md mx-auto">
              Каждый стиль — это отдельная вселенная. Выбирайте эстетику, а мы воплотим.
            </p>
          </motion.div>
        </div>

        {/* Сетка стилей 2x2 */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {styles.map((style, index) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              className="group cursor-pointer"
            >
              <div
                className="relative aspect-square rounded-sm overflow-hidden transition-all duration-500"
                style={{
                  border: "1px solid rgba(200,148,62,0.15)",
                  background: "rgba(14,18,37,0.6)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-foreground-muted text-xs">
                  Превью
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-heading font-semibold text-base md:text-lg uppercase tracking-wider text-gold mb-2">{style.title}</h4>
                  <p className="text-foreground-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{style.description}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

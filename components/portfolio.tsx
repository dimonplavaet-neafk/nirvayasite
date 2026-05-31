"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

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
  const stylesInView = useInView(stylesRef, { once: true, amount: 0.2 })

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "linear-gradient(180deg, var(--teal) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Заголовок DEMO REEL с blur fade-in */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading font-semibold text-4xl md:text-6xl uppercase tracking-[0.2em]">
            DEMO REEL
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[80px] h-px mx-auto mt-4"
            style={{
              background: "linear-gradient(to right, transparent, #C8943E, transparent)",
            }}
          />
        </motion.div>

        {/* Два основных проекта 16:9 */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
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
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-heading font-semibold text-lg uppercase tracking-wider group-hover:text-gold transition-colors">{project.title}</h3>
                <span className="text-foreground-muted text-sm font-heading font-normal">{project.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Секция стилей */}
        <div ref={stylesRef}>
          {/* Облако-описание стилей */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stylesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 flex justify-center"
          >
            <div
              className="relative max-w-2xl w-full rounded-2xl px-8 py-7 md:px-10 md:py-8 text-center"
              style={{
                background: "rgba(14,18,37,0.7)",
                border: "1px solid rgba(200,148,62,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 60px rgba(27,107,138,0.08), 0 0 120px rgba(200,148,62,0.04)",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/20 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/20 rounded-br-2xl" />

              <p className="font-heading font-normal text-gold text-sm tracking-wider mb-3">
                СТИЛИ
              </p>
              <h3 className="font-heading font-semibold text-xl md:text-2xl uppercase tracking-[0.1em] leading-tight mb-3">
                Мы работаем в любом визуальном стиле
              </h3>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                Каждый стиль — это отдельная вселенная. Выбирайте эстетику, а мы воплотим.
              </p>
            </div>
          </motion.div>

          {/* Сетка стилей 2x2, формат 16:9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {styles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                animate={stylesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative aspect-video rounded-sm overflow-hidden transition-all duration-500 hover:border-gold/40"
                  style={{
                    border: "1px solid rgba(200,148,62,0.15)",
                    background: "rgba(14,18,37,0.6)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-gold/40 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-heading font-semibold text-base md:text-lg uppercase tracking-wider text-gold mb-1">{style.title}</h4>
                    <p className="text-foreground-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{style.description}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

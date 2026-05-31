"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function FaceTransfer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header with split-reveal */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-heading font-normal text-gold text-sm tracking-wider mb-4"
          >
            ТЕХНОЛОГИЯ СОХРАНЕНИЯ ВНЕШНОСТИ
          </motion.p>

          {/* Split reveal heading */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] leading-tight"
            >
              Ваше лицо —
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
              className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] leading-tight"
            >
              в любой вселенной
            </motion.h2>
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="origin-left w-[100px] h-px mb-6"
            style={{
              background: "linear-gradient(to right, #C8943E, transparent)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/80 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Мы сохраняем внешность реального человека в AI-видео с точностью до мельчайших черт.
            Технология, которая переносит вас в любой сценарий — без грима, без дублёров, без съёмок.
          </motion.p>
        </div>

        {/* Row 1: Video 16:9 + Photo 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-6"
        >
          {/* Video placeholder 16:9 */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Photo placeholder 1:1 */}
          <div
            className="relative w-full md:w-[280px] lg:w-[320px] aspect-square rounded-sm overflow-hidden flex-shrink-0"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gold/30">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Video 16:9 + Photo 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
        >
          {/* Video placeholder 16:9 */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Photo placeholder 1:1 */}
          <div
            className="relative w-full md:w-[280px] lg:w-[320px] aspect-square rounded-sm overflow-hidden flex-shrink-0"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gold/30">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

// Generate particle data deterministically to avoid hydration issues
function generateParticles(count: number) {
  const particles = []
  for (let i = 0; i < count; i++) {
    const seed = i * 1.618033988749
    particles.push({
      id: i,
      left: `${(seed * 100) % 100}%`,
      size: 1 + ((seed * 3) % 2),
      opacity: 0.2 + ((seed * 0.4) % 0.4),
      duration: 8 + ((seed * 12) % 12),
      delay: (seed * 5) % 5,
      drift: -20 + ((seed * 40) % 40),
    })
  }
  return particles
}

export function Hero() {
  const particles = useMemo(() => generateParticles(50), [])

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden pt-24">
      {/* Clean background with radial glow */}
      <div className="absolute inset-0 bg-[#0A0E1A]">
        {/* Soft radial gradient glow in lower center - indigo + gold blend */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] opacity-[0.18]"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(27, 107, 138, 0.6), rgba(200, 148, 62, 0.3) 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Animated floating particles - temple dust effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gold animate-float-up"
            style={{
              left: particle.left,
              bottom: '-10px',
              width: particle.size,
              height: particle.size,
              '--particle-opacity': particle.opacity,
              '--particle-duration': `${particle.duration}s`,
              '--particle-delay': `${particle.delay}s`,
              '--particle-drift': `${particle.drift}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Dark gradient overlay for text readability - solid at bottom, transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/80 via-transparent to-transparent" />

      {/* Content - positioned bottom-left */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="lg:max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-gold text-sm md:text-base tracking-wider mb-4"
          >
            ВИДЕОПРОДАКШН СТУДИЯ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-[5rem] uppercase tracking-[0.08em] leading-[1.1] mb-6 text-balance"
          >
            Мы не используем технологии — мы ими владеем
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif italic text-foreground/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Кинематографичные клипы, рекламные ролики и промо-видео. Живая съёмка, AI-генерация, профессиональный монтаж — без границ и компромиссов
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gold text-gold font-medium text-sm tracking-wide hover:bg-gold hover:text-[#0A0E1A] transition-all duration-300 rounded-sm"
            >
              Смотреть шоурил
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-saffron text-foreground font-medium text-sm tracking-wide transition-all duration-300 saffron-glow rounded-sm"
            >
              Обсудить проект
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

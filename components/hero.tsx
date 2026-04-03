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

      {/* Video placeholder - positioned right and upper area, hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 right-6 md:right-12 lg:right-16 -translate-y-1/2 w-[60%] lg:w-[65%] max-w-4xl z-[5]">
        <div className="relative aspect-video">
          {/* Video container with rounded corners and border */}
          <div 
            className="absolute inset-0 bg-[#0D1118] rounded-lg overflow-hidden"
            style={{
              border: '1px solid rgba(200, 148, 62, 0.2)',
            }}
          >
            {/* Dark video placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center text-foreground-muted/50 text-sm">
              <span className="font-serif italic">Showreel Video</span>
            </div>
          </div>
          
          {/* Gradient overlays to fade edges into background */}
          {/* Left fade */}
          <div 
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, #0A0E1A, transparent)'
            }}
          />
          {/* Top fade */}
          <div 
            className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #0A0E1A, transparent)'
            }}
          />
          {/* Right fade */}
          <div 
            className="absolute inset-y-0 right-0 w-1/6 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, #0A0E1A, transparent)'
            }}
          />
          {/* Bottom fade */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, #0A0E1A, transparent)'
            }}
          />
        </div>
      </div>

      {/* Animated floating particles - temple dust effect - ON TOP of video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[15]">
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent z-[6]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/90 via-[#0A0E1A]/50 to-transparent z-[6]" />

      {/* Content - positioned bottom-left */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-full md:max-w-[50%]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-3xl md:text-4xl lg:text-[4.5rem] leading-[1.1] mb-4 text-balance"
            style={{
              background: 'linear-gradient(135deg, #C8943E, #E8D5A8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ваша история заслуживает лучшего кадра
          </motion.h1>

          {/* Thin gold breathing line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[60px] h-px mb-6 animate-breathe-gold-line origin-left"
            style={{ backgroundColor: '#C8943E' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-[1.15rem] max-w-xl mb-8 leading-[1.8]"
            style={{ color: '#B0AAA0' }}
          >
            Видеопродакшн для артистов, брендов и маркетплейсов — от концепта до финального монтажа
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

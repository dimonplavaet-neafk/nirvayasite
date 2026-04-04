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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-[#0A0E1A]">
        {/* Soft radial gradient glow in center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[80%] opacity-[0.12]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(27, 107, 138, 0.5), rgba(200, 148, 62, 0.2) 50%, transparent 80%)'
          }}
        />
      </div>

      {/* Large centered video placeholder - 85% of hero area */}
      <div className="relative w-[90%] max-w-6xl mx-auto z-[5]" style={{ aspectRatio: '16/9' }}>
        <div className="relative w-full h-full">
          {/* Video container with rounded corners and border */}
          <div 
            className="absolute inset-0 bg-[#0D1118] overflow-hidden"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(200, 148, 62, 0.15)',
            }}
          >
            {/* Dark video placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center text-foreground-muted/50 text-sm">
              <span className="font-heading">Showreel Video</span>
            </div>
          </div>
          
          {/* Gradient overlays to fade edges into background */}
          {/* Left fade */}
          <div 
            className="absolute inset-y-0 left-0 w-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, #0A0E1A, transparent)',
              borderRadius: '12px 0 0 12px',
            }}
          />
          {/* Top fade */}
          <div 
            className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #0A0E1A, transparent)',
              borderRadius: '12px 12px 0 0',
            }}
          />
          {/* Right fade */}
          <div 
            className="absolute inset-y-0 right-0 w-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, #0A0E1A, transparent)',
              borderRadius: '0 12px 12px 0',
            }}
          />
          {/* Bottom fade */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, #0A0E1A, transparent)',
              borderRadius: '0 0 12px 12px',
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

      {/* Content - positioned below video */}
      <div className="relative z-20 mt-12 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-[1.1rem] mb-8 leading-relaxed"
          style={{ 
            color: '#B0AAA0',
            letterSpacing: '0.02em',
          }}
        >
          Клипы, рекламные ролики, контент для маркетплейсов, Reels, монтаж — всё в одной студии
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
      
      {/* Bottom padding spacer */}
      <div className="h-[140px]" />
      
      {/* Gold separator line above marquee */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(200,148,62,0.08), transparent)'
        }}
      />
    </section>
  )
}

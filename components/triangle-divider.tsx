"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// DIVIDER 1: Animated triangle made of three dots (Hero → Services)
export function TriangleDotsDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: 40, height: 40 }}
      >
        {/* Three dots as triangle vertices */}
        {/* Top dot */}
        <div 
          className="absolute w-1.5 h-1.5 rounded-full bg-gold animate-dot-pulse-1"
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
        />
        {/* Bottom-left dot */}
        <div 
          className="absolute w-1.5 h-1.5 rounded-full bg-gold animate-dot-pulse-2"
          style={{ bottom: 0, left: 0 }}
        />
        {/* Bottom-right dot */}
        <div 
          className="absolute w-1.5 h-1.5 rounded-full bg-gold animate-dot-pulse-3"
          style={{ bottom: 0, right: 0 }}
        />
        
        {/* Connecting lines */}
        <svg 
          className="absolute inset-0" 
          viewBox="0 0 40 40"
          fill="none"
        >
          {/* Top to bottom-left */}
          <line x1="20" y1="3" x2="3" y2="37" stroke="#C8943E" strokeWidth="1" opacity="0.2" />
          {/* Bottom-left to bottom-right */}
          <line x1="3" y1="37" x2="37" y2="37" stroke="#C8943E" strokeWidth="1" opacity="0.2" />
          {/* Bottom-right to top */}
          <line x1="37" y1="37" x2="20" y2="3" stroke="#C8943E" strokeWidth="1" opacity="0.2" />
        </svg>
        
        {/* Center dot with glow */}
        <div 
          className="absolute w-1 h-1 rounded-full bg-gold animate-center-glow"
          style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </motion.div>
    </div>
  )
}

// DIVIDER 2: SVG Lotus flower outline (Services → Portfolio)
export function LotusDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className={isInView ? "animate-lotus-breathe" : ""}
      >
        <svg
          width="50"
          height="35"
          viewBox="0 0 50 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center petal */}
          <path
            d="M25 2 Q25 15, 25 25 Q22 15, 25 2"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 50,
              strokeDashoffset: isInView ? 0 : 50,
              transition: 'stroke-dashoffset 0.3s ease-out'
            }}
          />
          <path
            d="M25 2 Q25 15, 25 25 Q28 15, 25 2"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 50,
              strokeDashoffset: isInView ? 0 : 50,
              transition: 'stroke-dashoffset 0.3s ease-out 0.1s'
            }}
          />
          
          {/* Left inner petals */}
          <path
            d="M25 25 Q18 18, 14 8 Q20 15, 25 25"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 60,
              strokeDashoffset: isInView ? 0 : 60,
              transition: 'stroke-dashoffset 0.3s ease-out 0.2s'
            }}
          />
          
          {/* Right inner petals */}
          <path
            d="M25 25 Q32 18, 36 8 Q30 15, 25 25"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 60,
              strokeDashoffset: isInView ? 0 : 60,
              transition: 'stroke-dashoffset 0.3s ease-out 0.3s'
            }}
          />
          
          {/* Left outer petals */}
          <path
            d="M25 28 Q12 22, 5 12 Q15 20, 25 28"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 70,
              strokeDashoffset: isInView ? 0 : 70,
              transition: 'stroke-dashoffset 0.3s ease-out 0.4s'
            }}
          />
          
          {/* Right outer petals */}
          <path
            d="M25 28 Q38 22, 45 12 Q35 20, 25 28"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 70,
              strokeDashoffset: isInView ? 0 : 70,
              transition: 'stroke-dashoffset 0.3s ease-out 0.5s'
            }}
          />
          
          {/* Base curve */}
          <path
            d="M15 32 Q25 28, 35 32"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: isInView ? 0 : 30,
              transition: 'stroke-dashoffset 0.3s ease-out 0.6s'
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 3: Mini-mandala with radiating lines (Portfolio → About)
export function MandalaDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const lines = 8
  const lineLength = 18
  const centerSize = 3

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ width: 40, height: 40 }}
      >
        {/* Rotating container for lines */}
        <div 
          className={`absolute inset-0 ${isInView ? 'animate-mandala-rotate' : ''}`}
          style={{ transformOrigin: 'center center' }}
        >
          {Array.from({ length: lines }).map((_, i) => {
            const angle = (360 / lines) * i
            return (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ 
                  duration: 0.3, 
                  delay: i * 0.1,
                  ease: 'easeOut'
                }}
                className="absolute bg-gold"
                style={{
                  width: 1,
                  height: lineLength,
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'top center',
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  opacity: 0.3
                }}
              />
            )
          })}
        </div>
        
        {/* Center dot */}
        <div 
          className="absolute bg-gold rounded-full animate-mandala-center-pulse"
          style={{
            width: centerSize,
            height: centerSize,
            top: '50%',
            left: '50%',
          }}
        />
      </motion.div>
    </div>
  )
}

// DIVIDER 4: Vertical growing line with dot (About/Team → Contacts)
export function VerticalLineDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Growing vertical line */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: 60, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-px bg-gold"
        />
        
        {/* Bottom dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="w-1 h-1 rounded-full bg-gold mt-0"
        />
      </div>
    </div>
  )
}

// Keep the original TriangleDivider for backward compatibility
export function TriangleDivider() {
  return <TriangleDotsDivider />
}

// Triangle symbol for logo
export function TriangleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 1L19 17H1L10 1Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="10"
        cy="11"
        r="2"
        fill="currentColor"
      />
    </svg>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// DIVIDER 1: Triangle with pulsing center dot (Hero → Services)
// Triangle: 30x26px, equilateral outline, center dot at centroid
export function TriangleDotsDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Centroid of equilateral triangle with vertices at (15,1), (1,25), (29,25)
  // Centroid = ((15+1+29)/3, (1+25+25)/3) = (15, 17)
  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <svg
          width="30"
          height="26"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Equilateral triangle outline */}
          <path
            d="M15 1L29 25H1L15 1Z"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
          />
          {/* Center pulsing dot at centroid (15, 17) */}
          <circle
            cx="15"
            cy="17"
            r="2"
            fill="#C8943E"
            className="animate-triangle-center-pulse"
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 2: Lotus flower outline (Services → Portfolio)
// 5 petals, thin gold stroke, 50px wide, draws on scroll, then breathes
export function LotusDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={isInView ? "animate-lotus-breathe" : ""}
      >
        <svg
          width="50"
          height="30"
          viewBox="0 0 50 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 5 lotus petals arranged symmetrically */}
          {/* Center petal */}
          <motion.path
            d="M25 2 Q25 15, 25 28 Q22 15, 25 2 M25 2 Q25 15, 25 28 Q28 15, 25 2"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          {/* Left inner petal */}
          <motion.path
            d="M18 5 Q15 15, 18 26 Q13 15, 18 5"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {/* Right inner petal */}
          <motion.path
            d="M32 5 Q35 15, 32 26 Q37 15, 32 5"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {/* Left outer petal */}
          <motion.path
            d="M10 8 Q5 16, 10 24 Q3 16, 10 8"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          />
          {/* Right outer petal */}
          <motion.path
            d="M40 8 Q45 16, 40 24 Q47 16, 40 8"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 3: Mini starburst/mandala (Portfolio → About)
// 8 lines radiating from center, viewBox 0 0 40 40, center at 20 20
// Lines at 0, 45, 90, 135, 180, 225, 270, 315 degrees, 15px long
// Center dot pulses opacity 0.3 to 0.8, whole thing rotates 360deg over 30s
export function MandalaDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  const lineLength = 15
  const center = 20

  const getLineEnd = (angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180
    return {
      x: center + Math.cos(angleRad) * lineLength,
      y: center + Math.sin(angleRad) * lineLength
    }
  }

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={isInView ? "animate-mandala-rotate" : ""}
        style={{ width: 40, height: 40 }}
      >
        <svg
          viewBox="0 0 40 40"
          width="40"
          height="40"
          fill="none"
        >
          {/* 8 radiating lines */}
          {angles.map((angle, i) => {
            const end = getLineEnd(angle)
            return (
              <motion.line
                key={angle}
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="#C8943E"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: i * 0.08,
                  ease: 'easeOut'
                }}
              />
            )
          })}

          {/* Center dot with pulse animation */}
          <circle
            cx={center}
            cy={center}
            r="2"
            fill="#C8943E"
            className="animate-center-glow"
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 4: Vertical gold line with bottom dot (About/Team → Contacts)
// Grows top to bottom on scroll, height 60px, width 1px, #C8943E
// 4px dot at bottom fades in after line grows
export function VerticalLineDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-8 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Vertical line that grows top to bottom */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: 60, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-px"
          style={{ backgroundColor: '#C8943E' }}
        />
        {/* Bottom dot that fades in */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="w-1 h-1 rounded-full mt-0"
          style={{ backgroundColor: '#C8943E' }}
        />
      </div>
    </div>
  )
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

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function TriangleDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Triangle SVG - thin outline with pulsing dot in center */}
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold"
        >
          {/* Triangle outline */}
          <path
            d="M18 2L34 30H2L18 2Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          {/* Center dot with breathing animation */}
          <circle
            cx="18"
            cy="20"
            r="3"
            fill="currentColor"
            className="animate-breathe-dot origin-center"
          />
        </svg>
      </motion.div>
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

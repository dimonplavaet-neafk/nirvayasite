"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Universal triangle divider with pulsing center dot
// Used for ALL section dividers on the page
export function TriangleDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

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
          {/* Center pulsing dot - geometric center at (15, 17) for equilateral triangle */}
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

// Alias exports for backward compatibility
export const TriangleDotsDivider = TriangleDivider
export const LotusDivider = TriangleDivider
export const MandalaDivider = TriangleDivider
export const VerticalLineDivider = TriangleDivider

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

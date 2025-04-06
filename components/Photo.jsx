"use client";

import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
  // Original aspect ratio constants
  const originalWidth = 821;
  const originalHeight = 973;
  const aspectRatio = originalHeight / originalWidth;

  const horizontalOffset = 400;
  const verticalOffset = 400;

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* Container with preserved aspect ratio - smaller dimensions */}
        <div className="relative w-[240px] aspect-[821/973] @xl:w-[400px] mx-auto">
          <Image
            src="/assets/Areen_image2_bg_removed.png"
            priority
            quality={100}
            fill
            alt="Areen's Image"
            className="object-contain"
          />

          {/* SVG maintains same aspect ratio */}
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="transparent"
            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Top line */}
            <motion.line
              x1="0"
              y1="0"
              x2={originalWidth}
              y2="0"
              stroke="var(--color-accent)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="120 80"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -horizontalOffset }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Right line */}
            <motion.line
              x1={originalWidth}
              y1="0"
              x2={originalWidth}
              y2={originalHeight}
              stroke="var(--color-accent)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="120 80"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -verticalOffset }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Bottom line */}
            <motion.line
              x1={originalWidth}
              y1={originalHeight}
              x2="0"
              y2={originalHeight}
              stroke="var(--color-accent)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="120 80"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -horizontalOffset }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Left line */}
            <motion.line
              x1="0"
              y1={originalHeight}
              x2="0"
              y2="0"
              stroke="var(--color-accent)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="120 80"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -verticalOffset }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
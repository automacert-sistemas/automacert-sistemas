'use client'
import { motion, useAnimation, useInView } from 'framer-motion'

import { cn } from '@/lib/utils'
import { useEffect, useRef, type ReactNode } from "react"

const animationVariants = {
  'slide-right': {
    variants: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
  },
  'slide-left': {
    variants: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
  },
  'slide-up': {
    variants: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
  },
  'slide-down': {
    variants: {
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, x: 0 },
    },
  },
  'expand': {
    variants: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
}

type Props = {
  children: ReactNode
  className?: string
  animation: keyof typeof animationVariants
  duration?: number
  delay?: number
  hasScrollAnimation?: boolean
}

export default function AnimatedElement({ children, animation, duration = 0.5, delay, className, hasScrollAnimation = true }: Props) {
  const ref = useRef(null)
  const variant = animationVariants[animation].variants
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && hasScrollAnimation) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className={cn('', className)}
      variants={variant}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  )
}
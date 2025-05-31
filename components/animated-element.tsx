'use client'

import { motion } from 'framer-motion'

import type { ReactNode } from "react"

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
      visible: { opacity: 1, x: 0 },
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
  animation: keyof typeof animationVariants
  duration?: number
  delay?: number
}

export default function AnimatedElement({ children, animation, duration = 0.5, delay }: Props) {
  const variant = animationVariants[animation].variants

  return (
    <motion.div
      className='w-fit'
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{ duration, delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  )
}
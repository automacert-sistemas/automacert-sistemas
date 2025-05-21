import type { StaticImageData } from "next/image"

export default interface Solution {
  image: StaticImageData
  solution: string
  title: string
  description: string
  benefits: string[]
  href: string
}
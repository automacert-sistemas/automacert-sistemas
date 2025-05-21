import type { StaticImageData } from "next/image"
import Image from "next/image"

type Props = {
  image: StaticImageData
  isActive?: boolean
  onClick: () => void
}

export default function SolutionCard({image, isActive = false, onClick}: Props) {
  return (
    <div 
      data-active={isActive}
      className="w-2/3 data-[active=true]:bg-background data-[active=true]:border hover:bg-slate-50 hover:cursor-pointer border-primary grid place-items-center rounded-2xl py-6 transition-all"
      onClick={onClick}
    >
      <Image src={image} alt=""/>
    </div>
  )
}
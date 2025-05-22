import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DynamicIcon, type dynamicIconImports } from "lucide-react/dynamic"

export interface CertificateCardProps {
  iconNames: Array<keyof typeof dynamicIconImports>
  title: string
  description: string
}

export default function CertificateCard({iconNames, title, description}: CertificateCardProps) {
  return (
    <Card className="w-2/3 md:w-[250px] h-[250px] bg-background text-foreground text-xl font-semibold py-6 px-3 rounded-2xl">
    <CardHeader className='flex items-center justify-center gap-5'>
      {iconNames.map((icon, index) => (
      <DynamicIcon key={index} name={icon} className='size-14 lg:size-16 text-primary' />
      ))}
    </CardHeader>
    <CardContent className='w-full flex flex-col items-center justify-center gap-5'>
      <h4 className='text-xl leading-7 font-semibold text-slate-900'>{title}</h4>
      <p className='text-slate-700 text-center text-base leading-6'>{description}</p>
    </CardContent>
  </Card>
  )
}
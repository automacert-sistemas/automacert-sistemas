
// components
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// icons
import { DynamicIcon, type dynamicIconImports } from 'lucide-react/dynamic'

interface Props {
  icon: keyof typeof dynamicIconImports
  title: string
  description: string
}

export default function ServiceCard({ title, icon, description }: Props) {
  return (
    <Card className="w-full max-w-[350px] sm:h-[350px] px-6 py-8 shadow">
      <CardHeader className='flex items-center justify-center'>
        <DynamicIcon name={icon} className='size-14 lg:size-16 text-primary' />
      </CardHeader>
      <CardContent className='w-full flex flex-col items-center justify-center gap-5'>
        <h4 className='text-xl font-semibold text-slate-900'>{title}</h4>
        <p className='text-slate-700 text-justify text-base'>{description}</p>
      </CardContent>
    </Card>
  )
}
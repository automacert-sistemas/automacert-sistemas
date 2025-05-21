
// components
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { File } from 'lucide-react'

interface Props {
  icon?: string
  title: string
  description: string
}

export default function ServiceCard({ title, icon, description }: Props) {
  return (
    <Card className="w-[350px] max-w-full px-7 py-8">
      <CardHeader className='flex items-center justify-center'>
        <File className='size-16 text-primary' />
      </CardHeader>
      <CardContent className='w-full flex flex-col items-center justify-center gap-5'>
        <h4 className='text-xl font-semibold text-slate-900'>{title}</h4>
        <p className='text-slate-700'>{description}</p>
      </CardContent>
    </Card>
  )
}
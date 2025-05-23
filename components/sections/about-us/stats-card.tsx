
interface Props {
  title: string
  description: string
}

export default function StatsCard({title, description}: Props) {
  return (
    <div className='min-w-[280px] max-w-full min-h-[150px] bg-background text-primary flex flex-col items-start justify-center text-start py-4 px-6 shadow-lg rounded-2xl'>
      <h1 className="text-4xl lg:text-5xl leading-13 lg:leading-14 font-bold">{title}</h1>
      <h2 className="text-base lg:text-lg leading-6 lg:leading-7 font-semibold">{description}</h2>
    </div>
  )
}
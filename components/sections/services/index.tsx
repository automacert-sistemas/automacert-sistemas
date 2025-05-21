import { services } from "./data"
import ServiceCard from "./services-card"

export default function ServicesSection() {
  return (
    <section className='min-w-full flex items-center justify-center py-9 px-7 bg-secondary text-secondary-foreground' id='services'>
      {/* content */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-container gap-8">
        {/* header */}
        <div className="flex flex-col items-center justify-center xl:items-start min-w-full gap-2.5">
          <h2 className="text-3xl font-semibold">Serviços</h2>
          <h4 className="text-xl font-regular text-slate-50">O que oferecemos para os nossos clientes</h4>
        </div>

        {/* cards */}
        <div className="w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center xl:place-items-start gap-8">
          {services.map(({iconName, title, description}, index) => (
            <ServiceCard key={index} icon={iconName} title={title} description={description}/>  
          ))}
        </div>
      </div>
    </section>
  )
}
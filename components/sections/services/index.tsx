import AnimatedElement from "@/components/animated-element"
import { services } from "./data"
import ServiceCard from "./services-card"

export default function ServicesSection() {
  return (
    <section className='min-w-full flex items-center justify-center p-section bg-secondary text-secondary-foreground scroll-mt-20' id='services'>
      {/* content */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-container gap-8">
        {/* header */}
        <div className="flex flex-col items-center justify-center xl:items-start min-w-full gap-2.5">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            <AnimatedElement animation="slide-right" className="w-full">Serviços</AnimatedElement>
          </h2>
          <h4 className="text-xl max-lg:text-center font-regular text-slate-50">
            <AnimatedElement animation="slide-right" delay={0.6} className="w-full">
              O que oferecemos para os nossos clientes
            </AnimatedElement>
          </h4>
        </div>

        {/* cards */}
        <div className="w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center xl:place-items-start gap-8">
          {services.map(({ iconName, title, description }, index) => (
            <AnimatedElement key={index} animation="slide-up" delay={0.5 + (index * 0.5)} className="size-full">
              <ServiceCard icon={iconName} title={title} description={description} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
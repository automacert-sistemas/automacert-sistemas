import Image from "next/image"

// assets
import Gdoor from '@/public/hero-section/gdoor.png'
import Hero from '@/public/hero-section/hero.png'
import Sti3 from '@/public/hero-section/sti3.png'

export default function HeroSection() {
  return (
    <section className='min-w-full grid place-items-center' id="home">
      {/* content */}
      <div className="min-h-full w-full max-w-container flex items-center justify-center py-9 px-7 gap-20">
        <div className="flex flex-col items-center justify-center gap-3 lg:basis-1/2">
          <h1 className="text-5xl xl:text-6xl leading-14 xl:leading-16 text-center lg:text-start text-primary font-bold">Soluções inteligentes para impulsionar o seu negócio</h1>
          <h4 className="text-lg lg:text-lg font-semibold leading-7 text-slate-500 text-center lg:text-start">Automatize processos, reduza erros e leve seu negócio pro próximo nível com nossas soluções completas e seguras.</h4>

          {/* logos */}
          <div className="flex w-full items-center justify-center lg:justify-start px-6 gap-5">
            <Image
              src={Gdoor}
              alt=""
              className="w-32"
            />

            <Image
              src={Sti3}
              alt=""
              className="w-32"
            />
          </div>
        </div>

        {/* image */}
        <div className="hidden lg:flex basis-1/2">
          <Image
            src={Hero}
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
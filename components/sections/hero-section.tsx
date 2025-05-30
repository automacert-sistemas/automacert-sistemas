import Image from "next/image"

// assets
import Certmais from '@/public/hero-section/certmais.png'
import Gdoor from '@/public/hero-section/gdoor.png'
import Hero from '@/public/hero-section/hero.png'
import Sti3 from '@/public/hero-section/sti3.png'

export default function HeroSection() {
  return (
    <section className='min-w-full grid lg:min-h-screen place-items-center p-section' id="home">
      {/* content */}
      <div className="min-h-full w-full max-w-container grid grid-cols-1 lg:grid-cols-2 grid-rows-1 items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center lg:items-start gap-3 lg:basis-1/2">
          <h1 className="text-5xl xl:text-6xl leading-14 xl:leading-16 text-center lg:text-start text-primary font-bold  motion-preset-slide-up lg:motion-preset-slide-right motion-duration-2000">Soluções inteligentes para impulsionar o seu negócio</h1>
          <h4 className="text-lg lg:text-lg font-semibold leading-7 text-slate-500 text-center lg:text-start motion-preset-slide-up lg:motion-preset-slide-right motion-duration-2000">Automatize processos, reduza erros e leve seu negócio pro próximo nível com nossas soluções completas e seguras.</h4>

          {/* logos */}
          <div className="grid grid-cols-3 grid-rows-1 items-center justify-center lg:justify-start max-md:px-6 mt-5 gap-5 motion-preset-slide-up lg:motion-preset-slide-right motion-duration-2000">
            <Image
              src={Gdoor}
              alt=""
            />

            <Image
              src={Sti3}
              alt=""
            />

            <Image
              src={Certmais}
              alt=""
            />
          </div>
        </div>

        {/* image */}
        <div className="hidden lg:flex basis-1/2 motion-preset-slide-up motion-duration-2000">
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
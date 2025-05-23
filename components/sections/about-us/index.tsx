import Image from "next/image";

// components
import StatsCard from "./stats-card";

// assets
import { Button } from "@/components/ui/button";
import Automacert from '@/public/about-us-section/automacert.png';
import Link from "next/link";

export default function AboutUsSection() {
  return (
        <section className="min-w-full min-h-full flex items-center justify-center p-section py-6 bg-slate-50" id="aboutUs">
          {/* content */}
          <div className="size-full max-w-container flex items-center justify-center gap-14">
            {/* stats */}
            <div className="size-full lg:w-1/2 grid grid-cols-1 grid-rows-auto lg:grid-rows-3 items-center justify-start lg:items-start lg:py-6 max-lg:gap-8">
              {/* header */}
              <div className="flex flex-col items-start justify-center text-center lg:text-start gap-5 lg:gap-8">
                <h2 className="w-full text-2xl lg:text-3xl leading-8 md:leading-9 font-semibold text-primary">SOBRE NÓS</h2>
                <h1 className="w-full text-4xl lg:text-6xl leading-14 lg:leading-16 font-bold text-primary">Conheça mais sobre nossa empresa</h1>
              </div>

              <p className="text-center lg:text-justify text-lg text-slate-500 leading-7 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu posuere sem. Duis nec est fermentum, tincidunt tortor in, interdum lorem. Donec vel pharetra neque. 
                In hac habitasse platea dictumst. Nulla facilisi. In vitae ultrices urna. Vestibulum turpis leo, venenatis nec consequat eu, placerat eget arcu. Donec nec erat lectus.
                 Etiam ut velit hendrerit, pretium metus et, molestie justo. Aliquam molestie purus mauris, vel finibus risus tempus nec. Maecenas in elit mi. Duis ornare turpis eget augue 
                 pretium aliquet. Sed pulvinar diam ut scelerisque aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque iaculis interdum enim, eu gravida neque 
                 egestas ac.
                </p>

                {/* stats card */}
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center justify-center gap-8">
                  <StatsCard title="+ 3000" description="Clientes satisfeitos"/>
                  <StatsCard title="+ 10" description="Anos de experiência"/>
                </div>

                <div className="lg:hidden grid grid-cols-1 grid-rows-3 items-center justify-center gap-8">
                  <Button asChild>
                    <Link href={'/'} target="_blank">Whatsapp</Link>
                  </Button>

                  <Button asChild>
                    <Link href={'/'} target="_blank">Instagram</Link>
                  </Button>

                  <Button asChild>
                    <Link href={'/'} target="_blank">Google Maps</Link>
                  </Button>
                </div>
            </div>

            {/* image and contact */}
            <div className=" hidden w-1/2 lg:grid grid-cols-1 grid-rows-4 items-center justify-center">
            {/* image */}
              <div className="col-span-1 row-span-3 rounded-2xl shadow-lg">
                <Image 
                  src={Automacert}
                  alt=""
                  className="w-full object-fill"
                />
              </div>

              {/* contact */}
              <div className="col-span-1 row-span-1 flex flex-col items-start justify-center gap-6">
                <h4 className="text-xl leading-7 font-semibold text-slate-500">Saiba onde nos encontrar</h4>

                {/* cards-container */}
                <div className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-8">
                  <Button asChild>
                    <Link href={'/'} target="_blank">Whatsapp</Link>
                  </Button>

                  <Button asChild>
                    <Link href={'/'} target="_blank">Instagram</Link>
                  </Button>

                  <Button asChild>
                    <Link href={'/'} target="_blank">Google Maps</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
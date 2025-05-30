'use client'

import Image from "next/image";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import StatsCard from "./stats-card";

// icons
import { GoogleMaps, Instagram, Whatsapp } from "@/components/icons/custom-icons";

// assets
import useInView from "@/hooks/useInView";
import Automacert from '@/public/about-us-section/automacert.png';


export default function AboutUsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section className="min-w-full min-h-full flex items-center justify-center p-section py-6 bg-slate-50 scroll-mt-20" id="aboutUs">
      {/* content */}
      <div className="size-full max-w-container flex items-center justify-center gap-14">
        {/* stats */}
        <div className="size-full xl:w-1/2 grid grid-cols-1 grid-rows-[auto_1fr_auto_auto] sm:grid-rows-[auto_1fr_auto_1fr] xl:grid-rows-3 items-center justify-start xl:items-start xl:py-6 max-xl:gap-8">
          {/* header */}
          <div className="flex flex-col items-start justify-center text-center lg:text-start gap-5 lg:gap-8">
            <h2
              className="w-full text-2xl lg:text-3xl leading-8 md:leading-9 font-semibold text-primary motion-preset-slide-up lg:motion-preset-slide-right motion-duration-1000"
            >
              SOBRE NÓS
            </h2>
            <h1
              className="w-full text-4xl lg:text-6xl leading-14 lg:leading-16 font-bold text-primary motion-preset-slide-up lg:motion-preset-slide-right motion-duration-1500"
            >
              Conheça mais sobre nossa empresa
            </h1>
          </div>

          <p className="text-center lg:text-justify text-base sm:text-lg text-slate-500 leading-7 w-full motion-preset-slide-up lg:motion-preset-slide-right motion-duration-[2.2s]">
            Na Automacert Sistemas, somos especialistas em soluções para transformar a gestão do seu negócio.
            Atuamos com a revenda de softwares de gestão comercial, oferecendo ferramentas robustas, intuitivas e eficientes para otimizar processos e aumentar a produtividade.
            Além disso, somos referência em certificação digital, garantindo segurança e agilidade nas transações eletrônicas da sua empresa.
            Nosso compromisso é entregar tecnologia de ponta com atendimento próximo, humanizado e consultivo.
            Com anos de mercado, construímos parcerias sólidas e ajudamos centenas de negócios a crescerem com inovação e confiança.
            Além disso, contamos com uma equipe técnica totalmente qualificada para lhe auxiliar durante o uso do sistema, fornecendo segurança total para você e sua empresa.
            Conte com a Automacert: soluções inteligentes para empresas que pensam no futuro!
          </p>

          {/* stats card */}
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center justify-center gap-8 mt-8">
            <StatsCard title="+ 3000" description="Clientes satisfeitos" className="motion-preset-expand motion-duration-1000 lg:motion-duration-1500" />
            <StatsCard title="+ 10" description="Anos de experiência" className="motion-preset-expand motion-duration-1500 lg:motion-duration-[1.8s]" />
          </div>

          <div className="xl:hidden flex flex-col items-center justify-center gap-4 motion-preset-slide-up motion-duration-1500">
            <h4 className="text-lg font-semibold text-primary my-3">Saiba onde nos encontrar</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button variant={'whatsapp'} className="sm:text-xl sm:py-6 max-sm:w-full" asChild>
                <Link href="https://wa.link/ovd7o7" target="_blank">
                  <Whatsapp className="size-6 sm:size-7" />
                  Whatsapp
                </Link>
              </Button>

              <Button variant={'instagram'} className="sm:text-xl sm:py-6 max-sm:w-full" asChild>
                <Link href="https://www.instagram.com/automacert_sistemas?igsh=MW5uNnFlN2E2anZucw==" target="_blank">
                  <Instagram className="size-6 sm:size-7" />
                  Instagram
                </Link>
              </Button>

              <Button variant={'google'} className="sm:text-xl sm:py-6 max-sm:w-full" asChild>
                <Link href="https://maps.app.goo.gl/NhY8WkTB2X29Towg8" target="_blank">
                  <GoogleMaps className="size-6 sm:size-7" />
                  Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* image and contact */}
        <div className=" hidden w-1/2 xl:grid grid-cols-1 grid-rows-4 items-center justify-center">
          {/* image */}
          <div className="col-span-1 row-span-3 rounded-2xl shadow-lg motion-preset-expand motion-duration-1000">
            <Image
              src={Automacert}
              alt=""
              className="w-full object-fill"
            />
          </div>

          {/* contact */}
          <div className="col-span-1 row-span-1 flex flex-col items-start justify-center gap-6 lg:motion-preset-slide-left motion-duration-1500">
            <h4 className="text-xl leading-7 font-semibold text-slate-500">Saiba onde nos encontrar</h4>

            {/* cards-container */}
            <div className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-8">
              <Button variant={'whatsapp'} size={'lg'} asChild>
                <Link href="https://wa.link/ovd7o7" target="_blank">
                  <Whatsapp className="size-6" />
                  Whatsapp
                </Link>
              </Button>

              <Button variant={'instagram'} size={'lg'} asChild>
                <Link href="https://www.instagram.com/automacert_sistemas?igsh=MW5uNnFlN2E2anZucw==" target="_blank">
                  <Instagram className="size-6" />
                  Instagram
                </Link>
              </Button>

              <Button variant={'google'} size={'lg'} asChild>
                <Link href="https://maps.app.goo.gl/NhY8WkTB2X29Towg8" target="_blank">
                  <GoogleMaps className="size-6" />
                  Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
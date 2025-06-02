import Image from "next/image";

// assets
import { Button } from "@/components/ui/button";
import certImg from '@/public/certificate-section/certificate-image.png';

// types
import AnimatedElement from "@/components/animated-element";
import Link from "next/link";
import type { CertificateCardProps } from "./certificate-card";
import CertificateCard from "./certificate-card";

const certificateData: CertificateCardProps[] = [
  {
    iconNames: ['file-badge'],
    title: 'Certificado A1',
    description: 'Armazenado em arquivo (.pfx / .p12)'
  },
  {
    iconNames: ['id-card', 'usb'],
    title: 'Certificado A3',
    description: 'Armazenado em token USB ou Cartão com leitora'
  }
]

export default function CertificateSection() {
  return (
    <section className="min-w-full min-h-full flex items-center justify-center p-section md:py-6 bg-secondary scroll-mt-20" id="certificates">
      {/* container */}
      <div className="size-full max-w-container flex flex-col items-center justify-center gap-10">
        {/* header */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full gap-2">
          <AnimatedElement animation="slide-right" delay={0.2}>
            <h2 className="max-lg:text-center text-2xl lg:text-3xl leading-8 md:leading-9 font-semibold text-background">
              Certificado Digital
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-right" delay={0.3}>
            <p className="max-lg:text-center text-xl text-slate-50 leading-6 md:leading-7">
              Saiba mais sobre o nosso serviço de certificado digital
            </p>
          </AnimatedElement>
        </div>

        {/* content */}
        <div className="size-full flex flex-col lg:flex-row items-center justify-center gap-5">
          {/* certificate-info */}
          <div className="flex flex-col items-center justify-center size-full md:w-2/3 lg:w-1/2 gap-6 md:gap-8">
            <AnimatedElement animation="slide-right" delay={0.4}>
              <p className="text-base max-lg:text-center lg:text-xl leading-8 text-slate-100">
                O certificado digital é a sua identidade no mundo digital. Ele funciona como uma carteira de identidade eletrônica que garante que você é você mesmo ao assinar documentos online,
                acessar sistemas oficiais e realizar transações com segurança e validade jurídica. Existem dois tipos de certificados digitais, os certificados A1 e os A3, veja abaixo as características de cada um.
              </p>
            </AnimatedElement>

            {/* cards */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
              {certificateData.map((data, index) => (
                <AnimatedElement key={index} animation="slide-up" className="w-full flex items-center justify-center" delay={0.5 + (index * 0.5)}>
                  <CertificateCard {...data} />
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement animation="slide-up" className="max-md:mt-4" delay={1}>
              <Button
                variant={'background'}
                className="text-lg cursor-pointer"
                asChild
              >
                <Link href={'https://wa.link/cvmtwt'} target="_blank">
                  Adquirir certificado
                </Link>
              </Button>
            </AnimatedElement>
          </div>

          {/* image */}
          <AnimatedElement animation="expand" delay={1.1} className="hidden lg:flex w-1/2 h-full items-center justify-center">
            <Image
              src={certImg}
              alt=""
              className="w-2/3 object-contain rounded-2xl"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
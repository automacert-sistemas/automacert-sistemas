
import Image from 'next/image'
import Link from 'next/link'

// data
import { navLinks } from '@/data/nav-links'

// assets
import Logo from '@/public/logos/logo-01.png'
import smLogo from '@/public/logos/logo-02.png'
import { MapPin, Phone } from 'lucide-react'
import { Separator } from './ui/separator'

export default function Footer() {
  return (
    <footer className="min-w-full grid place-items-center bg-slate-200">
      <div className="w-full max-w-container min-h-full flex flex-col items-center justify-center p-7 gap-5">
        {/* main content */}
        <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 items-center lg:items-start justify-center gap-8">
          {/* image */}
          <div className='w-52 lg:w-28 mx-auto lg:mx-0'>
            <Link href={'/'}>
              <Image src={Logo} alt='' className='hidden lg:flex w-full object-contain' />
              <Image src={smLogo} alt='' className='lg:hidden w-full object-contain' />
            </Link>
          </div>

          {/* links */}
          <div className='flex flex-col items-center justify-center lg:items-start gap-5'>
            <h4 className='min-sm:max-md:text-2xl text-xl text-slate-900 font-semibold'>Links</h4>
            <nav className='flex flex-col gap-2.5 items-center justify-center lg:items-start'>
              {navLinks.map(({ id, label }, index) => (
                <Link key={index} href={id} className='min-sm:max-md:text-lg hover:text-primary text-slate-700'>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* contact */}
          <div className='flex flex-col items-center justify-center lg:items-start gap-5'>
            <h4 className='min-sm:max-md:text-2xl text-xl text-slate-900 font-semibold'>Contato</h4>
            {/* infos */}
            <div className='w-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2.5'>
              {/* address */}
              <div className='flex items-start justify-start gap-2'>
                <MapPin className='min-sm:max-md:size-5 size-4 text-slate-900' />
                <p className='min-sm:max-md:text-base text-sm text-slate-700'>R. Tristão Gonçalves, 573 - <br /> Centro, Crato - CE 63100-100</p>
              </div>

              {/* phones */}
              <div className='flex items-start justify-start gap-2'>
                <Phone className='min-sm:max-md:size-5 size-4 text-slate-900' />
                <div className='flex flex-col items-start justify-start min-sm:max-md:text-base text-sm text-slate-700 gap-1'>
                  <p>Suporte: (88) 3523-3951</p>
                  <p>Certificado: (88) 3532-0974</p>
                  <p>Financeiro: (88) 3521-4319</p>
                  <p>Comercial: (88) 9956-1631</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Separator className='w-2/3 lg:w:1/2 bg-slate-300' />

        {/* company info */}
        <div className='flex flex-col items-center justify-center text-center lg:flex-row gap-1 text-sm text-slate-500'>
          <span>© 2025 AUTOMATEC AUTOMACAO COMERCIAL E TECNOLOGIA DA INFORMACAO LTDA.</span>
          <span>Todos os direitos reservados.</span>
          <span>CNPJ 23.785.312/0001-53.</span>
        </div>
      </div>
    </footer>
  )
}
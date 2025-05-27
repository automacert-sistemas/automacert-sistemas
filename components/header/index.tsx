import Image from 'next/image'
import Link from 'next/link'

// assets
import Logo from '@/public/logos/logo-02.png'

// links
import { navLinks } from '@/data/nav-links'

// components
import { Button } from '../ui/button'
import HeaderSheet from './sheet'


export default function Header() {
  return (
    <div className="min-w-full h-20 grid place-items-center sticky top-0 bg-background">
      {/* content */}
      <div className="h-full w-full max-w-container px-7 py-2 flex items-center justify-between">
        {/* logo */}
        <Link className='w-32 sm:w-40' href={'/'}>
          <Image
            src={Logo}
            alt=''
            className='size-full object-contain'
          />
        </Link>

        {/* navbar */}
        <div className='hidden lg:flex items-center justify-center gap-10'>
          <nav className='flex items-center justify-center gap-10'>
            {navLinks.map(({ label, id }, index) => (
              <Link
                key={index}
                href={id}
                className='hover:text-primary transition-all text-base'
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild>
            <Link href={'https://wa.link/vx696i'} target='_blank'>Fale conosco
            </Link>
          </Button>
        </div>

        {/* header sheet */}
        <HeaderSheet triggerClassname='lg:hidden' />
      </div>
    </div>
  )
}
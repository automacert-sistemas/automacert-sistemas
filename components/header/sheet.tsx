'use client'
import Link from "next/link";
import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";


// icons
import { ExternalLink, Home, Menu } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';

// data
import { navLinks } from "@/data/nav-links";

interface Props {
  triggerClassname?: string
}

export default function HeaderSheet({ triggerClassname }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleModal = () => setIsOpen(!isOpen)

  return (

    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className={triggerClassname}>
        <Button variant="outline"><Menu className="size-4" /></Button>
      </SheetTrigger>
      <SheetContent className="data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
        <SheetHeader>
          <SheetTitle className="text-primary">
            Menu
          </SheetTitle>
          <SheetDescription>
            Navegue pelos nossos links
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col items-center justify-center px-6 py-4 gap-3">
          <Button
            variant={'outline'}
            className="w-full font-normal text-primary"
            onClick={toggleModal}
            asChild
          >
            <Link href={'/'}>
              <Home className="size-4 text-primary" />
              Início
            </Link>
          </Button>
          {navLinks.map(({ label, iconName, id }, index) => (
            <Button
              key={index}
              variant={'outline'}
              className="w-full font-normal text-primary"
              onClick={toggleModal}
              asChild
            >
              <Link href={id}>
                <DynamicIcon name={iconName || 'link'} className="size-4 text-primary" />
                {label}
              </Link>
            </Button>
          ))}
        </div>
        <SheetFooter>
          <Button asChild onClick={toggleModal}>
            <Link href={'https://wa.link/1xo16t'} target="_blank">
              Fale conosco
              <ExternalLink className="size-4 ml-4" />
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

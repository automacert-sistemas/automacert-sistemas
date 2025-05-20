// components
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

// assets
import { Menu } from "lucide-react"
import { Separator } from "../ui/separator"

interface Props {
  triggerClassname?: string
}

export default function HeaderSheet({ triggerClassname }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild className={triggerClassname}>
        <Button variant="outline"><Menu className="size-4" /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-primary">
            Menu
          </SheetTitle>
          <SheetDescription>
            Navegue pelos nossos links
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="grid gap-4 py-4">
          description
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

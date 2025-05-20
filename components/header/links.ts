import type { dynamicIconImports } from "lucide-react/dynamic";

interface Links {
  label: string;
  id: string
  iconName: keyof typeof dynamicIconImports
}

export const navLinks: Links[] = [
  { label: 'Serviços', id: '#services', iconName: 'wrench' },
  { label: 'Soluções', id: '#solutions', iconName: 'box' },
  { label: 'Certificado Digital', id: '#certificate', iconName: 'file-badge' },
]
import type { dynamicIconImports } from "lucide-react/dynamic"

export default interface Links {
  label: string
  id: string
  iconName?: keyof typeof dynamicIconImports
}
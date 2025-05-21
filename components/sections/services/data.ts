import type { dynamicIconImports } from "lucide-react/dynamic"

interface Services {
  iconName: keyof typeof dynamicIconImports
  title: string
  description: string
}

export const services: Services[] = [
  {
    iconName: "headset",
    title: "Suporte",
    description: "Nossa equipe de suporte técnico está preparada para oferecer um atendimento ágil, eficiente e altamente qualificado."
  },
  {
    iconName: 'users',
    title: 'Acompanhamento',
    description: 'Oferecemos um acompanhamento próximo e proativo durante toda a jornada do cliente com as nossas soluções.'
  },
  {
    iconName: 'book-check',
    title: 'Treinamento',
    description: 'Oferecemos treinamentos práticos e personalizados para capacitar nossos clientes no uso eficiente de nossos sistemas'
  }, 
  {
    iconName: 'file-badge',
    title: 'Certificado Digital',
    description: 'Oferecemos certificação digital ágil e seguro, garantindo autenticidade, integridade e validade jurídica para documentos e transações eletrônicas'
  }
]
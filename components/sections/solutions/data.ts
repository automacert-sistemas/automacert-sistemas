// interfaces
import type Solution from "@/interfaces/solution"

// assets
import gdoor from '@/public/solutions/gdoor.png'
import sti3 from '@/public/solutions/sti3.png'

export const solutions: Solution[] = [ 
 {
  image: gdoor,
  solution: 'gdoor',
  title: 'GDOOR ZUCCHETTI',
  description: 'O GDOOR é um sistema de gestão empresarial completo, criado para atender com excelência empresas do comércio, serviços e indústria. Com foco em automação fiscal, controle financeiro e usabilidade, ele se destaca pela confiabilidade e aderência às exigências fiscais brasileiras. Resultado? Mais controle, menos erro, e tempo sobrando pra fazer o negócio crescer.',
  benefits: [
    'Módulo Contábil/Fiscal Integrado', 
    'Gestão completa para Bares / Restaurantes', 
    'PDV Móvel para celulares', 
    'Modular: Cada aplicativo dividido separadamente', 
    'Módulo web, para gestão de qualquer lugar',
  ],
  href: 'https://wa.link/royfij'
 },
 {
  image: sti3,
  solution: 'sti3',
  title: 'STI3',
  description: 'O STI3 Sistemas é uma solução completa desenvolvida para automatizar e otimizar os processos de gestão em empresas comerciais. Com foco em usabilidade, agilidade e confiabilidade, o sistema oferece ferramentas práticas que facilitam o dia a dia de quem está no front do negócio. Seja no balcão, no estoque ou no financeiro, o STI3 entrega o que promete: controle total com poucos cliques.',
  benefits: [
    'PDV leve, direto e rápido pro varejo',
    'Integração web para gestão de qualquer lugar',
    'PDV Móvel integrado a Smartphones e Maquininhas STONE',
    'All-In-One, todas as funcionalidades em um app só',
    'Gerenciamento de licenças internas mais completo'
  ],
  href: 'https://wa.link/wrc50b'
 }
]
'use client'
import { useState } from "react"

// components
import { Button } from "@/components/ui/button"
import SolutionCard from "./solution-card"

// data
import { solutions } from "./data"

// interfaces
import type Solution from "@/interfaces/solution"

// icons
import { BadgeCheck } from "lucide-react"
import Link from "next/link"

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<string>(solutions[0].solution)
  const [solutionData, setSolutionData] = useState<Solution>(solutions[0])

  const handleClick = (solutionRef: string) => {
    const data = solutions.find((solution) => solution.solution === solutionRef) || solutionData

    setSelectedSolution(solutionRef)
    setSolutionData(data)
  }

  return (
    <section className="min-w-full min-h-full flex items-center justify-center px-section py-6" id="solutions">
      {/* content */}
      <div className="size-full max-w-container flex flex-col items-center justify-center">
        {/* header */}
        <div className="w-full flex flex-col items-center justify-center lg:items-start gap-2">
          <h2 className="text-xl lg:text-3xl text-primary font-semibold">Soluções</h2>
          <h4 className="text-lg lg:text-xl text-slate-700">Saiba mais sobre as principais soluções que nós oferecemos</h4>
        </div>

        {/* main */}
        <div className="flex flex-col md:flex-row items-center justify-center size-full py-8 gap-14 md:gap-16">
          {/* images */}
          <div className="w-full lg:w-1/2 md:h-full flex md:flex-col items-center justify-center py-8 px-4 md:p-4 gap-4 lg:gap-16 bg-slate-100 rounded-2xl shadow">
            {solutions.map(({ image, solution }, index) => (
              <SolutionCard
                key={index}
                image={image}
                onClick={() => handleClick(solution)}
                isActive={solution === selectedSolution}
              />
            ))}
          </div>

          {/* infos */}
          <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-start md:items-start gap-2.5">
            <h2 className="text-2xl min-md:max-lg:text-xl lg:text-3xl text-primary font-semibold transition-all">{solutionData.title}</h2>
            <p className="min-md:max-lg:text-base text-lg text-slate-700 transition-all">{solutionData.description}</p>
            <div className="flex flex-col w-full py-2 items-start justify-center gap-3 transition-all">
              {solutionData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center min-md:max-lg:gap-2 gap-2.5">
                  <BadgeCheck className="min-md:max-lg:size-5 size-6 text-primary" />
                  <span className="min-md:max-lg:text-sm text-base font-bold text-primary">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="text-lg cursor-pointer mt-4 md:m-auto shadow" asChild>
              <Link href={solutionData.href} target="_blank">
                Adquirir solução
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
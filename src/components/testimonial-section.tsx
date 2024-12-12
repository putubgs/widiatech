'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "./testimonial-card"
import { TranslationType } from '@/lib/translations'

interface TestimonialSectionProps {
  title: string
  subtitle: string
  items: TranslationType['testimonials']['items']
}

export function TestimonialSection({ title, subtitle, items }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAllMobile, setShowAllMobile] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const visibleTestimonials = items.slice(currentIndex, currentIndex + 3)

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-300 text-xl">{subtitle}</p>
      </div>
      <div className="relative">
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((item, index) => (
            <div
              key={`${item.author}-${currentIndex + index}`}
              className="transition-all duration-300 transform"
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 gap-8">
          {(showAllMobile ? items : items.slice(0, 3)).map((item, index) => (
            <div
              key={`${item.author}-mobile-${index}`}
              className="transition-all duration-300 transform"
            >
              <TestimonialCard {...item} />
            </div>
          ))}
          {!showAllMobile && items.length > 3 && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllMobile(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                See More
              </Button>
            </div>
          )}
        </div>
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-800/70 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonials</span>
          </Button>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= items.length - 3}
            className={`w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-800/70 ${
              currentIndex >= items.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonials</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Gift, Instagram, Laptop, MessageSquare, Phone, Menu, X} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from '@/components/header'
import LanguageSelector from '@/components/language-selector'
import { useLanguage } from '@/lib/language-context'
// import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
  
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [mobileMenuOpen])
  

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header language={language} setLanguage={setLanguage} />

      {/* Burger menu container */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-100">
          <Button
            className="absolute top-4 right-4 z-50"
            size="icon"
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-8 w-8 text-white" />
            <span className="sr-only">Close menu</span>
          </Button>
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <nav className="flex flex-col items-center gap-8">
              <Link 
                href="#tentang"
                onClick={() => scrollToSection('tentang')}
                className="text-2xl font-medium text-gray-200 hover:text-purple-400 transition-colors duration-200"
              >
                {t.nav.about}
              </Link>
              <Link 
                href="#layanan"
                onClick={() => scrollToSection('layanan')}
                className="text-2xl font-medium text-gray-200 hover:text-pink-400 transition-colors duration-200"
              >
                {t.nav.services}
              </Link>
              <Link 
                href="#produk"
                onClick={() => scrollToSection('produk')}
                className="text-2xl font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                {t.nav.digitalProducts}
              </Link>
              <Link 
                href="#testimoni"
                onClick={() => scrollToSection('testimoni')}
                className="text-2xl font-medium text-gray-200 hover:text-purple-400 transition-colors duration-200"
              >
                {t.nav.testimonials}
              </Link>
              <div className="flex gap-2 items-center">     
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity duration-200 text-lg px-6 py-3" 
                  asChild
                >
                  <Link 
                    href="https://wa.me/6282236883438" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contactUs}
                  </Link>
                </Button>
                <LanguageSelector language={language} setLanguage={setLanguage} />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="beranda" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/widiatech-hero-image.webp"
            alt="Digital Network Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {t.hero.title} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="https://wa.me/6282236883438" target="_blank" rel="noopener noreferrer">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 px-4 bg-black scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.about.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.description}
              </p>
              <ul className="space-y-4">
                {t.about.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-200">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/about-section-img.jpeg"
                alt="WidiaTech Programming"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px] shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.services.title}</h2>
            <p className="text-gray-300 text-xl">{t.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8">
                <div className="rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">{t.services.websiteExpress.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{t.services.websiteExpress.description}</p>
                <p className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">{t.services.websiteExpress.price}</p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {t.services.websiteExpress.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-purple-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8">
                <div className="rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">{t.services.customApp.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{t.services.customApp.description}</p>
                <p className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">{t.services.customApp.price}</p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {t.services.customApp.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-purple-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8">
                <div className="rounded-full w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white">{t.services.digitalConsultation.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{t.services.digitalConsultation.description}</p>
                <p className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">{t.services.digitalConsultation.price}</p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {t.services.digitalConsultation.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2 text-purple-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="produk" className="py-24 px-4 bg-black scroll-mt-20">
        <div className="container mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.digitalProducts.title}</h2>
            <p className="text-gray-300 text-xl">{t.digitalProducts.subtitle}</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {/* Commented out existing product card */}
            {/* <Card className="bg-gray-800/50 border-purple-500/20 overflow-hidden max-w-md w-full relative transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full animate-pulse">
                  EXCLUSIVE OFFER
                </span>
              </div>
              <CardContent className="p-0">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/Screenshot_14.png"
                    alt={t.digitalProducts.book.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">{t.digitalProducts.book.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{t.digitalProducts.book.description}</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.digitalProducts.book.price}</p>
                        <p className="text-sm text-emerald-400 mt-2">{t.digitalProducts.book.freeWith}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                        {t.digitalProducts.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* New "Coming Soon" card */}
            <Card className="bg-gray-800/50 border-purple-500/20 overflow-hidden max-w-md w-full relative transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full min-h-[400px]">
                <Gift className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-center text-white">{t.digitalProducts.comingSoon.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{t.digitalProducts.comingSoon.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
        <TestimonialSection
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          items={t.testimonials.items}
        />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 scroll-mt-20 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              {t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              {t.cta.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="https://wa.me/6282236883438" target="_blank" rel="noopener noreferrer">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Contact Section / Footer */}
      <footer id="kontak" className="py-16 px-4 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto md:px-10 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="/widiatech-logo-panjang-white.png"
                alt="WidiaTech Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center gap-8">
              <Link 
                href="https://wa.me/6282236883438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>+6282236883438</span>
              </Link>
              <Link 
                href="https://www.instagram.com/widiatech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span>@widiatech</span>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} WidiaTech. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


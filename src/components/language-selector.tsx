'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

interface LanguageSelectorProps {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (lang: string) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleDropdown}
        className="flex items-center space-x-1 bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-colors duration-200"
      >
        <span>{language.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => selectLanguage('id')}
              className={`block px-4 py-2 text-sm text-left w-full ${language === 'id' ? 'text-purple-400' : 'text-gray-300'} hover:bg-purple-500/20 hover:text-white transition-colors duration-200`}
              role="menuitem"
            >
              ID
            </button>
            <button
              onClick={() => selectLanguage('en')}
              className={`block px-4 py-2 text-sm text-left w-full ${language === 'en' ? 'text-purple-400' : 'text-gray-300'} hover:bg-purple-500/20 hover:text-white transition-colors duration-200`}
              role="menuitem"
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector


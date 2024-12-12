'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { translations, TranslationType } from './translations'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('id')

  const value = {
    language,
    setLanguage,
    t: translations[language as keyof typeof translations],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


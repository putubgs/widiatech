import { LanguageProvider } from '@/lib/language-context'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WidiaTech',
  description: 'Fast and professional website solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}


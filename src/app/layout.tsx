import { LanguageProvider } from '@/lib/language-context'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'WidiaTech',
  description: 'Fast and professional website solutions',
  other: {
    'facebook-domain-verification': 'ky0lclzvs5e98o4sssalfsz06wkems',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="ky0lclzvs5e98o4sssalfsz06wkems" />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

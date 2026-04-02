import type { Metadata } from 'next'
import { Space_Grotesk, Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-heading'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'NIRVAYA STUDIO — AI-видеопродакшн студия',
  description: 'Кинематографичные клипы, рекламные ролики и промо-видео, созданные с помощью нейросетей нового поколения. От замысла к сиянию.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/custom/theme-provider'
import ScrollToTopButton from '@/components/custom/scroll-top-button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lordwish Sylvaince | Software Developer',
  description:
    'Portfolio of Lordwish Sylvaince, a passionate about sofware dev who like to build.',
  metadataBase: new URL('https://lordwxdev.github.io'),
  openGraph: {
    title: 'Lordwish Sylvaince | Software Developer',
    description: 'Web apps, backends and C tools. See my projects.',
    url: 'https://lordwxdev.github.io',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

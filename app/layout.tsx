import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/custom/theme-provider';
import ScrollToTopButton from '@/components/custom/scroll-top-button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hi I am Lordwish -  Software Developer',
  description: 'Portfolio of Lordwish - Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-background
          relative
          overflow-x-hidden
        `}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,99,0,0.08),transparent_60%)]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ScrollToTopButton />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

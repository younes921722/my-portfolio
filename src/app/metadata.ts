import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Younes Saouabeddine | Portfolio",
  description: "Data & ML Engineer Portfolio - Showcasing my projects and expertise",
  icons: {
    icon: "favicon.ico",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
  ],
}

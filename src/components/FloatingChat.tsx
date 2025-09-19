'use client'

import { Mail } from 'lucide-react'

export default function FloatingChat() {
  return (
    <a
      href="#contact"
      aria-label="Contact"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <Mail className="h-6 w-6" />
    </a>
  )
}

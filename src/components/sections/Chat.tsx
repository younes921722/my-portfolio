'use client'

import { Button } from '@/components/ui/button'

export default function Chat() {
  return (
    <section id="chat" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-4 text-3xl font-bold">Chat (disabled)</h2>
        <p className="mb-6 text-muted-foreground">
          The interactive chat feature has been disabled. Please use the contact form or email me directly for inquiries.
        </p>
        <div className="flex">
          <Button asChild>
            <a href="#contact">Go to Contact</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            Get to know more about my background and expertise.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="text-muted-foreground">
                Data and AI Engineer, recently graduated from
the National School of Applied Sciences of Al
Hoceima, eager to apply my expertise in data engineering
and artificial intelligence to innovative
projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">
                      National School of Applied Sciences Al Hoceima (ENSAH)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Data Engineering
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    2021 - 2025
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">
                      Ibn El Haytam High School
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Baccalaureate in Physics
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    2018 - 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Languages:</strong> French, English, Arabic
              </li>
              <li>
                <strong>Interests:</strong> Data Engineering, Natural Language Processing, AI Research, Reading
              </li>
              <li>
                <strong>Career Goal:</strong> Seeking a final year internship starting February 2025 to apply and enhance my skills in innovative data engineering projects
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href="/assets/docs/Younes_Saouabeddine_Len.pdf" download className="group">
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

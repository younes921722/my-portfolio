'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

/**
 * The `Hero` component renders a full-page hero section with an animated profile image,
 * a title, a description of data engineering expertise, and interactive buttons for
 * viewing projects and downloading a resume. It also includes a subtle scroll indicator
 * to encourage users to explore further.
 */
const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col items-center space-y-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-primary bg-primary/10"
        >
          <img
            src="assets/images/profile.jpg"
            alt="Abdelghafor Elgharbaoui"
            className="scale-110 object-cover object-[100%_45%]"
          />
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Data & AI
            <span className="block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-[600px] text-muted-foreground"
          >
            Data and AI Engineer, recently graduated from
the National School of Applied Sciences of Al
Hoceima, eager to apply my expertise in data engineering
and artificial intelligence to innovative
projects.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects" className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="#experience" className="group">
              View Experiences
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/assets/docs/Younes_Saouabeddine_Len.pdf" download className="group">
              Download Resume
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1,
            ease: "easeOut"
          }}
          className="flex mt-8 items-center justify-center"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Scroll to explore
            </span>
            <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-primary/80 bg-background/80 p-1">
              <div className="h-2 w-2 animate-scroll-down rounded-full bg-primary" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

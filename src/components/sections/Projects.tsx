'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Technical Support Dashboard',
    description:
      'Developed a comprehensive dashboard for tracking support tickets and visualizing team performance metrics. Implemented complex DAX measures and dynamic filtering capabilities.',
    technologies: ['Power BI', 'DAX', 'Excel', 'SharePoint'],
    tags: ['Data Engineering', 'Business Intelligence'],
    image: 'assets/images/Ticket-dashboard.png',
    titleColor: 'group-hover:text-emerald-500',
    links: {
      github: 'https://github.com/younes921722/Technical-Support-Dashboard/tree/main',
    },
  },
  {
    title: 'Intelligent Conversational Agent',
    description:
      'Built an AI-powered agent for natural language data querying from CSV and Excel files. Integrated language models for understanding user queries and retrieving relevant data.',
    technologies: ['Langchain', 'MySQL', 'Streamlit', 'HuggingFace', 'Python'],
    tags: ['Artificial Intelligence', 'Natural Language Processing'],
    image: 'assets/images/Chat-csv.png',
    titleColor: 'group-hover:text-blue-500',
    links: {
      github: 'https://github.com/younes921722/Chat-With-Tabular-Data?tab=readme-ov-file',
    },
  },
  {
    title: 'Real-time Data Pipeline',
    description:
      'Real-time data engineering pipeline I built. Data flows from an API, processed by Apache Airflow and Spark, into Cassandra and PostgreSQL databases. A control center and schema registry manage data quality, using Docker containers for deployment and a tiered ("Bronze"/"Gold") data approach.',
    technologies: ['Apache Airflow', 'Apache Spark', 'Cassandra', 'PostgreSQL', 'Docker', 'Data Pipeline'],
    tags: ['Schema Registry', 'Real-time Processing'],
    imageUrl: 'assets/images/DataFlowArch.png',
    titleColor: 'group-hover:text-purple-500',
    links: {
      github: 'https://github.com/younes921722/Real-Time-Data-Pipeline',
    },
  },
  
  {
    title: 'Breast Cancer Classification',
    description:
      'Created a machine learning application for breast cancer classification using the Kaggle dataset. Implemented various ML algorithms and deployed using Flask.',
    technologies: ['Machine Learning', 'Python', 'Flask', 'Scikit-learn'],
    tags: ['Healthcare', 'Machine Learning'],
    titleColor: 'group-hover:text-pink-500',
    links: {
      github: '#',
    },
  },
  {
    title: 'Facial Emotion Detection',
    description:
      'Developed a real-time facial emotion detection application using deep learning. Implemented CNN architecture for accurate emotion classification from video feed.',
    technologies: ['CNN', 'OpenCV', 'TensorFlow', 'Python'],
    tags: ['Computer Vision', 'Deep Learning'],
    titleColor: 'group-hover:text-orange-500',
    links: {
      github: '#',
    },
  },
  
  {
    title: 'NLP Spelling Corrector',
    description:
      'Developed an automatic spelling correction system using NLP techniques. Implemented various text processing algorithms for accurate error detection and correction.',
    technologies: ['NLP', 'Python', 'NLTK', 'Machine Learning'],
    tags: ['Natural Language Processing', 'Text Analysis'],
    titleColor: 'group-hover:text-violet-500',
    links: {
      github: '#',
    },
  },
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my most impactful data engineering projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90" />
                <img
                  src={project.image || project.imageUrl || 'assets/images/project-image.png'}
                  alt={project.title}
                  className={`h-full w-full transition-transform duration-300 ${
                    project.title === 'Intelligent Conversational Agent'
                      ? 'object-contain scale-[0.85] group-hover:scale-95'
                      : 'object-cover group-hover:scale-105'
                  }`}
                />
                <div className="h-full w-full bg-muted" />
              </div>

              <div className="relative z-20 -mt-16 space-y-4 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${project.titleColor}`}>
                      {project.title}
                    </h3>
                    {project.links.github && project.links.github !== '#' && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0 transition-transform hover:scale-110"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">View project on GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

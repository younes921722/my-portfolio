'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Generative AI Developer Intern',
    company: 'Berexia',
    location: 'Remote',
    period: 'Jun - Aug 2024',
    description: [
      'Developed a FastAPI API with MVC architecture for Retrieval-Augmented Generation (RAG) on PDF documents',
      'Implemented PDF chunk storage using MongoDB for efficient document processing',
      'Integrated Qdrant for performing similarity search on document content',
      'Utilized open-source language models for accurate and context-aware responses',
      'Designed scalable architecture for handling large document collections',
    ],
    stack: [
      'FastAPI',
      'MongoDB',
      'Qdrant',
      'Docker',
      'LLMs',
      'HuggingFace',
      'Python'
    ],
  },
  {
    title: 'Data Pipeline and Analysis Intern',
    company: 'Digiole',
    location: 'Remote',
    period: 'Aug - Sep 2024',
    description: [
      'Designed and implemented data pipeline from SQL Server to Azure Data Lake Gen2',
      'Performed ETL transformations using Databricks and PySpark for data processing',
      'Integrated Azure Synapse Analytics for advanced analytics capabilities',
      'Created interactive Power BI dashboards for business insights',
      'Implemented data quality checks and monitoring systems',
    ],
    stack: [
      'Azure',
      'Databricks',
      'PySpark',
      'Power BI',
      'SQL Server',
      'Azure Data Factory',
      'Azure Synapse'
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="text-muted-foreground">
            My journey in data engineering and software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4 text-lg">
                    <h3 className="font-semibold">{experience.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>
                      {experience.company} • {experience.location}
                    </span>
                  </div>
                </div>

                <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

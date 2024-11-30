'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java SE', 'Java EE', 'C', 'SQL', 'Linux'],
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'Oracle',
      'SQL Server',
      'MySQL',
      'MongoDB',
      'Neo4j',
      'Cassandra',
      'Redis'
    ],
  },
  {
    title: 'Data Engineering & ETL',
    skills: [
      'Apache Airflow',
      'Apache Kafka',
      'Apache Spark',
      'Hadoop',
      'Databricks',
      'ETL/ELT'
    ],
  },
  {
    title: 'Data Science & ML',
    skills: [
      'NLP',
      'TensorFlow',
      'LangChain',
      'Scikit-Learn',
      'HuggingFace'
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Azure',
      'Microsoft Fabric',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD'
    ],
  },
  {
    title: 'BI & Visualization',
    skills: [
      'Power BI',
      'DAX',
      'Excel',
      'Data Modeling',
      'Dashboard Design'
    ],
  },
  {
    title: 'Web Development',
    skills: [
      'Next.js',
      'Spring Boot',
      'FastAPI',
      'Flask',
      'React'
    ],
  }
]

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            A comprehensive list of my technical expertise and tools I work with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

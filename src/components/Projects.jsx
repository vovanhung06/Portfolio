import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ModernMart Dashboard',
      description: 'A comprehensive e-commerce administration panel with real-time analytics and inventory management.',
      image: '/projects/ecommerce.png',
      tags: ['React', 'Node.js', 'Chart.js', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
    {
      title: 'Wave Social App',
      description: 'Minimalist social networking platform focusing on high-quality visual content and seamless interactions.',
      image: '/projects/social.png',
      tags: ['Next.js', 'Firebase', 'Framer Motion', 'Tailwind'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" style={{ padding: '10rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected <span className="text-gradient">Work</span>
        </motion.h2>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            marginTop: '4rem',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass"
              style={{
                borderRadius: '32px',
                overflow: 'hidden',
                transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
              whileHover={{ y: -15 }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '300px' }}>
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '0.8rem',
                  }}
                >
                  <motion.a 
                    href={project.github} 
                    className="glass" 
                    style={{ padding: '0.6rem', borderRadius: '50%', color: 'white' }}
                    whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.link} 
                    className="glass" 
                    style={{ padding: '0.6rem', borderRadius: '50%', color: 'white' }}
                    whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--accent-primary)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#projects div.container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout size={32} />, color: '#3b82f6', items: ['React', 'Next.js', 'Framer Motion', 'Vanilla CSS'] },
    { name: 'Backend', icon: <Server size={32} />, color: '#10b981', items: ['Node.js', 'Express', 'Python', 'Go'] },
    { name: 'Database', icon: <Database size={32} />, color: '#8b5cf6', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
    { name: 'Tools', icon: <Code2 size={32} />, color: '#f59e0b', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '10rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-gradient">Expertise</span>
        </motion.h2>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginTop: '4rem',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                textAlign: 'left',
              }}
            >
              <div 
                style={{
                  color: skill.color,
                  marginBottom: '1.5rem',
                  display: 'inline-flex',
                  padding: '1rem',
                  borderRadius: '16px',
                  background: `${skill.color}15`,
                }}
              >
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>{skill.name}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {skill.items.map((item) => (
                  <li 
                    key={item} 
                    style={{ 
                      fontSize: '1rem', 
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: skill.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

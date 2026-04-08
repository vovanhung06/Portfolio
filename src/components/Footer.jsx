import React from 'react';
import { Rocket, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '6rem 0 3rem', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', fontWeight: '800' }}>
          <Rocket size={32} className="text-gradient" />
          <span className="text-gradient">PROFILO</span>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', gap: '3rem', fontSize: '1rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
            <li><a href="#about" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>About</a></li>
            <li><a href="#projects" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Projects</a></li>
            <li><a href="#contact" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact</a></li>
          </ul>
        </nav>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {currentYear} PROFILO. All rights reserved.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Built with <Heart size={16} fill="var(--accent-secondary)" color="var(--accent-secondary)" /> and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} AI Safety Monitor. Built with ❤️  by<b> KHUSI YADAV</b> for safer AI</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin className="w-4 h-4 mr-1" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
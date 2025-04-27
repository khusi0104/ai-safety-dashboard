import React from 'react';
import { Sun, Moon, ActivitySquare } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <ActivitySquare className="logo-icon" />
          <span>AI Safety Monitor</span>
        </div>

        <nav className="nav-links">
          {["Dashboard", "Reports", "Analytics", "Settings"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
          <button 
            className="dark-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
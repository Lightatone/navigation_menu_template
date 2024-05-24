import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { IoMdMenu } from "react-icons/io";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: Event) => handleClickOutside(event as MouseEvent);
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    } else {
      document.removeEventListener('mousedown', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="App">
      <div>
        <title>Navbar</title>
      </div>
      <div className="bodyarea">
        <div className="header">
          <h1 className="Logo">LOGO</h1>
          <div>
            <nav className={`Nav-area ${isMobileMenuOpen ? 'open' : ''}`} ref={navRef}>
              <h1 className="Logo">LOGO</h1>
              <div className="divider"></div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </div>
          {/* user button group */}
          <div className="user-group">
            <a className="user-login" href="#">Login</a>
            <a className="user-signup" href="#">Sign Up</a>
            <IoMdMenu className="mobile-menu" onClick={handleMenuToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

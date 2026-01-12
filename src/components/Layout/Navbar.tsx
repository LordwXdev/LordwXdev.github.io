"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // This tracks which tab is currently selected
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', icon: '🏠' },
    { name: 'About', icon: '👤' },
    { name: 'Projects', icon: '📂' },
    { name: 'Services', icon: '🧰' },
    { name: 'Contact', icon: '💬' },
    { name: 'Testimonials', icon: '💖' }
  ];

  return (
    <nav className="glass-nav">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={`#${link.name.toLowerCase()}`}
          onClick={() => setActiveTab(link.name)}
          className={activeTab === link.name ? 'nav-item active' : 'nav-item'}
        >
          <span className="nav-icon">{link.icon}</span>
          <span className="nav-text">{link.name}</span>
        </a>
      ))}
    </nav>
  );
}
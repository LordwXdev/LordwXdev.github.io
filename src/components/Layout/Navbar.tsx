"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const links = [
    { name: 'Home', icon: '🏠' },
    { name: 'About', icon: '👤' },
    { name: 'Projects', icon: '📁' },
    { name: 'Services', icon: '🧰' },
    { name: 'Contact', icon: '💬' },
    { name: 'Testimonials', icon: '❤️' },
    { name: 'FAQ', icon: '❓' },
    { name: 'Blog', icon: '📰' }
  ];

  return (
    <nav>
      {links.map((link) => (
        <a
          key={link.name}
          className={activeTab === link.name ? 'active' : ''}
          onClick={() => setActiveTab(link.name)}
        >
          <span>{link.icon}</span> {link.name}
        </a>
      ))}
    </nav>
  );
}
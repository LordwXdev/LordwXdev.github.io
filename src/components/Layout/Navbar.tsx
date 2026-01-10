// src/components/Layout/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold text-gray-900 transition-colors hover:text-primary">
          [Your Name]
        </Link>


        {/* Desktop Menu (> 1024px) */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-primary transition duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (< 640px) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Active when < 640px and isOpen is true) */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-2 px-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:bg-gray-100 px-3 rounded transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

"use client";
import React from 'react';
import { Home, User, Folder, Tool, MessageSquare, Heart, HelpCircle, BookOpen } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, active: true },
    { name: 'About', icon: <User size={18} /> },
    { name: 'Projects', icon: <Folder size={18} /> },
    { name: 'Services', icon: <BookOpen size={18} /> },
    { name: 'Contact', icon: <MessageSquare size={18} /> },
    { name: 'Testimonials', icon: <Heart size={18} /> },
    { name: 'FAQ', icon: <HelpCircle size={18} /> },
    { name: 'Blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="fixed top-[15px] left-1/2 -translate-x-1/2 z-[100] bg-white/10 backdrop-blur-[14px] rounded-[40px] px-6 py-2.5 flex items-center gap-4 border border-white/15 shadow-2xl">
      {navLinks.map((link, idx) => (
        <a
          key={idx}
          href="#"
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-[30px] text-[0.95rem] transition-all duration-200 hover:bg-white/15 no-underline
            ${link.active ? 'bg-white/20 text-white font-semibold' : 'text-slate-200 font-medium'}`}
        >
          <span className="opacity-90">{link.icon}</span>
          {link.name}
        </a>
      ))}
    </nav>
  );
}
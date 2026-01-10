import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tighter uppercase">Lord</h3>
          <p className="text-gray-400 mt-2">© 2026 All Rights Reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#FF8C00] transition"><Github size={24} /></a>
          <a href="#" className="hover:text-[#FF8C00] transition"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-[#FF8C00] transition"><Twitter size={24} /></a>
          <a href="#" className="hover:text-[#FF8C00] transition"><Mail size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a className="text-gray-400 hover:text-[#FF8C00]">
            <Github size={24} />
          </a>
          <a className="text-gray-400 hover:text-[#FF8C00]">
            <Linkedin size={24} />
          </a>
          <a className="text-gray-400 hover:text-[#FF8C00]">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 Lord Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

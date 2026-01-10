import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-400/20 rounded-full blur-lg" />
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="text-sm uppercase tracking-widest opacity-70">Welcome</span>
        <h1 className="text-6xl md:text-8xl font-black mt-2">
          Hi, I am <span className="text-blue-200">Lord</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-light opacity-90">
          Creative Developer building the future of the web
        </p>
        <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
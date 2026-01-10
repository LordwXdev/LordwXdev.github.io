import React from 'react';

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 aspect-video rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400">Project Slot 1</div>
          <div className="bg-gray-100 aspect-video rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400">Project Slot 2</div>
        </div>
      </div>
    </section>
  );
};
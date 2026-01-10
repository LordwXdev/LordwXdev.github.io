import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomText } from '../UI/CustomText';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js 16 Performance",
    excerpt: "Deep dive into the latest rendering patterns and how to achieve perfect Lighthouse scores.",
    date: "Jan 10, 2026",
    image: "/images/blog-1.jpg",
    slug: "nextjs-performance"
  },
  {
    id: 2,
    title: "The Future of AI in Web Dev",
    excerpt: "How LLMs are changing the way we write code and architect modern user interfaces.",
    date: "Jan 05, 2026",
    image: "/images/blog-2.jpg",
    slug: "ai-web-dev"
  },
  {
    id: 3,
    title: "Responsive Design in 2026",
    excerpt: "Moving beyond media queries: container queries and fluid typography in action.",
    date: "Dec 20, 2025",
    image: "/images/blog-3.jpg",
    slug: "responsive-design"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              <CustomText text="Latest Insights" />
            </h2>
            <p className="text-xl text-gray-600">Thoughts on technology, design, and building for the web.</p>
          </div>
          <Link href="/blog" className="text-[#FF8C00] font-bold flex items-center gap-2 hover:underline">
            View All Posts <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-60 w-full mb-6 overflow-hidden rounded-2xl">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={16} />
                {post.date}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF8C00] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-gray-900 flex items-center gap-1">
                Read More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ServicesCard } from '../Cards/ServicesCard';
import { CustomText } from '../UI/CustomText';
import { Code, Layout, Cpu, Globe, Rocket, Shield } from 'lucide-react';

const servicesData = [
  {
    icon: <Layout size={40} />,
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered digital experiences with a focus on modern aesthetics and seamless usability."
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using Next.js, TypeScript, and modern CSS frameworks."
  },
  {
    icon: <Cpu size={40} />,
    title: "AI Integration",
    description: "Implementing cutting-edge AI features and LLM integrations to automate workflows and enhance user interaction."
  },
  {
    icon: <Globe size={40} />,
    title: "SEO Optimization",
    description: "Improving search engine rankings and site performance to ensure your brand reaches the right audience."
  },
  {
    icon: <Shield size={40} />,
    title: "Cybersecurity",
    description: "Developing secure applications with best practices in data protection and authentication systems."
  },
  {
    icon: <Rocket size={40} />,
    title: "Performance Tuning",
    description: "Optimizing existing applications for maximum speed, high Lighthouse scores, and better conversion rates."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            <CustomText text="My Specialized Services" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I offer a wide range of technical solutions tailored to meet your business needs and digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServicesCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
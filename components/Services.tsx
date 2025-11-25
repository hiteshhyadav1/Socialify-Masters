import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 relative bg-brand-surface/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-brand-neonCyan">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-neonCyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 bg-brand-surface rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <service.icon className="h-7 w-7 text-brand-neonCyan" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Specific Mini-Mockups based on Service Type */}
              <div className="mb-6 p-4 bg-black/40 rounded-lg border border-white/5 min-h-[100px] flex flex-col justify-center">
                 {service.id === '3d-ads' && (
                   <div className="flex items-center justify-center">
                     <div className="w-16 h-16 border-2 border-purple-500 animate-spin-slow flex items-center justify-center text-[10px] text-purple-300 uppercase tracking-widest">
                       3D View
                     </div>
                   </div>
                 )}
                 {service.id === 'whatsapp' && (
                   <div className="space-y-2">
                     <div className="bg-green-900/30 p-2 rounded-r-lg rounded-tl-lg w-3/4 self-start border border-green-500/20">
                       <p className="text-xs text-green-100">Hello! Want 20% off?</p>
                     </div>
                     <div className="bg-gray-800 p-2 rounded-l-lg rounded-tr-lg w-3/4 ml-auto">
                       <p className="text-xs text-gray-300">Yes, send details!</p>
                     </div>
                   </div>
                 )}
                 {service.id === 'ai-voice' && (
                   <div className="flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30">
                       <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                     </div>
                     <div className="flex-1 space-y-1">
                        <div className="h-1 bg-gray-700 rounded w-full overflow-hidden">
                          <div className="h-full bg-cyan-500 w-1/2 animate-pulse"></div>
                        </div>
                        <p className="text-[10px] text-gray-500">Calling Lead #402...</p>
                     </div>
                   </div>
                 )}
                 {!['3d-ads', 'whatsapp', 'ai-voice'].includes(service.id) && (
                   <img src={service.image} alt="Preview" className="w-full h-24 object-cover rounded opacity-60 grayscale group-hover:grayscale-0 transition-all" />
                 )}
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check className="h-4 w-4 text-brand-neonPurple mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onOpenBooking(service.title)}
                className="flex items-center text-brand-neonCyan text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all hover:text-cyan-300"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
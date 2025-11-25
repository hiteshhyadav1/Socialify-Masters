import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-neonPurple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-neonCyan/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[500px] shadow-2xl relative overflow-hidden">
          
          {/* Glowing Background Blob */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] -z-10"></div>

          <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-110 transition-transform duration-500 hover:rotate-3">
            <Instagram className="h-12 w-12 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Find Our Work on <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Instagram</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            We believe in showing, not just telling. Check out our latest 3D ads, website launches, and real-time client results exclusively on our feed.
          </p>

          <a
            href={`https://instagram.com/${CONTACT_INFO.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            <span className="relative z-10">@{CONTACT_INFO.instagram}</span>
            <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* Decorative Grid Mockup */}
          <div className="absolute -bottom-12 md:-bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-20 hover:opacity-40 transition-opacity duration-700 pointer-events-none">
             <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className={`aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/10 ${i === 0 || i === 4 ? 'hidden md:block' : ''}`}></div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
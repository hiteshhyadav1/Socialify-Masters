import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-brand-neonPurple/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-brand-neonCyan/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-brand-neonCyan font-display tracking-widest text-sm uppercase mb-2">
            Where Creativity Meets Technology
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display">
            We Turn Brands Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">
              Digital Powerhouses.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
            From 3D Video Ads to AI-Driven Voice Systems, we build the future of your marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold rounded-lg overflow-hidden transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Strategy Call <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-900/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all border border-white/10">
              <div className="w-10 h-10 rounded-full bg-brand-neonPurple/20 flex items-center justify-center border border-brand-neonPurple/50">
                <Play className="h-4 w-4 text-brand-neonPurple fill-current" />
              </div>
              <span className="font-semibold">View Our Work</span>
            </button>
          </div>
        </div>

        {/* 3D Visual Representation */}
        <div className="perspective-1000 relative h-[500px] w-full hidden lg:flex items-center justify-center">
          <div className="relative preserve-3d w-80 h-96 animate-float">
             {/* Simulated 3D Card Stack */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-slate-900/80 border border-purple-500/30 rounded-2xl transform rotate-y-12 rotate-x-12 translate-z-10 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse-glow"></div>
                <h3 className="text-2xl font-display font-bold mb-2">3D Ads</h3>
                <p className="text-sm text-gray-300">Next Gen Engagement</p>
                
                {/* Decorative UI elements */}
                <div className="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                  <div className="w-2/3 h-full bg-cyan-400 animate-pulse"></div>
                </div>
                <div className="flex gap-2 mt-4 w-full">
                  <div className="h-12 flex-1 bg-white/5 rounded-lg border border-white/10"></div>
                  <div className="h-12 flex-1 bg-white/5 rounded-lg border border-white/10"></div>
                </div>
             </div>
             
             {/* Background Element for depth */}
             <div className="absolute inset-0 bg-cyan-900/20 rounded-2xl transform -translate-x-10 -translate-y-10 -z-10 border border-cyan-500/20"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
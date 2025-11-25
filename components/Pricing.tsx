import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (planName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neonCyan/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Growth</span></h2>
          <p className="text-gray-400">Transparent pricing. No hidden fees. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 glass-panel border ${
                plan.recommended 
                  ? 'border-brand-neonCyan shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-300 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className={`h-5 w-5 flex-shrink-0 ${plan.recommended ? 'text-brand-neonCyan' : 'text-gray-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onOpenBooking(`${plan.name} Plan`)}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.recommended 
                    ? 'bg-brand-neonCyan text-black hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/mpwejdbd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          email,
          _subject: "New Lead Magnet Request: 30-Day Strategy"
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-brand-surface to-brand-dark border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neonPurple/20 blur-[50px] rounded-full"></div>

           <div className="flex-1 text-center md:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neonPurple/10 border border-brand-neonPurple/30 text-brand-neonPurple text-xs font-bold uppercase mb-4">
               <FileText className="h-3 w-3" /> Free Resource
             </div>
             <h3 className="text-3xl font-display font-bold mb-3">Get Your Free 30-Day Social Strategy</h3>
             <p className="text-gray-400 mb-6">Unlock the secrets to organic growth. Download our battle-tested PDF guide used by 50+ brands.</p>
             
             {status === 'success' ? (
               <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg text-green-300 text-center animate-pulse-glow">
                 <p className="font-bold">Success!</p>
                 <p className="text-sm">Check your inbox! The strategy guide is on its way.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                 <input 
                   type="email" 
                   name="email"
                   required
                   placeholder="Enter your email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   disabled={status === 'submitting'}
                   className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neonPurple transition-colors disabled:opacity-50"
                 />
                 <button 
                   type="submit"
                   disabled={status === 'submitting'}
                   className="bg-brand-neonPurple text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {status === 'submitting' ? (
                     <Loader2 className="h-4 w-4 animate-spin" />
                   ) : (
                     <Download className="h-4 w-4" />
                   )}
                   {status === 'submitting' ? 'Sending...' : 'Download PDF'}
                 </button>
               </form>
             )}
             {status === 'error' && (
                <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
             )}
           </div>

           <div className="w-full md:w-1/3 flex justify-center relative">
             <div className="w-40 h-52 bg-white rounded shadow-2xl rotate-3 border border-gray-200 relative z-10 flex flex-col items-center justify-center p-4">
               <div className="w-12 h-12 bg-brand-neonPurple rounded-full mb-4 flex items-center justify-center text-white font-bold">SM</div>
               <div className="h-2 w-20 bg-gray-200 rounded mb-2"></div>
               <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
               <div className="h-2 w-24 bg-gray-200 rounded"></div>
             </div>
             <div className="w-40 h-52 bg-gray-800 rounded shadow-2xl -rotate-6 border border-gray-700 absolute top-0 left-8 md:left-12"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
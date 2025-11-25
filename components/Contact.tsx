import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Instagram, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwejdbd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's Build Something <br /><span className="text-brand-neonCyan">Legendary.</span></h2>
            <p className="text-gray-400 text-lg mb-8">Ready to dominate your market? Book a discovery call or send us a message directly.</p>
            
            <div className="space-y-6">
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-white/10 group-hover:border-green-500/50">
                   <Phone className="h-5 w-5 text-gray-300 group-hover:text-green-400" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp / Call</p>
                   <p className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{CONTACT_INFO.whatsapp}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-white/10 group-hover:border-blue-500/50">
                   <Mail className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Email Us</p>
                   <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors border border-white/10 group-hover:border-pink-500/50">
                   <Instagram className="h-5 w-5 text-gray-300 group-hover:text-pink-400" />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Follow Us</p>
                   <p className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">@{CONTACT_INFO.instagram}</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            {status === 'success' ? (
                <div className="absolute inset-0 z-20 bg-brand-surface/95 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button 
                        type="button" 
                        onClick={() => setStatus('idle')}
                        className="text-brand-neonCyan font-bold hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : null}

            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">Something went wrong. Please try again later.</p>
                </div>
            )}

            <input type="hidden" name="_subject" value="New Inquiry from Website Contact Form" />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Name" 
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors w-full" 
                />
                <input 
                    type="text" 
                    name="company"
                    placeholder="Company" 
                    className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors w-full" 
                />
              </div>
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors" 
              />
              <select 
                name="service"
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-gray-400 focus:border-brand-neonCyan focus:outline-none transition-colors"
              >
                <option value="General Inquiry">Select Service</option>
                <option value="3D Ads">3D Ads</option>
                <option value="Web Design">Web Design</option>
                <option value="App Development">App Development</option>
                <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                <option value="Other">Other</option>
              </select>
              <textarea 
                name="message"
                required
                rows={4} 
                placeholder="Tell us about your project" 
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors"
              ></textarea>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-lg font-bold text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                    <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Socialify Masters. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
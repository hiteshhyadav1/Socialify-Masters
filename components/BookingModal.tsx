import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialInterest }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [interest, setInterest] = useState(initialInterest || '');

  useEffect(() => {
    if (isOpen && initialInterest) {
      setInterest(initialInterest);
    }
  }, [isOpen, initialInterest]);

  if (!isOpen) return null;

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
        setTimeout(() => {
            onClose();
            setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-brand-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
            <h3 className="text-2xl font-display font-bold mb-2">Book Your Strategy Call</h3>
            <p className="text-gray-400 mb-6 text-sm">Fill in your details and we'll schedule a time to discuss your growth.</p>

            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                    <p className="text-gray-400">We'll be in touch shortly to confirm your slot.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_subject" value={`New Inquiry: ${interest || 'Strategy Call'}`} />
                    
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="Your Name" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors"
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="Email Address" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <input 
                            type="tel" 
                            name="phone"
                            required
                            placeholder="WhatsApp Number" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-neonCyan focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <select 
                            name="interest"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-gray-400 focus:border-brand-neonCyan focus:outline-none transition-colors"
                        >
                            <option value="">Topic of Interest</option>
                            <option value="3D Paid Ads">3D Paid Ads</option>
                            <option value="Website Design">Website Design</option>
                            <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                            <option value="AI Voice Solutions">AI Voice Solutions</option>
                            <option value="App Development">App Development</option>
                            <option value="Product Video Ads">Product Video Ads</option>
                            <option value="Starter Plan">Starter Plan ($599)</option>
                            <option value="Growth Plan">Growth Plan ($999)</option>
                            <option value="Elite Plan">Elite Plan (Custom)</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>Failed to send request. Please try again.</span>
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-lg font-bold text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>Processing... <Loader2 className="h-4 w-4 animate-spin" /></>
                        ) : (
                            'Book Free Call Now'
                        )}
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
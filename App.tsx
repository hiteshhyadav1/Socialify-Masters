import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInterest, setBookingInterest] = useState('');

  const handleOpenBooking = (interest: string = '') => {
    setBookingInterest(interest);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-neonCyan selection:text-black">
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={() => handleOpenBooking('Strategy Call')} />
      <Services onOpenBooking={handleOpenBooking} />
      <Portfolio />
      <Pricing onOpenBooking={handleOpenBooking} />
      <LeadMagnet />
      <Contact />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialInterest={bookingInterest}
      />

      {/* Persistent WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-110 transition-transform hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 fill-current" />
      </a>
    </div>
  );
};

export default App;
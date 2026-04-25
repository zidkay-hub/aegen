import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  ConciergeBell, 
  Utensils, 
  Car, 
  Info, 
  MapPin, 
  MessageCircle, 
  X,
  Calendar,
  Home as HomeIcon,
  Compass
} from "lucide-react";

import Home from "./Home";
import { HotelInfo, Dining, Beaches, Transfers, Excursions } from "./pages";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Hotel Info", path: "/hotel-info" },
    { label: "Dining & Drinking", path: "/dining" },
    { label: "Beaches & Clubs", path: "/beaches" },
    { label: "Transfers & Laundry", path: "/transfers" },
    { label: "Excursions", path: "/excursions" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_rgba(26,28,28,0.04)] flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <Menu 
            className="w-6 h-6 text-primary cursor-pointer hover:scale-110 transition-transform" 
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <Link to="/" className="text-xl font-serif tracking-[0.2em] text-on-surface uppercase">THE AEGEAN</Link>
        <div className="flex items-center gap-4">
          <ConciergeBell 
            className="w-6 h-6 text-primary cursor-pointer hover:scale-110 transition-transform" 
            onClick={() => setIsConciergeOpen(true)}
          />
        </div>
      </header>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-surface z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-serif tracking-widest uppercase">Menu</h2>
                <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
              </div>
              <nav className="flex flex-col gap-8">
                {navLinks.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-serif italic transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-12 border-t border-outline-variant/20">
                <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface/40 mb-4 font-bold">Quick Contact</p>
                <p className="text-sm font-serif mb-2">Concierge: +30 697 724 6788</p>
                <p className="text-sm font-serif">Email: stay@theaegean.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Concierge Modal */}
      <AnimatePresence>
        {isConciergeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConciergeOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-surface rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-serif italic mb-2">Digital Concierge</h3>
                    <p className="text-sm text-on-surface/60">How can we assist you today?</p>
                  </div>
                  <button 
                    onClick={() => setIsConciergeOpen(false)}
                    className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Calendar, label: "Book a Table", desc: "Reserve at the island's best spots", path: "/dining" },
                    { icon: Car, label: "Request Transfer", desc: "Private chauffeur or airport pickup", path: "/transfers" },
                    { icon: Info, label: "Island Tips", desc: "Hidden gems and local secrets", path: "/beaches" }
                  ].map((item) => (
                    <Link 
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsConciergeOpen(false)}
                      className="w-full p-6 bg-surface-container-lowest rounded-2xl flex items-center gap-6 hover:bg-primary/5 transition-colors text-left group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{item.label}</p>
                        <p className="text-xs text-on-surface/40">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-outline-variant/20">
                  <button 
                    onClick={() => {
                      window.open("https://wa.me/306977246788", "_blank");
                      setIsConciergeOpen(false);
                    }}
                    className="w-full bg-primary text-white py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-colors shadow-lg shadow-primary/20"
                  >
                    Contact Concierge via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-info" element={<HotelInfo />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/excursions" element={<Excursions />} />
        </Routes>
      </main>

      {/* Floating Action Button */}
      {location.pathname !== '/' && (
        <motion.button 
          onClick={() => window.open("https://wa.me/306977246788", "_blank")}
          className="fixed bottom-32 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.button>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-evenly items-center pt-4 pb-10 px-4 bg-white/95 backdrop-blur-2xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-outline-variant/10">
        {[
          { icon: HomeIcon, label: "Home", path: "/" },
          { icon: Info, label: "Hotel", path: "/hotel-info" },
          { icon: Utensils, label: "Dining", path: "/dining" },
          { icon: Compass, label: "Explore", path: "/beaches" },
          { icon: Car, label: "Services", path: "/transfers" }
        ].map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/beaches' && location.pathname === '/excursions');
          return (
            <Link 
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1.5 transition-all ${isActive ? 'text-primary scale-110' : 'text-on-surface/30 hover:text-primary'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-sans text-[10px] font-bold tracking-tight uppercase">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

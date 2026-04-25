import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  ConciergeBell, 
  ChevronDown, 
  Utensils, 
  Car, 
  Palmtree, 
  GlassWater, 
  Info, 
  MapPin, 
  MessageCircle, 
  Wifi, 
  Key, 
  AlertCircle,
  Phone,
  Copy,
  ExternalLink,
  Navigation,
  Compass,
  Zap,
  Ship,
  X,
  Calendar,
  Clock,
  User
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("restaurants");
  const [selectedDiningCategory, setSelectedDiningCategory] = useState("All");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is roughly in the upper middle
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["restaurants", "transfers", "beaches", "bars", "rentals", "info"];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYLlByzNzM8UpjXYZ9JPBGo739mTVdG6ouoR8eirPnqH13Q1J1uDTrgjYR00V6sl4RHtS5SVsYIIlANqSNDmR4bvANhHM1CZB4eqzN9IvThMhxzmo4dQmmPLyrNyryQShMg4NysOMiWcOHw-_irxYUBSCnwZcTN92bZtm04cXry6NXn-P2EWALmRGRXuVWyH_79vZvR3QSFqtNnJQDx213tWy9IPcfUihCJaBpi59XDOUsqpgdF4d1QnQPuwrNhT-w0hDGT8kpa1A" 
            alt="Mykonos View"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface"></div>
        </div>
        <motion.div 
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8 leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Welcome to Your Mykonos Guide
          </h2>
          <p className="font-sans text-white/95 text-sm md:text-base tracking-[0.2em] mb-12 uppercase font-medium drop-shadow-md">
            Everything you need for a seamless and unforgettable stay
          </p>
          <motion.a 
            href="#quick-access" 
            className="inline-flex flex-col items-center gap-4 text-white font-sans uppercase tracking-[0.4em] text-xs hover:opacity-70 transition-opacity"
            whileHover={{ y: 5 }}
          >
            Explore Guide 
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-[68px] z-40 bg-surface-container-lowest/80 backdrop-blur-lg flex overflow-x-auto gap-8 px-8 py-5 no-scrollbar whitespace-nowrap border-b border-outline-variant/10">
        {["Restaurants", "Transfers", "Beaches", "Bars", "Rentals", "Info"].map((item) => {
          const id = item.toLowerCase();
          const isActive = activeSection === id;
          return (
            <a 
              key={item}
              href={`#${id}`}
              className={`font-serif text-sm tracking-widest transition-all ${isActive ? 'text-primary italic underline underline-offset-8' : 'text-on-surface hover:pl-2'}`}
            >
              {item}
            </a>
          );
        })}
      </nav>

      <main className="pb-32">
        {/* Quick Access Bento */}
        <section className="px-6 py-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto" id="quick-access">
          {[
            { icon: Utensils, label: "Restaurants", id: "restaurants" },
            { icon: Car, label: "Transfers", id: "transfers" },
            { icon: Palmtree, label: "Beaches", id: "beaches" },
            { icon: GlassWater, label: "Bars", id: "bars" },
            { icon: Zap, label: "Rentals", id: "rentals" },
            { icon: Info, label: "Info", id: "info" }
          ].map((item) => (
            <motion.a
              key={item.label}
              href={`#${item.id}`}
              className="p-8 bg-surface-container-lowest rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all hover:scale-[1.02] hover:shadow-lg group"
              whileHover={{ y: -5 }}
            >
              <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/60 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </motion.a>
          ))}
        </section>

        {/* Dining Section */}
        <section className="py-20" id="restaurants">
          <div className="px-6 mb-12 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Dining in Mykonos</h3>
              <p className="font-sans text-on-surface/60 text-sm max-w-md leading-relaxed">
                Curated culinary journeys from traditional tavernas to Michelin-starred icons.
              </p>
            </motion.div>
          </div>

          <div className="flex overflow-x-auto gap-3 px-6 mb-10 no-scrollbar max-w-5xl mx-auto">
            {["All", "High-End", "Traditional", "International", "Quick Bites"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedDiningCategory(cat)}
                className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${selectedDiningCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-surface-container-high text-on-surface/60 hover:bg-surface-container-low'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "M-Eating",
                tag: "High-End",
                desc: "Innovative Mediterranean flavors in a beautifully restored Mykonian house.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNxTmrSrN4Rjo3flkYLjBaNKPBftMLMuBFi8hxiYkxstwe54vn5QjKJZR7qBY_QrXgIhUA91rT8_QKyLPfc435dJpC9kRAAhMWLgnasP68cG_sOyNEbvf_tkogcNI0EQNRBiOYvUjqMEcAEHOxliI_kUyApbXThH3bitWeVskf3MGZPe0p-nNVcAmX3vm483rkD4FoqFdPPo7TPA1EpI8gQw4R8eDmZm97Nqmal-xTqADcRt1Cl7jmiiQ3pBc2kyVIxytb0YbnUJ8"
              },
              {
                name: "Zuma",
                tag: "International",
                desc: "Contemporary Japanese cuisine with breathtaking pool and sunset views.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCspht6a0wlWESDlzmg8VyytQI59yh779Xd0KWIo4yMeYZ8kyH_ZWDcSIbRIPTaS3hv_ezC8h9rogIaKwY9g5JcB2YozL91lkMflFnsD6MQU8135Vm3Y6DiUHpN6JUTk1fpw_GAq9vC6ZSCe4Xy-RE2ncYkq1VWAZGbMlcG5OaLBMZJeDIah0zlGALLNQLLf5jmkDtFNQ0whkZJzZYQdn15DoUBxLOZ7uMGSKmNnMGGAN6dUOC2sZqpYohL1OUCSyUEge5pKkzNuwI"
              },
              {
                name: "Kiki's Taverna",
                tag: "Traditional",
                desc: "Famous open-air grill with no electricity, serving the freshest local ingredients.",
                img: "https://picsum.photos/seed/kikis/800/600"
              },
              {
                name: "Souvlaki Story",
                tag: "Quick Bites",
                desc: "The best traditional gyros and souvlaki in Chora, perfect for a fast island meal.",
                img: "https://picsum.photos/seed/souvlaki/800/600"
              }
            ].filter(rest => selectedDiningCategory === "All" || rest.tag === selectedDiningCategory).map((rest) => (
              <motion.div 
                key={rest.name}
                className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                {...fadeIn}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={rest.img} 
                    alt={rest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">
                      {rest.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-serif mb-3">{rest.name}</h4>
                  <p className="text-sm text-on-surface/60 font-sans mb-8 leading-relaxed">{rest.desc}</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => window.open("https://m-eating.gr", "_blank")}
                      className="flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary text-white rounded-2xl hover:bg-primary-container transition-colors"
                    >
                      Visit Website
                    </button>
                    <button 
                      onClick={() => window.open("https://google.com/maps", "_blank")}
                      className="px-5 border border-outline-variant/20 rounded-2xl hover:bg-surface-container-low transition-colors"
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="px-6 mt-12 flex overflow-x-auto gap-6 no-scrollbar max-w-5xl mx-auto">
            {["Nōema", "To Maereio", "Bakalo", "Kiki's Taverna"].map((other) => (
              <div key={other} className="min-w-[240px] p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/5">
                <h5 className="font-serif text-lg mb-2">{other}</h5>
                <p className="text-[11px] text-on-surface/50 mb-4">Authentic Cycladic flavors & atmosphere</p>
                <button 
                  onClick={() => window.open(`https://wa.me/306977246788?text=I'm interested in exploring restaurants like ${other}`, "_blank")}
                  className="text-[10px] font-bold text-primary uppercase tracking-widest border-b border-primary/30 pb-1 cursor-pointer hover:border-primary transition-all"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Transfers Section */}
        <section className="py-24 bg-surface-container-low" id="transfers">
          <div className="px-6 mb-16 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Transfers</h3>
              <p className="font-sans text-on-surface/60 text-sm max-w-md">
                Seamless movement across the island, from private cars to the SeaBus.
              </p>
            </motion.div>
          </div>

          <div className="px-6 space-y-8 max-w-5xl mx-auto">
            <motion.div 
              className="p-10 bg-surface-container-lowest rounded-[3rem] shadow-sm relative overflow-hidden group"
              {...fadeIn}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-3xl font-serif mb-3">Private Chauffeur</h4>
                <p className="text-base text-on-surface/60 mb-10 max-w-sm leading-relaxed">
                  Fast, reliable, and premium service across Mykonos. Professional English-speaking drivers.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface/40 font-bold mb-1">Starting from</span>
                    <span className="text-3xl font-serif">€30 - €40</span>
                  </div>
                  <button 
                    onClick={() => window.open("https://wa.me/306977246788?text=Hello%2C%20I%20would%20like%20to%20book%20a%20private%20chauffeur", "_blank")}
                    className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Concierge
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="p-8 bg-surface-container-lowest rounded-3xl"
                {...fadeIn}
              >
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <h5 className="font-serif text-xl mb-2">Island Bus</h5>
                <p className="text-sm text-on-surface/50 mb-6 leading-relaxed">Multiple routes to all major beaches and villages.</p>
                <button 
                  onClick={() => window.open("https://mykonosbuses.com/", "_blank")}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all inline-block"
                >
                  Timetable
                </button>
              </motion.div>
              <motion.div 
                className="p-8 bg-surface-container-lowest rounded-3xl"
                {...fadeIn}
              >
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                  <Ship className="w-5 h-5 text-primary" />
                </div>
                <h5 className="font-serif text-xl mb-2">SeaBus</h5>
                <p className="text-sm text-on-surface/50 mb-6 leading-relaxed">Port to Old Town center connection every 30 mins.</p>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-serif">€2.50</span>
                  <button 
                    onClick={() => window.open("https://mykonos-seabus.gr/", "_blank")}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all"
                  >
                    Schedule
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-24" id="beaches">
          <div className="px-6 mb-16 max-w-5xl mx-auto flex justify-between items-end">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Explore</h3>
              <p className="font-sans text-on-surface/60 text-sm">Uncover the soul of the Cyclades.</p>
            </motion.div>
            <Compass className="w-12 h-12 text-primary/20 hidden sm:block" />
          </div>

          <div className="px-6 space-y-24 max-w-5xl mx-auto">
            {/* Beach Card */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
                {...fadeIn}
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk0KjNWMchFv7ROAzXHddySm1AXRr42y49YpxFMF601xdJq7cSvnN47FT9WEFBE2rElUnz9ig5XSBDwKXENSsIK0GEjX5sd0rcubVTivx9AiTM4PdLExCfVrrar_HpiOodRckol0qW2dAQwuT8QINy4OXgYkZwWJ4cvDgldnpz5is0P9mfevzEM2IK7uJObHNDHe7_7GAPx4KxEJezWVmj6I9S3h_9N9xKBDrCrnj_EOLsqOwAEFHF7h4H_7htBRAI2Nbm9rcASZM" 
                  alt="Psarou Beach" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div className="md:w-1/2" {...fadeIn}>
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-6 block">Beaches</span>
                <h4 className="text-5xl font-serif italic mb-6 leading-tight">Psarou Beach</h4>
                <p className="text-base text-on-surface/60 font-sans leading-relaxed mb-10">
                  The ultimate cosmopolitan beach experience. Home to Nammos and crystal clear waters favored by the world's elite. Perfect for those seeking luxury and vibrant energy.
                </p>
                <button 
                  onClick={() => window.open("https://google.com/maps", "_blank")}
                  className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-primary pb-2 hover:gap-5 transition-all"
                >
                  Get Directions <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Landmark Card */}
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
              <motion.div className="md:w-1/2" {...fadeIn}>
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-6 block">Landmarks</span>
                <h4 className="text-5xl font-serif italic mb-6 leading-tight">Little Venice</h4>
                <p className="text-base text-on-surface/60 font-sans leading-relaxed mb-10">
                  The most romantic spot on the island. Historic houses built on the edge of the sea, perfect for sunset cocktails and capturing the iconic Mykonos skyline.
                </p>
                <button 
                  onClick={() => window.open("https://wa.me/306977246788?text=I'd%20like%20to%20know%20more%20about%20your%20Little%20Venice%20tours", "_blank")}
                  className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-primary pb-2 hover:gap-5 transition-all"
                >
                  Explore Tours <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
              <motion.div 
                className="w-full md:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
                {...fadeIn}
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwOfPLno7-lLg1PAdkR59pU6ygKwZ09rEFmJqGmBvg-alurLnSf1tgPu6plbRqyS1ukOE3kXZRvpGs8tioXS7kR_Bq8Gj9_-nMIMLgFAASlw6lx7qNxNZOAXRTq5uTnGrzDVh8Fa94l8JPyEy42WT3kPTF5L5BXw6yFfk2th1GA21IAuZueX--RA33PVBkqFSoqmFtjY95jkURLfg3mzLoddDuJAR6DLv-pa-uRnpNxDPT0lxachpXfVVEM-cgTMBnSygeAvg4l9A" 
                  alt="Little Venice" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nightlife Section */}
        <section className="py-24 bg-on-surface text-surface" id="bars">
          <div className="px-6 mb-16 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4 text-primary-container">Nightlife</h3>
              <p className="font-sans text-stone-400 text-sm max-w-md">
                Where the night comes alive under the Greek stars. From sunset rituals to sunrise beats.
              </p>
            </motion.div>
          </div>

          <div className="px-6 flex overflow-x-auto gap-8 no-scrollbar max-w-5xl mx-auto">
            {[
              {
                name: "180º Sunset Bar",
                desc: "Breathtaking panoramic views of the town and harbor. Sophisticated beats and signature cocktails."
              },
              {
                name: "Scorpios",
                desc: "A modern-day agora at Paraga Beach. Holistic ritual meets electronic luxury."
              },
              {
                name: "Astra",
                desc: "The legendary heart of Mykonos nightlife. Where fashion and music converge."
              }
            ].map((bar) => (
              <motion.div 
                key={bar.name}
                className="min-w-[320px] bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-[2.5rem] p-10 flex flex-col"
                whileHover={{ y: -10 }}
              >
                <h5 className="text-2xl font-serif mb-4 text-white">{bar.name}</h5>
                <p className="text-sm text-stone-400 mb-10 flex-1 leading-relaxed">{bar.desc}</p>
                <button 
                  onClick={() => window.open(`https://wa.me/306977246788?text=I'd%20like%20to%20book%20a%20table%20at%20${bar.name}`, "_blank")}
                  className="w-full py-4 border border-primary-container text-primary-container text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-primary-container hover:text-on-surface transition-all"
                >
                  Book a Table
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rentals Section */}
        <section className="py-24 bg-surface-container-low" id="rentals">
          <div className="px-6 mb-16 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Rentals</h3>
              <p className="font-sans text-on-surface/60 text-sm max-w-md">
                Explore the island at your own pace with our premium rental fleet.
              </p>
            </motion.div>
          </div>

          <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Luxury SUV", price: "€150/day", icon: Car },
              { name: "Convertible", price: "€120/day", icon: Zap },
              { name: "ATV / Quad", price: "€60/day", icon: Navigation }
            ].map((item) => (
              <motion.div 
                key={item.name}
                className="p-8 bg-surface-container-lowest rounded-3xl flex flex-col items-center text-center shadow-sm"
                {...fadeIn}
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h5 className="font-serif text-xl mb-2">{item.name}</h5>
                <p className="text-2xl font-serif text-primary mb-6">{item.price}</p>
                <button 
                  onClick={() => window.open(`https://wa.me/306977246788?text=I'd%20like%20to%20reserve%20a%20${item.name}`, "_blank")}
                  className="w-full py-3 text-[10px] font-bold uppercase tracking-widest border border-outline-variant/30 rounded-xl hover:bg-primary hover:text-white transition-all"
                >
                  Reserve Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Essential Info */}
        <section className="py-24" id="info">
          <div className="px-6 mb-16 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Essential Info</h3>
              <p className="font-sans text-on-surface/60 text-sm">Practical details for a worry-free stay.</p>
            </motion.div>
          </div>

          <div className="px-6 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Key, label: "Check-In / Out", value: "3:00 PM / 11:00 AM" },
              { icon: Wifi, label: "Hotel WiFi", value: "AEGEAN_PREMIUM_2024", action: Copy },
              { icon: AlertCircle, label: "Emergency", value: "Dial 100 or Concierge at 200", action: Phone, color: "text-red-500" }
            ].map((item) => (
              <motion.div 
                key={item.label}
                className="p-8 bg-surface-container-high rounded-3xl flex items-center justify-between group hover:bg-surface-container-low transition-colors"
                {...fadeIn}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface/40 mb-1">{item.label}</p>
                    <p className="text-base font-medium">{item.value}</p>
                  </div>
                </div>
                {item.action && (
                  <item.action className={`w-5 h-5 cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity ${item.color || 'text-on-surface'}`} />
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

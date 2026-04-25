import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, Info, Utensils, Palmtree, Car, Compass, 
  MapPin, ExternalLink, Zap, Key, Wifi, AlertCircle, Phone, Copy, Check,
  CheckCircle2, Clock, ShieldAlert, Home as HomeIcon, MessageCircle, Shirt, Briefcase,
  Ship, Bus,
  Mountain, Landmark, Waves, Anchor, Sun, Moon,
  Users
} from "lucide-react";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

export function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className="pt-40 pb-16 px-6 bg-surface-container-lowest border-b border-outline-variant/10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-serif italic mb-6">{title}</h2>
        <p className="font-sans text-on-surface/60 text-xs md:text-sm tracking-widest uppercase">{subtitle}</p>
      </motion.div>
    </section>
  );
}

export function Home() {
  return (
    <>
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

      {/* Quick Access Bento */}
      <section className="px-6 py-24 max-w-5xl mx-auto" id="quick-access">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-serif italic mb-2">Our Services</h3>
          <p className="text-on-surface/60 text-sm">Select a category below to explore</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Info, label: "Hotel Info", path: "/hotel-info" },
            { icon: Utensils, label: "Dining & Drinking", path: "/dining" },
            { icon: Palmtree, label: "Beaches & Excursions", path: "/beaches" },
            { icon: Car, label: "Transfers & Laundry", path: "/transfers" },
            { icon: Compass, label: "Sightseeing & Shopping", path: "/sightseeing" }
          ].map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="p-8 bg-surface-container-lowest rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all hover:scale-[1.02] hover:shadow-lg group"
            >
              <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/60 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function HotelInfo() {
  const [copiedWifi, setCopiedWifi] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWifi(text);
    setTimeout(() => setCopiedWifi(null), 2000);
  };

  const wifiNetworks = [
    { rooms: "1, 2, 3, 5", network: "Eleannas1", pass: "eleannas1" },
    { rooms: "4, 12", network: "Eleannas Seaview", pass: "Seaview25" },
    { rooms: "6 & 7", network: "Eleannas Deluxe", pass: "eleannas4" },
    { rooms: "8, 9, 10", network: "Eleannas Studios", pass: "litous05" },
    { rooms: "11", network: "Eleannas Home", pass: "eleannas3" },
    { rooms: "14, 16", network: "Vastaous", pass: "sunset2021" },
    { rooms: "15", network: "Dinhouse", pass: "dinhouse1" },
    { rooms: "17, 18", network: "Eleannas View", pass: "eleannas5" },
  ];

  return (
    <div>
      <PageHeader title="Hotel Info" subtitle="Welcome to your home away from home" />
      <div className="px-6 py-12 max-w-3xl mx-auto space-y-12">
        
        {/* Welcome Section */}
        <motion.div {...fadeIn} className="text-center space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <HomeIcon className="w-8 h-8 text-primary" />
          </div>
          <p className="font-sans text-on-surface/80 leading-relaxed text-base md:text-lg">
            We’re thrilled to have you with us. Whether you’re here to work, relax, or share your travel highlights, we’ve got you covered with high-speed internet.
          </p>
        </motion.div>

        {/* WiFi Section */}
        <motion.div {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Wifi className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-serif">Get Connected</h3>
              <p className="text-sm text-on-surface/60 font-sans">Select your room number to find your network.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wifiNetworks.map((net, idx) => (
              <div key={idx} className="p-4 border border-outline-variant/20 rounded-2xl bg-surface transition-colors hover:border-primary/30">
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">Room {net.rooms}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-on-surface/60">Network:</span>
                  <span className="text-sm font-bold">{net.network}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-on-surface/60">Password:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono bg-on-surface/5 px-2 py-0.5 rounded">{net.pass}</span>
                    <button 
                      onClick={() => handleCopy(net.pass)}
                      className="p-1.5 hover:bg-on-surface/10 rounded-md transition-colors"
                      title="Copy Password"
                    >
                      {copiedWifi === net.pass ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-on-surface/40" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Housekeeping */}
        <motion.div {...fadeIn} className="bg-surface-container-low rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-outline-variant/10">
           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
             <Clock className="w-8 h-8 text-primary" />
           </div>
           <div className="text-center sm:text-left flex-1">
             <h3 className="text-xl font-serif mb-2">Housekeeping</h3>
             <p className="text-sm text-on-surface/80 font-sans mb-4">
               Service starts daily from <strong className="text-primary">11:00 to 15:00</strong>.<br/>
               If you have specific preferences, feel free to reach out.
             </p>
             <button 
                onClick={() => window.open("https://wa.me/306977246788", "_blank")}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" /> Message Us
              </button>
           </div>
        </motion.div>

        {/* Contact Numbers */}
        <motion.div {...fadeIn} className="space-y-6 pt-4">
          <h3 className="text-2xl font-serif italic text-center mb-2">Important Contacts</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://wa.me/306977246788" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:scale-[1.02] transition-transform text-center shadow-sm">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-2">Eleannas Team</p>
              <p className="font-serif text-lg text-primary">+30 697 724 6788</p>
              <span className="text-[9px] bg-[#25D366]/10 text-[#25D366] font-bold px-2 py-1 rounded-full mt-2 tracking-wider">WHATSAPP</span>
            </a>

            <a href="tel:112" className="flex flex-col items-center p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:scale-[1.02] transition-transform text-center shadow-sm">
              <AlertCircle className="w-8 h-8 text-red-500 mb-3" />
              <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-2">Emergency</p>
              <p className="font-serif text-xl text-red-500">112 <span className="text-sm text-on-surface/40">/</span> 166</p>
            </a>

            <a href="tel:100" className="flex flex-col items-center p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:scale-[1.02] transition-transform text-center shadow-sm">
              <ShieldAlert className="w-8 h-8 text-blue-500 mb-3" />
              <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-2">Police</p>
              <p className="font-serif text-xl text-blue-500">100</p>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export function Dining() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast & Cafe", "Traditional", "Souvlaki & Street Food", "Sunset Bars", "Chic & Cosmopolitan", "High Energy & Late Night", "Hidden Gems"];

  const restaurants = [
    // Breakfast & Cafe
    {
      name: "Lalala Restaurant",
      category: "Breakfast & Cafe",
      description: "A wonderful spot to start your day with fresh coffee and excellent breakfast.",
      perk: "10% off when mentioning Eleanna's",
      mapsQuery: "Lalala+Restaurant+Mykonos"
    },
    {
      name: "Rhino Vegan",
      category: "Breakfast & Cafe",
      description: "Specialty vegan meals and plant-based street food creations.",
      perk: "10% off the menu for Eleanna's guests",
      mapsQuery: "Rhino+Vegan+Mykonos"
    },
    {
      name: "Veneti Bakery",
      category: "Breakfast & Cafe",
      description: "Famous for traditional Greek pies, fresh pastries, and daily breads.",
      mapsQuery: "Veneti+Bakery+Mykonos"
    },
    // Traditional
    {
      name: "Nikos Taverna",
      category: "Traditional",
      description: "A Mykonos classic serving incredible traditional Greek cuisine right off the lively square.",
      mapsQuery: "Nikos+Taverna+Mykonos"
    },
    {
      name: "Cavo Fish Tavern",
      category: "Traditional",
      description: "Enjoy the catch of the day at this beloved traditional seafood tavern.",
      mapsQuery: "Cavo+Fish+Tavern+Mykonos"
    },
    {
      name: "Bakoyias",
      category: "Traditional",
      description: "An authentic, charming spot for mezethes and classic Greek flavors.",
      mapsQuery: "Bakoyias+Mykonos"
    },
    {
      name: "Koynelas Fish Tavern",
      category: "Traditional",
      description: "Hidden gem known for unparalleled fresh seafood and an authentic courtyard setting.",
      mapsQuery: "Koynelas+Fish+Tavern+Mykonos"
    },
    {
      name: "M-eating",
      category: "Traditional",
      description: "Upscale traditional Greek cuisine presented with modern flair in a beautiful building.",
      mapsQuery: "M-eating+Mykonos"
    },
    {
      name: "Happy Fish",
      category: "Traditional",
      description: "Delightful seaside dining celebrating fresh Mediterranean seafood.",
      mapsQuery: "Happy+Fish+Mykonos"
    },
    {
      name: "Maereio Restaurant",
      category: "Traditional",
      description: "Cozy and authentic, offering home-style Mykonian culinary secrets.",
      mapsQuery: "To+Maereio+Mykonos"
    },
    // Souvlaki & Street Food
    {
      name: "Pepper Restaurant",
      category: "Souvlaki & Street Food",
      description: "Famous for serving some of the absolute best souvlaki in town.",
      mapsQuery: "Pepper+Mykonos"
    },
    {
      name: "Captains",
      category: "Souvlaki & Street Food",
      description: "A lively spot sharing the title for the best souvlaki and great sharing plates.",
      mapsQuery: "Captains+Mykonos"
    },
    // Sunset Bars
    {
      name: "Caprice Bar",
      category: "Sunset Bars",
      description: "An absolute classic in Little Venice. Narrow, crowded, and perfectly captures the bohemian chic vibe.",
      mapsQuery: "Caprice+Bar+Mykonos"
    },
    {
      name: "Scarpa Bar",
      category: "Sunset Bars",
      description: "Known for fresh fruit cocktails (try the watermelon). A chill sunset spot that turns into a high-energy house music hub after 11:00 PM.",
      mapsQuery: "Scarpa+Bar+Mykonos"
    },
    {
      name: "Katerina’s Restaurant & Cocktail Bar",
      category: "Sunset Bars",
      description: "For a slightly more grown-up feel, grab a seat on their tiny balconies hanging right over the sea.",
      mapsQuery: "Katerinas+Bar+Mykonos"
    },
    {
      name: "180° Sunset Bar",
      category: "Sunset Bars",
      description: "A short uphill walk from the center with the most iconic panoramic view of the Town and windmills. Reservation needed.",
      perk: "Book in advance",
      mapsQuery: "180+Sunset+Bar+Mykonos"
    },
    // Chic & Cosmopolitan
    {
      name: "Astra",
      category: "Chic & Cosmopolitan",
      description: "Designed by famous artist Minas with a fiber-optic ceiling. Transitions from lounge to a serious party.",
      mapsQuery: "Astra+Mykonos"
    },
    {
      name: "Queen of Mykonos",
      category: "Chic & Cosmopolitan",
      description: "High-end champagne and cocktail bar in the center of Chora. Great for people-watching.",
      mapsQuery: "Queen+of+Mykonos"
    },
    {
      name: "Interni",
      category: "Chic & Cosmopolitan",
      description: "A stunning open-air courtyard bar/restaurant. Incredibly stylish to start your night.",
      mapsQuery: "Interni+Mykonos"
    },
    // High Energy & Late Night
    {
      name: "Scandinavian Bar & Disco",
      category: "High Energy & Late Night",
      description: "A Mykonos institution since the 70s. Loud, unpretentious for dancing and shots without the VIP price tag.",
      mapsQuery: "Scandinavian+Bar+Mykonos"
    },
    {
      name: "Jackie O’ Town Bar",
      category: "High Energy & Late Night",
      description: "Premier gay bar near Old Harbor. Famous for sunset drag shows and welcoming, high-energy atmosphere.",
      mapsQuery: "Jackie+O+Mykonos+Town"
    },
    {
      name: "Lola Bar",
      category: "High Energy & Late Night",
      description: "Cozy, cabaret-style bar with a jazzier vibe. Stylish, friendly with some of the best drinks in Town.",
      mapsQuery: "Lola+Bar+Mykonos"
    },
    // Hidden Gems
    {
      name: "Bao’s Cocktail Bar",
      category: "Hidden Gems",
      description: "Named after a local pirate. Located in Little Venice with great music and a bit more room to breathe.",
      mapsQuery: "Baos+Cocktail+Bar+Mykonos"
    },
    {
      name: "Negrita",
      category: "Hidden Gems",
      description: "Famous for its picturesque floral decor on the waterfront. Highly Instagrammable with solid cocktails.",
      mapsQuery: "Negrita+Mykonos"
    }
  ];

  const filteredRestaurants = activeCategory === "All" 
    ? restaurants 
    : restaurants.filter(r => r.category === activeCategory);

  return (
    <div>
      <PageHeader title="Dining & Drinking" subtitle="A curated culinary journey & nightlife guide" />
      
      <div className="px-6 py-12 max-w-4xl mx-auto">
        {/* Category Pills */}
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-8 -mx-6 px-6 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                ${activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-container-low text-on-surface/60 hover:bg-surface-container border border-outline-variant/20'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRestaurants.map((restaurant, idx) => (
            <motion.div 
              key={restaurant.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-serif text-on-surface">{restaurant.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold bg-primary/5 px-2 py-1 rounded-md shrink-0">
                    {restaurant.category.split(' & ')[0]}
                  </span>
                </div>
                <p className="text-sm font-sans text-on-surface/70 leading-relaxed mb-4">
                  {restaurant.description}
                </p>
                
                {restaurant.perk && (
                  <div className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200/50 mb-4 shadow-sm">
                    ✨ {restaurant.perk}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${restaurant.mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-container text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Beaches() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", 
    "Trendy & Luxury", 
    "Best Swimming", 
    "Pure Nature", 
    "For Active Travelers",
    "Beach Clubs: Paraga",
    "Beach Clubs: Paradise",
    "Beach Clubs: Psarou",
    "Beach Clubs: North"
  ];

  const locations = [
    // Trendy & Luxury
    {
      name: "Psarou Beach",
      category: "Trendy & Luxury",
      description: "The most glamorous beach on the island—yachts anchor here, high-end boutiques, and world-famous celebrity scenes.",
      mapsQuery: "Psarou+Beach+Mykonos"
    },
    {
      name: "Paraga Beach",
      category: "Trendy & Luxury",
      description: "A beautiful cove with a bohemian-chic vibe. Exclusive and very polished.",
      mapsQuery: "Paraga+Beach+Mykonos"
    },
    {
      name: "Panormos Beach",
      category: "Trendy & Luxury",
      description: "Located on the north coast. Feels like a lush, luxury jungle attracting a very polished crowd.",
      mapsQuery: "Panormos+Beach+Mykonos"
    },
    
    // Best Swimming & All-Rounders
    {
      name: "Platis Gialos",
      category: "Best Swimming",
      description: "Turquoise, calm waters lined with great restaurants. Hub for the water taxi to other beaches.",
      mapsQuery: "Platis+Gialos+Mykonos"
    },
    {
      name: "Ornos Beach",
      category: "Best Swimming",
      description: "Very close to Mykonos Town. Sheltered bay, perfect for families or windy days.",
      mapsQuery: "Ornos+Beach+Mykonos"
    },
    {
      name: "Elia Beach",
      category: "Best Swimming",
      description: "Longest sandy beach. Spacious with high-end and relaxed areas. Historically LGBTQ+ friendly.",
      mapsQuery: "Elia+Beach+Mykonos"
    },

    // Pure Nature (Quiet & Wild)
    {
      name: "Agios Sostis",
      category: "Pure Nature",
      description: "Considered the most beautiful beach. No sunbeds or umbrellas—just raw beauty and a peaceful natural setting.",
      mapsQuery: "Agios+Sostis+Mykonos"
    },
    {
      name: "Kapari Beach",
      category: "Pure Nature",
      description: "Tiny, hidden gem near Agios Ioannis. Great spot for a sunset swim away from main strips.",
      mapsQuery: "Kapari+Beach+Mykonos"
    },
    {
      name: "Fokos & Myrsini",
      category: "Pure Nature",
      description: "Rugged, pebble-sandy beaches on the remote north coast. Feels like a different planet.",
      mapsQuery: "Fokos+Beach+Mykonos"
    },

    // Active
    {
      name: "Kalafatis Beach",
      category: "For Active Travelers",
      description: "The go-to organized spot for windsurfing and water sports with an athletic energy.",
      mapsQuery: "Kalafatis+Beach+Mykonos"
    },
    {
      name: "Korfos Beach",
      category: "For Active Travelers",
      description: "Located right behind Ornos; the kitesurfing capital of Mykonos.",
      mapsQuery: "Korfos+Beach+Mykonos"
    },

    // Beach Clubs: Paraga
    {
      name: "Scorpios",
      category: "Beach Clubs: Paraga",
      description: "Famed for Sunset Rituals (Thurs & Sun). Deep organic house, boho-chic vibes.",
      mapsQuery: "Scorpios+Mykonos"
    },
    {
      name: "SantAnna",
      category: "Beach Clubs: Paraga",
      description: "Largest seawater pool in Europe with private cabanas and underwater suites. High-end polished poolside party.",
      mapsQuery: "SantAnna+Mykonos"
    },
    {
      name: "Kalua",
      category: "Beach Clubs: Paraga",
      description: "Classic beach-party energy with great food and dancers on Paraga.",
      mapsQuery: "Kalua+Mykonos"
    },

    // Beach Clubs: Paradise & Super Paradise
    {
      name: "Tropicana & Paradise Club",
      category: "Beach Clubs: Paradise",
      description: "Legendary for 4:30 PM parties with dancing on tables. Mega-venues hosting Top 100 DJs.",
      mapsQuery: "Paradise+Beach+Club+Mykonos"
    },
    {
      name: "Cavo Paradiso",
      category: "Beach Clubs: Paradise",
      description: "Open-air amphitheater on a cliff. Arrive after 2:00 AM to watch the sunrise to world-famous DJs.",
      perk: "Late Night / Sunrise",
      mapsQuery: "Cavo+Paradiso+Mykonos"
    },
    {
      name: "Super Paradise Beach Club",
      category: "Beach Clubs: Paradise",
      description: "High-energy spot staple for LGBTQ+ and a wild afternoon. Foam parties and champagne.",
      mapsQuery: "Super+Paradise+Beach+Club"
    },
    {
      name: "Jackie O' Beach Club",
      category: "Beach Clubs: Paradise",
      description: "Sophisticated pool club with legendary late afternoon drag shows.",
      mapsQuery: "JackieO+Beach+Club+Mykonos"
    },

    // Beach Clubs: Psarou & North
    {
      name: "Nammos",
      category: "Beach Clubs: Psarou",
      description: "The ultra-luxury playground for the billionaire set. High-fashion, high-spend daytime beach party.",
      mapsQuery: "Nammos+Mykonos"
    },
    {
      name: "Alemagou",
      category: "Beach Clubs: North",
      description: "Stunning rustic-chic spot in Ftelia. Intimate 'wild' sunset parties avoiding the commercial feel.",
      mapsQuery: "Alemagou+Mykonos"
    }
  ];

  const filteredLocations = activeCategory === "All" 
    ? locations 
    : locations.filter(r => r.category === activeCategory);

  return (
    <div>
      <PageHeader title="Beaches & Clubs" subtitle="From secluded bays to world-class parties" />
      <div className="px-6 py-12 max-w-4xl mx-auto">
        
        {/* Helper Banner for Beach Clubs */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-6 mb-8 text-sm">
          <p className="font-serif text-lg mb-2 text-primary">Beach Club Schedule Rhythm</p>
          <ul className="space-y-1 text-on-surface/70 font-sans">
            <li><span className="font-bold text-primary">11:00 AM – 4:00 PM:</span> Day Lounges</li>
            <li><span className="font-bold text-primary">5:00 PM – 9:00 PM:</span> Sunset Rituals</li>
            <li><span className="font-bold text-primary">1:00 AM – Sunrise:</span> Late-Night Clubs</li>
          </ul>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-8 -mx-6 px-6 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                ${activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface-container-low text-on-surface/60 hover:bg-surface-container border border-outline-variant/20'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLocations.map((loc, idx) => (
            <motion.div 
              key={loc.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                  <h3 className="text-xl font-serif text-on-surface">{loc.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold bg-primary/5 px-2 py-1 rounded-md shrink-0">
                    {loc.category.includes('Beach Clubs:') ? 'Beach Club' : loc.category}
                  </span>
                </div>
                <p className="text-sm font-sans text-on-surface/70 leading-relaxed mb-4">
                  {loc.description}
                </p>
                
                {loc.perk && (
                  <div className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200/50 mb-4 shadow-sm">
                    ✨ {loc.perk}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-container text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Transfers() {
  return (
    <div>
      <PageHeader title="Transfers & Laundry" subtitle="Luggage assistance and premium laundry services" />
      <div className="px-6 py-16 grid grid-cols-1 gap-12 max-w-3xl mx-auto">
        
        {/* Laundry Service */}
        <motion.section {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
              <Shirt className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-3xl font-serif">Fresh & Clean</h3>
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-blue-200">1€ / Item</span>
              </div>
              <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                Enjoy our convenient laundry service for only <strong className="text-on-surface">1€ per item</strong> (wash & dry).
              </p>
              
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50">How it works</h4>
                <ul className="space-y-3">
                  {[
                    "Pack your clothes into the designated Laundry bag.",
                    "Place the exact change inside the bag.",
                    "Leave the bag by your door inside your room for morning pickup.",
                    "Laundry is returned the following morning."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-sans text-on-surface/80 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Luggage Transfer Component */}
        <motion.section {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
              <Briefcase className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-3xl font-serif">Luggage Transfer</h3>
                <span className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-amber-200">1€ / Item, Wash and Fold </span>
              </div>
              
              <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                Need a hand with your bags? We provide luggage assistance to your taxi or bus station. We’ll handle the heavy lifting from there!
              </p>

              <div className="bg-amber-50 border border-amber-200/60 p-5 rounded-2xl mb-6 shadow-sm">
                 <div className="flex gap-4 items-start text-amber-900">
                    <Clock className="w-6 h-6 shrink-0 mt-0.5 text-amber-600" />
                    <p className="text-sm font-sans leading-relaxed">
                      <strong className="block mb-1 text-amber-950 font-bold">Timing is everything!</strong> 
                      Please let us know <strong className="underline decoration-amber-300 underline-offset-2">30 minutes before your departure</strong> to ensure a prompt pickup so guests don't miss their ride.
                    </p>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => window.open("https://wa.me/306977246788", "_blank")}
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl text-[10px] uppercase font-bold tracking-widest hover:bg-[#20bd5a] transition-colors shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" /> Schedule Pickup
                </button>
                <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface/40">Include payment with luggage</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Luggage Storage Section */}
        <motion.section {...fadeIn} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
           <div className="w-16 h-16 bg-white border border-outline-variant/20 rounded-[1.5rem] flex items-center justify-center shrink-0">
             <Briefcase className="w-8 h-8 text-primary" /> 
           </div>
           
           <div className="text-center md:text-left flex-1">
             <h3 className="text-2xl font-serif mb-2">Luggage Storage</h3>
             <p className="font-sans text-on-surface/70 text-sm leading-relaxed mb-4">
               We do store luggage on checkout only if there is any space left in lockers. WhatsApp us your room number and request a time to drop off your bags.
             </p>
             <button 
                onClick={() => window.open("https://wa.me/306977246788", "_blank")}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-primary-container transition-colors border-b border-primary/20 pb-1"
              >
                <MessageCircle className="w-4 h-4" /> Request Storage
              </button>
           </div>
        </motion.section>

      </div>

      <div className="px-6 pb-16 grid grid-cols-1 gap-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif italic text-center mb-[-1rem]">Transportation</h2>
        
        {/* VIP Transfers Component */}
        <motion.section {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-zinc-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 bg-zinc-50 text-zinc-600 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-200">
              <Car className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-serif">Private Transfers | G2VIP</h3>
                <span className="bg-zinc-100 text-zinc-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-zinc-200">24/7 Service</span>
              </div>
              
              <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                Our hotel collaborates with G2VIP Transfer, a team of professional drivers offering excellent local knowledge and fixed preferential rates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                 <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Port & Airport</h4>
                    <ul className="space-y-2 text-sm font-sans text-on-surface">
                       <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>2–3 persons</span> <strong>€30</strong></li>
                       <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>4–5 persons</span> <strong>€35</strong></li>
                       <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>6–8 persons</span> <strong>€40</strong></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Island Transfers</h4>
                    <ul className="space-y-2 text-sm font-sans text-on-surface">
                       <li className="flex justify-between border-b border-outline-variant/10 pb-2"><span>Up to 8 persons</span> <strong>€40</strong></li>
                    </ul>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => window.open("https://wa.me/306934596482", "_blank")}
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl text-[10px] uppercase font-bold tracking-widest hover:bg-[#20bd5a] transition-colors shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" /> Book G2VIP
                </button>
                <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface/40">+30 693 459 6482</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SeaBus Water Taxi */}
        <motion.section {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center shrink-0 border border-cyan-100">
              <Ship className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-serif">SeaBus Water Taxi</h3>
                <span className="bg-cyan-100 text-cyan-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-cyan-200">€2.50 / Way</span>
              </div>
              
              <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                Connects <strong>New Port (Tourlos)</strong> with <strong>Old Port (Mykonos Town)</strong>. The only motorized transport allowed into the pedestrian waterfront. Much more <em>"Mamma Mia"</em> than a hot bus!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Logistics</h4>
                    <ul className="space-y-2 text-sm font-sans text-on-surface/80">
                       <li className="flex gap-2"><Clock className="w-4 h-4 shrink-0 text-cyan-600"/> <strong>Duration:</strong> 8–15 mins</li>
                       <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 text-cyan-600"/> <strong>Frequency:</strong> Every 30 mins</li>
                       <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-600"/> <strong>Hours:</strong> 08:30 to 23:30 (High Season)</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Why Use It?</h4>
                    <ul className="space-y-2 text-sm font-sans text-on-surface/80 list-disc pl-4">
                       <li>Direct Town Access</li>
                       <li>Handles luggage & strollers</li>
                       <li>Wheelchair Friendly</li>
                       <li>Great Views</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bus Station */}
        <motion.section {...fadeIn} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0 border border-teal-100">
              <Bus className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-serif">Public Buses (KTEL)</h3>
                <span className="bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-teal-200">€1.50 - €2.50</span>
              </div>
              
              <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                Efficient in its own "organized chaos" kind of way. Modern buses with A/C. Much cheaper than a €30+ taxi ride.
              </p>

              <div className="space-y-6">
                 <div className="bg-surface border border-outline-variant/20 p-5 rounded-2xl">
                    <h4 className="text-sm font-bold text-on-surface mb-2">Fabrika Bus Station (South)</h4>
                    <p className="text-xs text-on-surface/70 mb-3">Gateway to the "party" and "resort" beaches. The only station with direct lines to:</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Paradise</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Super Paradise</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Platis Gialos</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Psarou</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Ornos</span>
                        <span className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">Paraga</span>
                    </div>
                 </div>

                 <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl">
                    <div className="flex items-start gap-3">
                       <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                       <div>
                         <h4 className="text-sm font-bold text-amber-900 mb-1">Old Port Bus Station</h4>
                         <p className="text-xs text-amber-800 leading-relaxed">
                           <strong className="block mb-1">Important Note:</strong>
                           If you want to go to <strong className="underline decoration-amber-300">Ano Mera</strong>, <strong className="underline decoration-amber-300">Elia Beach</strong>, or <strong className="underline decoration-amber-300">Kalafatis</strong>, you must go to the Old Port Bus Station (near the SeaBus stop), NOT Fabrika.
                         </p>
                       </div>
                    </div>
                 </div>
              </div>
              
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export function Excursions() {
  const activities = [
    {
      title: "Cooking Class: Mykonian Spiti",
      icon: Utensils,
      description: "The gold standard run by Teta in her traditional home. Learn Spanakopita and Tzatziki, followed by a wine-filled courtyard lunch.",
      perk: "Immersion into Mykonian life",
      alternative: "Alternative: Mykonos Vioma Organic Farm for a 'farm-to-table' vibe with organic wine pairings."
    },
    {
      title: "Hiking Group: Yummy Pedals",
      icon: Mountain,
      description: "Explore the 'Wild North' with guided hikes from Ano Mera to secluded Fokos beach. Discover stone-walled paths and family chapels.",
      perk: "Escape the crowds",
      alternative: "Includes a snack of local graviera cheese and tomatoes."
    },
    {
      title: "Delos Tour: Archaeological Guide",
      icon: Landmark,
      description: "A semi-private guided tour of Delos. A certified professional brings the 'Birthplace of Apollo' to life with stories of mythology.",
      perk: "Avoid massive ferry crowds",
      alternative: "Top Pick: Depart from the Old Port early (~9:00 AM) to beat the midday heat."
    },
    {
      title: "Water Activity at Lia Beach",
      icon: Waves,
      description: "Lia Beach is shielded from heavy winds. Top for water activities like exploring glassfish caves.",
      perk: "The 'Connoisseur's Choice'",
      alternative: "Scuba: GoDive Mykonos (Anna II shipwreck). Kayak: Northern coastline 'secret' caves."
    }
  ];

  const cruises = [
    {
      title: "The Day Cruise ('Discovery' Route)",
      icon: Sun,
      duration: "10:00 AM – 6:00 PM (8 hours)",
      vibe: "Adventurous & Relaxed",
      bestFor: "Snorkeling, Sunbathing, Full Meal",
      route: "Combines the South Coast (Psarou, Paradise, Elia) with a crossing to Rhenia & Delos.",
      activities: "Extended swimming/snorkeling in the 'Blue Lacuna', SUP, and sailing past Delos.",
      food: "Full Mediterranean lunch on board (grilled seafood/pasta, salads).",
      capacity: "Up to 14-15 Guests"
    },
    {
      title: "Sunset & Night Cruise ('Atmosphere' Route)",
      icon: Moon,
      duration: "6:30 PM – 9:30 PM (3 hours)",
      vibe: "Elegant & Atmospheric",
      bestFor: "Romance, Photography, Pre-Dinner Drinks",
      route: "Leisurely cruise toward Little Venice & Windmills. Drop anchor near harbor for sunset.",
      activities: "Golden hour photography, light swimming before dark, lounging with music.",
      food: "Light appetizers (mezes), seasonal fruits, and 'unlimited' local wine/beer/soft drinks.",
      capacity: "Up to 15 Guests"
    }
  ];

  return (
    <div>
      <PageHeader title="Excursions" subtitle="Discover authentic experiences & private cruises" />
      <div className="px-6 py-12 max-w-4xl mx-auto space-y-16">
        
        {/* Island Activities Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8 justify-center">
             <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
               <Compass className="w-6 h-6 text-primary" />
             </div>
             <h2 className="text-3xl font-serif italic text-on-surface">Top Island Activities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, idx) => (
              <motion.div 
                key={activity.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 flex flex-col h-full shadow-sm relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-surface-container-low text-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/10">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif leading-tight">{activity.title}</h3>
                    <span className="inline-block mt-1 bg-amber-50 text-amber-700 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-amber-200/50">
                      Top Pick
                    </span>
                  </div>
                </div>
                
                <p className="text-sm font-sans text-on-surface/80 leading-relaxed mb-4 flex-1">
                  {activity.description}
                </p>
                
                <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 mt-auto">
                   <p className="text-xs font-bold text-primary mb-1">{activity.perk}</p>
                   <p className="text-xs text-on-surface/60 italic leading-relaxed">{activity.alternative}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Private Cruises */}
        <section>
          <div className="flex items-center gap-4 mb-8 justify-center">
             <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
               <Anchor className="w-6 h-6 text-blue-600" />
             </div>
             <h2 className="text-3xl font-serif italic text-on-surface">Private Yacht Cruises</h2>
          </div>

          <div className="space-y-8">
            {cruises.map((cruise, idx) => (
              <motion.div 
                key={cruise.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 shadow-sm relative overflow-hidden"
              >
                {/* Visual Indicator */}
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl pointer-events-none rounded-full opacity-20 ${idx === 0 ? 'bg-amber-400' : 'bg-indigo-500'}`}></div>

                {/* Left Column: Core Identity */}
                <div className="md:w-1/3 shrink-0 relative z-10 border-b md:border-b-0 md:border-r border-outline-variant/10 pb-6 md:pb-0 md:pr-6">
                   <div className="flex items-center gap-3 mb-4">
                     <cruise.icon className={`w-8 h-8 ${idx === 0 ? 'text-amber-500' : 'text-indigo-500'}`} />
                     <h3 className="text-2xl font-serif">{cruise.title}</h3>
                   </div>
                   
                   <div className="space-y-4">
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface/50 mb-1">Duration</p>
                       <div className="flex items-center gap-2 text-sm text-on-surface font-medium">
                         <Clock className="w-4 h-4 text-primary" /> {cruise.duration}
                       </div>
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface/50 mb-1">Vibe & Best For</p>
                       <p className="text-sm text-on-surface bg-surface-container p-2 rounded-lg leading-relaxed"><strong className="text-primary">{cruise.vibe}</strong> — {cruise.bestFor}</p>
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface/50 mb-1">Capacity</p>
                       <div className="flex items-center gap-2 text-sm text-on-surface/80">
                         <Users className="w-4 h-4" /> {cruise.capacity}
                       </div>
                     </div>
                   </div>
                </div>

                {/* Right Column: Details */}
                <div className="md:w-2/3 relative z-10">
                   <div className="space-y-5">
                      <div>
                         <h4 className="text-sm font-bold flex items-center gap-2 mb-2 text-on-surface">
                           <MapPin className="w-4 h-4 text-primary" /> The Route
                         </h4>
                         <p className="text-sm text-on-surface/70 leading-relaxed pl-6">{cruise.route}</p>
                      </div>
                      
                      <div>
                         <h4 className="text-sm font-bold flex items-center gap-2 mb-2 text-on-surface">
                           <Ship className="w-4 h-4 text-primary" /> Activities
                         </h4>
                         <p className="text-sm text-on-surface/70 leading-relaxed pl-6">{cruise.activities}</p>
                      </div>
                      
                      <div>
                         <h4 className="text-sm font-bold flex items-center gap-2 mb-2 text-on-surface">
                           <Utensils className="w-4 h-4 text-primary" /> Food & Drinks
                         </h4>
                         <p className="text-sm text-on-surface/70 leading-relaxed pl-6">{cruise.food}</p>
                      </div>
                   </div>

                   <button 
                      onClick={() => window.open(`https://wa.me/306977246788?text=I'm interested in booking the ${cruise.title}`, "_blank")}
                      className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-on-surface/80 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Enquire Now
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

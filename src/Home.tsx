import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  Car,
  CheckCircle2,
  Briefcase,
  Bus,
  ChevronDown,
  Clock,
  Compass,
  Copy,
  ExternalLink,
  GlassWater,
  Home,
  Info,
  Key,
  MapPin,
  MessageCircle,
  Navigation,
  Palmtree,
  Phone,
  Ship,
  Utensils,
  Wifi,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const wifiNetworks = [
  { rooms: "1, 2, 3, 5", network: "Eleannas1", pass: "eleannas1" },
  { rooms: "4, 12", network: "Eleannas Seaview", pass: "Seaview25" },
  { rooms: "6 & 7", network: "Eleannas Deluxe", pass: "eleannas4" },
  { rooms: "8, 9, 10", network: "Eleannas Studios", pass: "eleannas5" },
  { rooms: "11", network: "Eleannas Home", pass: "eleannas3" },
  { rooms: "14, 16", network: "Vastaous", pass: "sunset2021" },
  { rooms: "15", network: "Dinhouse", pass: "dinhouse1" },
  { rooms: "17, 18", network: "Eleannas View", pass: "eleannas5" }
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hotel");
  const [selectedDiningCategory, setSelectedDiningCategory] = useState("All");
  const [copiedWifi, setCopiedWifi] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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
    const sections = ["hotel", "transfers", "restaurants", "beaches", "bars"];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedWifi(text);
    window.setTimeout(() => setCopiedWifi(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/images/hero.jpg"
            alt="Mykonos View"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface" />
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

      <nav className="sticky top-[68px] z-40 bg-surface-container-lowest/80 backdrop-blur-lg flex overflow-x-auto gap-8 px-8 py-5 no-scrollbar whitespace-nowrap border-b border-outline-variant/10">
        {[
          { label: "Hotel Info", id: "hotel" },
          { label: "Transfers", id: "transfers" },
          { label: "Restaurants", id: "restaurants" },
          { label: "Beaches", id: "beaches" },
          { label: "Bars", id: "bars" }
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-serif text-sm tracking-widest transition-all ${isActive ? "text-primary italic underline underline-offset-8" : "text-on-surface hover:pl-2"}`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <main className="pb-32">
        <section className="px-6 py-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto" id="quick-access">
          {[
            { icon: Wifi, label: "Wifi", id: "hotel" },
            { icon: Info, label: "Hotel Info", id: "hotel" },
            { icon: Car, label: "Transfers", id: "transfers" },
            { icon: Utensils, label: "Restaurants", id: "restaurants" },
            { icon: Palmtree, label: "Beaches", id: "beaches" },
            { icon: GlassWater, label: "Bars", id: "bars" }
          ].map((item) => (
            <motion.a
              key={`${item.label}-${item.id}`}
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

        <section className="py-20 bg-surface-container-low" id="hotel">
          <div className="px-6 mb-12 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Hotel Info</h3>
              <p className="font-sans text-on-surface/60 text-sm max-w-2xl leading-relaxed">
                Your stay essentials live here first, from Wi-Fi and housekeeping to the fastest way to reach us.
              </p>
            </motion.div>
          </div>

          <div className="px-6 max-w-5xl mx-auto space-y-8">
            <motion.div
              {...fadeIn}
              className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2">Wifi First</p>
                  <h4 className="text-3xl font-serif mb-2">Get Connected</h4>
                  <p className="text-sm text-on-surface/60 font-sans">
                    Find your room number below and tap the password icon to copy it.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wifiNetworks.map((net) => (
                  <div key={net.rooms} className="p-4 border border-outline-variant/20 rounded-2xl bg-surface">
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">Room {net.rooms}</p>
                    <div className="flex justify-between items-center mb-2 gap-4">
                      <span className="text-xs font-medium text-on-surface/60">Network</span>
                      <span className="text-sm font-bold text-right">{net.network}</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-xs font-medium text-on-surface/60">Password</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono bg-on-surface/5 px-2 py-0.5 rounded">{net.pass}</span>
                        <button
                          onClick={() => void handleCopy(net.pass)}
                          className="p-1.5 hover:bg-on-surface/10 rounded-md transition-colors"
                          title="Copy Password"
                        >
                          {copiedWifi === net.pass ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-on-surface/40" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
              <motion.div
                {...fadeIn}
                className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-2">Stay Essentials</h4>
                    <p className="text-sm text-on-surface/60 font-sans">
                      The key details guests ask for most often, all on the landing page.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Key, label: "Check-In / Out", value: "3:00 PM / 11:00 AM" },
                    { icon: Clock, label: "Housekeeping", value: "Daily from 11:00 AM to 3:00 PM" },
                    { icon: Phone, label: "Concierge", value: "+306977246788" },
                    { icon: AlertCircle, label: "Emergency", value: "112 / 166 / Police 100" }
                  ].map((item) => (
                    <div key={item.label} className="p-5 rounded-2xl bg-surface border border-outline-variant/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50">{item.label}</p>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeIn}
                className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10 flex flex-col justify-between"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Need Something?</p>
                  <h4 className="text-2xl font-serif mb-3">Message the hotel team</h4>
                  <p className="text-sm text-on-surface/60 font-sans leading-relaxed mb-6">
                    Housekeeping preferences, storage questions, or arrival help can all be handled directly on WhatsApp.
                  </p>
                </div>
                <button
                  onClick={() => window.open("https://wa.me/306977246788", "_blank")}
                  className="w-full bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" /> Contact Concierge
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low" id="transfers">
          <div className="px-6 mb-16 max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Transfers</h3>
              <p className="font-sans text-on-surface/60 text-sm max-w-md">
                Seamless movement across the island, plus laundry, luggage help, and the practical transport notes guests actually need.
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
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-3xl font-serif">Private Transfers | G2VIP</h4>
                  <span className="bg-zinc-100 text-zinc-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-zinc-200">
                    24/7 Service
                  </span>
                </div>
                <p className="text-base text-on-surface/60 mb-4 max-w-2xl leading-relaxed">
                  Our hotel works with G2VIP Transfer, a professional driver team with strong local knowledge and fixed preferential rates.
                </p>
                <p className="text-base text-on-surface/60 mb-10 max-w-2xl leading-relaxed">
                  Contact the driver directly on WhatsApp for pricing, pickup details, and arrangements.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface/40 font-bold mb-1">Direct Driver Contact</span>
                    <span className="text-2xl font-serif">00306977246 788</span>
                  </div>
                  <button
                    onClick={() => window.open("https://wa.me/00306977246788", "_blank")}
                    className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" /> Contact Driver
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <Info className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-3xl font-serif">Fresh & Clean</h4>
                      <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-blue-200">
                        EUR 1 / Item
                      </span>
                    </div>
                    <p className="text-on-surface/70 font-sans leading-relaxed mb-6">
                      Laundry is available for wash and dry at EUR 1 per item.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Pack your clothes into the designated laundry bag.",
                        "Place the exact change inside the bag.",
                        "Leave the bag by your door inside your room for morning pickup.",
                        "Laundry is returned the following morning."
                      ].map((step) => (
                        <div key={step} className="flex gap-3 text-sm font-sans text-on-surface/80 leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div className="p-8 bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-sm" {...fadeIn}>
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                  <Ship className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h5 className="font-serif text-2xl">SeaBus Water Taxi</h5>
                  <span className="bg-cyan-100 text-cyan-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-cyan-200">
                    EUR 2.50 / Way
                  </span>
                </div>
                <p className="text-sm text-on-surface/70 mb-6 leading-relaxed">
                  Connects New Port with Old Port and is the easiest way into the pedestrian waterfront.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h6 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Logistics</h6>
                    <div className="space-y-2 text-sm font-sans text-on-surface/80">
                      <div className="flex gap-2"><Clock className="w-4 h-4 shrink-0 text-cyan-600" /> <strong>Duration:</strong> 8-15 mins</div>
                      <div className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 text-cyan-600" /> <strong>Frequency:</strong> Every 30 mins</div>
                      <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-600" /> <strong>Hours:</strong> 08:30 to 23:30</div>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/50 mb-3">Why Use It</h6>
                    <div className="space-y-2 text-sm font-sans text-on-surface/80">
                      {["Direct Town Access", "Handles luggage and strollers", "Wheelchair Friendly", "Great Views"].map((item) => (
                        <div key={item} className="flex gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => window.open("https://mykonos-seabus.gr/", "_blank")}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all inline-block"
                >
                  Schedule
                </button>
              </motion.div>

              <motion.div className="p-8 bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-sm" {...fadeIn}>
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <Bus className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h5 className="font-serif text-2xl">Public Buses (KTEL)</h5>
                  <span className="bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-teal-200">
                    EUR 1.50 - EUR 2.50
                  </span>
                </div>
                <p className="text-sm text-on-surface/70 mb-6 leading-relaxed">
                  Modern buses with A/C and much lower cost than private cars for beach and village routes.
                </p>
                <div className="space-y-5 mb-6">
                  <div className="bg-surface border border-outline-variant/20 p-5 rounded-2xl">
                    <h6 className="text-sm font-bold text-on-surface mb-2">Fabrika Bus Station (South)</h6>
                    <p className="text-xs text-on-surface/70 mb-3">Direct lines for Paradise, Super Paradise, Platis Gialos, Psarou, Ornos, and Paraga.</p>
                    <div className="flex flex-wrap gap-2">
                      {["Paradise", "Super Paradise", "Platis Gialos", "Psarou", "Ornos", "Paraga"].map((stop) => (
                        <span key={stop} className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded border border-teal-100/50">{stop}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-sm font-bold text-amber-900 mb-1">Old Port Bus Station</h6>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          For Ano Mera, Elia Beach, or Kalafatis, use the Old Port Bus Station near the SeaBus stop, not Fabrika.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => window.open("https://mykonosbus.com/language/el/dromologia/", "_blank")}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all inline-block"
                >
                  Timetable
                </button>
              </motion.div>
            </div>
          </div>
        </section>

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
                className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${selectedDiningCategory === cat ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" : "bg-surface-container-high text-on-surface/60 hover:bg-surface-container-low"}`}
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
                img: "/images/m-eating.jpeg"
              },
              {
                name: "Zuma",
                tag: "International",
                desc: "Contemporary Japanese cuisine with breathtaking pool and sunset views.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCspht6a0wlWESDlzmg8VyytQI59yh779Xd0KWIo4yMeYZ8kyH_ZWDcSIbRIPTaS3hv_ezC8h9rogIaKwY9g5JcB2YozL91lkMflFnsD6MQU8135Vm3Y6DiUHpN6JUTk1fpw_GAq9vC6ZSCe4Xy-RE2ncYkq1VWAZGbMlcG5OaLBMZJeDIah0zlGALLNQLLf5jmkDtFNQ0whkZJzZYQdn15DoUBxLOZ7uMGSKmNnMGGAN6dUOC2sZqpYohL1OUCSyUEge5pKkzNuwI"
              },
              {
                name: "Lalala",
                tag: "Traditional",
                desc: "A cozy local favorite with authentic island flavors and relaxed Mykonian atmosphere.",
                img: "https://picsum.photos/seed/lalala/800/600"
              },
              {
                name: "Souvlaki Story",
                tag: "Quick Bites",
                desc: "The best traditional gyros and souvlaki in Chora, perfect for a fast island meal.",
                img: "/images/souvlaki-story.jpeg"
              }
            ]
              .filter((rest) => selectedDiningCategory === "All" || rest.tag === selectedDiningCategory)
              .map((rest) => (
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
            {["Noema", "To Maereio", "Bakalo", "Lalala"].map((other) => (
              <div key={other} className="min-w-[240px] p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/5">
                <h5 className="font-serif text-lg mb-2">{other}</h5>
                <p className="text-[11px] text-on-surface/50 mb-4">Authentic Cycladic flavors and atmosphere</p>
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

        <section className="py-24" id="beaches">
          <div className="px-6 mb-16 max-w-5xl mx-auto flex justify-between items-end">
            <motion.div {...fadeIn}>
              <h3 className="text-4xl font-serif italic mb-4">Explore</h3>
              <p className="font-sans text-on-surface/60 text-sm">Uncover the soul of the Cyclades.</p>
            </motion.div>
            <Compass className="w-12 h-12 text-primary/20 hidden sm:block" />
          </div>

          <div className="px-6 space-y-24 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl" {...fadeIn}>
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
              <motion.div className="w-full md:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl" {...fadeIn}>
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
                name: "180 Sunset Bar",
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
      </main>
    </div>
  );
}

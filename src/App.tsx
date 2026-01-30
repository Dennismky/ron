import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Wrench,
  Home,
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Star,
  ArrowRight,
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Counter Animation Component
function CountUpAnimation({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, hasAnimated]);

  return <span>{count}{suffix}</span>;
}

export default function App() {
  const [activeService, setActiveService] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: "Installations",
      desc: "Fixtures, appliances, doors, and hardware installed professionally.",
      details: "We handle all types of installations from ceiling fans to garbage disposals, ensuring everything is mounted securely and works perfectly.",
    },
    {
      icon: Home,
      title: "Maintenance & Repairs",
      desc: "General home repairs and preventative maintenance.",
      details: "Keep your home in top shape with regular maintenance. We fix squeaky doors, loose handles, and perform seasonal checkups.",
    },
    {
      icon: Droplets,
      title: "Plumbing",
      desc: "Leaks, faucets, toilets, and small plumbing jobs.",
      details: "From dripping faucets to toilet repairs, we handle common plumbing issues quickly and affordably.",
    },
    {
      icon: Zap,
      title: "Electrical",
      desc: "Outlets, switches, lighting, and minor electrical work.",
      details: "Safe and code-compliant electrical work including outlet installation, switch replacement, and fixture upgrades.",
    },
    {
      icon: Paintbrush,
      title: "Drywall & Painting",
      desc: "Patchwork, wall repairs, and interior painting.",
      details: "Expert drywall repair and smooth, professional painting that transforms your space.",
    },
    {
      icon: Hammer,
      title: "Carpentry",
      desc: "Trim, shelving, doors, and custom woodwork.",
      details: "Quality carpentry including custom shelving, trim installation, door hanging, and decorative woodwork.",
    },
  ];

  const projects = [
    { src: "/floor1.jpeg", label: "Bathroom Floor Repair - Before", category: "Repairs" },
    { src: "/floor6.jpeg", label: "Bathroom Floor Repair - Complete", category: "Repairs" },
    { src: "/sink-installation.jpeg", label: "Sink Installation - Cedar Rapids, IA", category: "Plumbing" },
    { src: "/fireplace.jpeg", label: "Outdoor Fireplace Installation", category: "Installations" },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      location: "Ames, IA",
      text: "Ron repaired our drywall and repainted the living room. Clean work and very professional.",
      rating: 5,
    },
    {
      name: "Mark T.",
      location: "Ankeny, IA",
      text: "On time, fair pricing, and solid craftsmanship. Highly recommend.",
      rating: 5,
    },
    {
      name: "Linda S.",
      location: "Boone, IA",
      text: "Quick plumbing fix and explained everything clearly. Will call again.",
      rating: 5,
    },
    {
      name: "David K.",
      location: "Nevada, IA",
      text: "Excellent carpentry work on our custom shelving. Exactly what we wanted.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How much do you charge?",
      answer: "Our rates are competitive and transparent. We charge $65/hour for most handyman services, with free estimates for larger projects. We'll always provide a clear quote before starting work.",
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes! We offer free, no-obligation quotes for all projects. Simply call us or fill out the contact form, and we'll schedule a time to assess your needs.",
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Ames, Ankeny, Boone, Nevada, Huxley, Story City, and surrounding areas in central Iowa. Contact us if you're unsure whether we cover your location.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed and carry comprehensive liability insurance for your peace of mind and protection.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most small jobs can be scheduled within 2-3 days. Larger projects depend on scope and materials, but we always work to accommodate your timeline.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Your satisfaction is our priority. We stand behind our work 100% and will make it right if you're not completely happy with the results.",
    },
  ];

  const categories = ["All", "Repairs", "Plumbing", "Installations"];

  const filteredProjects = filterCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .hero-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.85) 0%, rgba(59, 130, 246, 0.75) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .trust-badge {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }
        
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .btn-glow:hover {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        
        .floating-action-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .decorative-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: blob 7s infinite;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-lg">
              <img src="/ronlogo.jpg" alt="Ron Handyman Logo" className="h-12 w-auto opacity-90" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">Ron the Handyman</h1>
              <p className="text-xs text-slate-600 hidden sm:block">Professional. Reliable. Local.</p>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition">Services</a>
            <a href="#gallery" className="text-slate-700 hover:text-blue-600 font-medium transition">Projects</a>
            <a href="#reviews" className="text-slate-700 hover:text-blue-600 font-medium transition">Reviews</a>
            <a href="#faq" className="text-slate-700 hover:text-blue-600 font-medium transition">FAQ</a>
            <a href="#contact" className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg hover:bg-yellow-500 font-semibold transition btn-glow">
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200"
            >
              <div className="flex flex-col p-4 space-y-3">
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium py-2">Services</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium py-2">Projects</a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium py-2">Reviews</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-blue-600 font-medium py-2">FAQ</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-yellow-400 text-slate-900 px-5 py-3 rounded-lg hover:bg-yellow-500 font-semibold transition text-center">
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero with Video Background */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Video Background (placeholder - replace with actual video) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 noise-bg">
          {/* If you have a video, use: <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30"><source src="/hero-video.mp4" type="video/mp4" /></video> */}
        </div>
        <div className="hero-video-overlay" />
        
        <div className="hero-content max-w-6xl mx-auto px-4 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Award, text: "10+ Years Experience" },
                { icon: CheckCircle, text: "Satisfaction Guaranteed" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="trust-badge flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
                >
                  <badge.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-800">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Your Trusted Home<br />
              <span className="gradient-text">Repair Expert</span> in Iowa
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 text-blue-50"
            >
              Quality repairs, honest pricing, and dependable service
            </motion.p>

            {/* Service Highlights Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-lg mb-10 text-white"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Reliable Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Fair Pricing</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:4806693825"
                className="group flex items-center justify-center gap-3 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl hover:bg-yellow-500 transition transform hover:scale-105 font-bold text-lg shadow-xl btn-glow"
              >
                <Phone className="w-6 h-6" />
                Call Now: 480-669-3825
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-xl hover:bg-white/30 transition transform hover:scale-105 font-bold text-lg shadow-xl"
              >
                <Mail className="w-6 h-6" />
                Request Quote
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="decorative-blob absolute top-20 left-10 w-64 h-64 bg-blue-400" style={{ animationDelay: '0s' }} />
        <div className="decorative-blob absolute bottom-20 right-10 w-80 h-80 bg-yellow-300" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Ron the Handyman?</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Quality workmanship, honest pricing, and a commitment to your satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Fully licensed and insured for your complete peace of mind and protection"
              },
              {
                icon: Award,
                title: "Expert Craftsmanship",
                desc: "Over 10 years of experience delivering quality work on every project"
              },
              {
                icon: CheckCircle,
                title: "Satisfaction Guaranteed",
                desc: "We stand behind our work 100% and ensure you're completely happy"
              },
              {
                icon: Clock,
                title: "Reliable & On-Time",
                desc: "We respect your time and always show up when we say we will"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg float-animation" style={{ animationDelay: `${i * 0.2}s` }}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {[
              { number: "500+", label: "Projects Completed", suffix: "" },
              { number: "10", label: "Years Experience", suffix: "+" },
              { number: "100", label: "Satisfaction Rate", suffix: "%" },
              { number: "24", label: "Hour Response", suffix: "hr" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  <CountUpAnimation end={parseInt(stat.number)} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From small fixes to major projects, we handle it all with expertise and care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isExpanded = activeService === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="service-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
                  onClick={() => setActiveService(isExpanded ? null : i)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon
                      className={`w-10 h-10 text-yellow-500 transition-transform duration-300 ${
                        isExpanded ? "scale-110 rotate-12" : ""
                      }`}
                    />
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-slate-800">{s.title}</h4>
                  <p className="text-slate-600 mb-3">{s.desc}</p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-slate-200 mt-3">
                          <p className="text-slate-700 mb-4">{s.details}</p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                          >
                            Book This Service <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={`mt-4 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full transition-all duration-300 ${
                      isExpanded ? "w-full" : "w-0"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery with Filter */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h3>
            <p className="text-xl text-slate-600 mb-8">
              Real work completed in Cedar Rapids and surrounding Iowa communities
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold transition ${
                    filterCategory === cat
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((img, i) => (
                <motion.div
                  key={img.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div className="aspect-[4/3] bg-slate-200">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-xs font-bold mb-2">
                        {img.category}
                      </span>
                      <p className="font-bold text-lg">{img.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full transition z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full transition z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredProjects[lightboxIndex].src}
                alt={filteredProjects[lightboxIndex].label}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {filteredProjects[lightboxIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Carousel */}
      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">What Iowa Clients Say</h3>
            <p className="text-xl text-slate-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-3xl shadow-xl max-w-3xl mx-auto"
              >
                <div className="flex gap-2 mb-6 justify-center">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, j) => (
                    <Star key={j} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl italic text-slate-700 mb-6 text-center leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-xl text-slate-800">{testimonials[currentTestimonial].name}</p>
                  <p className="text-slate-600 flex items-center justify-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === currentTestimonial ? "bg-blue-600 w-8" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-slate-600">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h4 className="font-bold text-lg text-slate-800 pr-4">{faq.question}</h4>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-500 flex-shrink-0 transition-transform ${
                      expandedFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h3>
            <p className="text-xl text-blue-100">
              Ready to get started? Reach out today for a free, no-obligation estimate.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                
                <div className="space-y-5">
                  <a href="tel:4806693825" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition group">
                    <div className="bg-yellow-400 p-3 rounded-lg group-hover:scale-110 transition">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Call or Text</p>
                      <p className="text-xl font-bold">480-669-3825</p>
                    </div>
                  </a>

                  <a href="mailto:ronhandyman3@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition group">
                    <div className="bg-yellow-400 p-3 rounded-lg group-hover:scale-110 transition">
                      <Mail className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email Us</p>
                      <p className="text-lg font-bold">ronhandyman3@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Business Hours</p>
                      <p className="text-lg font-bold">Mon-Fri: 8am-6pm</p>
                      <p className="text-sm text-blue-200">Sat: 9am-4pm • Sun: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl">
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Service Area</p>
                      <p className="text-lg font-bold">Cedar Rapids, IA</p>
                      <p className="text-sm text-blue-200">2410 River Bluffs Dr NW Apt 302</p>
                      <p className="text-sm text-blue-200">Cedar Rapids, IA 52405</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Messaging */}
              <div>
                <h5 className="font-bold text-lg mb-4">Connect With Us</h5>
                <div className="flex gap-4">
                  <a href="https://facebook.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur hover:bg-white/20 rounded-xl transition">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/14806693825" target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 hover:bg-green-600 rounded-xl transition">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Service Area Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white/10 backdrop-blur rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">Serving Cedar Rapids & Surrounding Areas</h4>
              <p className="text-blue-100 mb-4">
                Cedar Rapids • Marion • Hiawatha • Iowa City • Coralville & More
              </p>
            </div>
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3976682853644!2d-91.72516842344678!3d42.04444597122096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e4f2b1f8e8e8e9%3A0x1234567890abcdef!2s2410%20River%20Bluffs%20Dr%20NW%20%23302%2C%20Cedar%20Rapids%2C%20IA%2052405!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md border-t border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-1 rounded-lg">
                  <img src="/ronlogo.jpg" alt="Ron Handyman Logo" className="h-12 w-auto opacity-90" />
                </div>
                <div>
                  <h4 className="text-slate-800 text-xl font-bold">Ron the Handyman</h4>
                  <p className="text-sm text-slate-600">Your local home repair expert</p>
                </div>
              </div>
              <p className="text-sm italic mb-2 text-slate-600">Your satisfaction is our goal.</p>
              <p className="text-sm font-semibold text-blue-600">Top quality and best prices guaranteed.</p>
            </div>

            <div>
              <h5 className="text-slate-800 font-bold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-700 hover:text-blue-600 transition">Services</a>
                <a href="#gallery" className="block text-slate-700 hover:text-blue-600 transition">Projects</a>
                <a href="#reviews" className="block text-slate-700 hover:text-blue-600 transition">Reviews</a>
                <a href="#faq" className="block text-slate-700 hover:text-blue-600 transition">FAQ</a>
                <a href="#contact" className="block text-slate-700 hover:text-blue-600 transition">Contact</a>
              </div>
            </div>

            <div>
              <h5 className="text-slate-800 font-bold mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4" />
                  <a href="tel:4806693825" className="hover:text-blue-600 transition">480-669-3825</a>
                </p>
                <p className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:ronhandyman3@gmail.com" className="hover:text-blue-600 transition">ronhandyman3@gmail.com</a>
                </p>
                <p className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4" />
                  Mon-Fri: 8am-6pm
                </p>
                <p className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4" />
                  Cedar Rapids, IA
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 text-center md:text-left">
              © 2026 Ron Handyman Services · Licensed & Insured · Iowa, USA
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ronhandyman" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button - Call Now */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.a
            href="tel:4806693825"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="floating-action-button flex items-center gap-3 bg-yellow-400 text-slate-900 px-6 py-4 rounded-full hover:bg-yellow-500 font-bold transition btn-glow"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call Now</span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
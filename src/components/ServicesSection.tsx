import { Monitor, Code, Wrench, Cpu, ShieldCheck, Headphones } from "lucide-react";

const services = [
  { icon: Monitor, title: "Electronics Sales", desc: "Laptops, desktops, smartphones, tablets, and accessories from top brands at competitive prices." },
  { icon: Code, title: "Software Solutions", desc: "Licensed software, custom installations, and enterprise solutions tailored to your business." },
  { icon: Wrench, title: "Repair & Maintenance", desc: "Expert diagnostics and repair for all electronics. Fast turnaround with quality guarantees." },
  { icon: Cpu, title: "IT Infrastructure", desc: "Network setup, server installation, and complete IT infrastructure for businesses of all sizes." },
  { icon: ShieldCheck, title: "Security Systems", desc: "CCTV, access control, and alarm systems. Protect what matters most with cutting-edge tech." },
  { icon: Headphones, title: "Tech Support", desc: "24/7 technical support and consultation. We're always here when you need us." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive electronics and software solutions under one roof.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:glow-primary transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

import { Wrench, Hammer, HardHat, Zap, PaintBucket, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Wrench, title: "Power Tools", desc: "Drills, grinders, saws, and sanders from top brands. Built tough for professional and home use." },
  { icon: Hammer, title: "Hand Tools", desc: "Hammers, wrenches, pliers, screwdrivers, and more. Premium quality tools that last a lifetime." },
  { icon: HardHat, title: "Safety Equipment", desc: "Helmets, gloves, goggles, boots, and protective gear. Keep your team safe on every job site." },
  { icon: Zap, title: "Electrical Supplies", desc: "Wiring, switches, panels, and electrical accessories for residential and commercial projects." },
  { icon: PaintBucket, title: "Paint & Finishes", desc: "Interior and exterior paints, brushes, rollers, and finishing supplies for perfect results." },
  { icon: Truck, title: "Delivery Service", desc: "Fast and reliable delivery across Kigali. Bulk orders? We bring the tools right to your site." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Products & Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need for construction, renovation, and maintenance — all under one roof.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:glow-primary transition-all duration-700 group hover-scale ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
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
};

export default ServicesSection;

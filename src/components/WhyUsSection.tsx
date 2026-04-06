import { Award, Clock, Users, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Quality", desc: "All products are genuine and backed by manufacturer warranties.", stat: "100%" },
  { icon: Clock, title: "Fast Delivery", desc: "Same-day delivery in Kigali. Quick turnaround on all services.", stat: "24h" },
  { icon: Users, title: "Expert Team", desc: "Skilled technicians with years of experience in electronics and IT.", stat: "10+" },
  { icon: ThumbsUp, title: "Happy Clients", desc: "Trusted by hundreds of businesses and individuals across Rwanda.", stat: "500+" },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The WOKPICK Advantage</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">We don't just sell electronics — we build lasting relationships through trust and quality.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl gradient-card border border-border flex items-center justify-center mx-auto mb-4">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-gradient mb-1">{r.stat}</div>
            <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

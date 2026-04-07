import { Award, Clock, Users, ThumbsUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Award, title: "Genuine Products", desc: "All tools and hardware are original, brand-certified, and built to last.", stat: "100%" },
  { icon: Clock, title: "Fast Delivery", desc: "Same-day delivery in Kigali. Quick service on all orders.", stat: "24h" },
  { icon: Users, title: "Expert Advice", desc: "Our team knows tools inside and out — we help you pick the right one.", stat: "15+" },
  { icon: ThumbsUp, title: "Trusted by Pros", desc: "Contractors, builders, and businesses across Rwanda rely on IMARA Tools.", stat: "1000+" },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The IMARA Advantage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We don't just sell tools — we equip you for success with quality, expertise, and reliability.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-card border border-border flex items-center justify-center mx-auto mb-4 hover-scale">
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
};

export default WhyUsSection;

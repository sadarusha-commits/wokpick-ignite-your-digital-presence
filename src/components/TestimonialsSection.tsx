import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";

const testimonials = [
  {
    name: "Jean-Pierre Habimana",
    role: "Site Foreman, BuildRight Ltd",
    image: person1,
    text: "IMARA Tools is our go-to supplier. The quality of their power tools is unmatched, and delivery is always on time. Highly recommend!",
  },
  {
    name: "Grace Uwimana",
    role: "Interior Designer",
    image: person2,
    text: "I've been sourcing paint and finishing tools from IMARA for over 2 years. Their product range and customer service are simply the best in Kigali.",
  },
  {
    name: "Patrick Ndayisaba",
    role: "Electrical Contractor",
    image: person3,
    text: "From wiring supplies to safety gear, IMARA Tools has everything I need. Great prices, genuine products, and the team really knows their stuff.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by professionals across Rwanda.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`gradient-card border border-border rounded-2xl p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

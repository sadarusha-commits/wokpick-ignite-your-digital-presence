import { Phone, MapPin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`gradient-card border border-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Build</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Whether you need a single tool or supplies for an entire project, IMARA Tools has you covered. Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="tel:+250787770451"
                className="gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call +250 787 770 451
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">Gisozi, Gakinjiro, Kigali, Rwanda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

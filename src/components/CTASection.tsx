import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="gradient-card border border-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Power Up</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Whether you need a single device or a complete IT overhaul, WOKPICK has you covered. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+250781276077"
              className="gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call +250 781 276 077
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:sadarusha@gmail.com"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-secondary/80 transition-colors border border-border"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Kicukiro, Sonatube KN 869, Kigali, Rwanda</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

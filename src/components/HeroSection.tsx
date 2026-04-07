import { useState } from "react";
import { Send, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="IMARA Tools Hardware Store" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              Gisozi, Gakinjiro
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quality <span className="text-gradient">Tools</span> &amp; <span className="text-accent">Hardware</span> You Can Trust
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Power tools, hand tools, construction supplies, and safety equipment. IMARA Tools delivers strength and reliability for every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:+250787770451" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" /> +250 787 770 451
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="gradient-card border border-border rounded-2xl p-6 md:p-8 glow-primary">
              <h3 className="font-display text-xl font-semibold mb-1">Get a Free Quote</h3>
              <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="font-display text-lg font-semibold">Message Sent!</p>
                  <p className="text-sm text-muted-foreground">We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what tools or hardware you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full gradient-cta text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

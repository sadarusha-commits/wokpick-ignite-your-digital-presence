import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            <span className="text-gradient">IMARA</span>{" "}
            <span className="text-accent">Tools</span>
          </h3>
          <p className="text-sm text-muted-foreground">Your trusted partner for quality tools and hardware in Rwanda.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Why Us", "Gallery", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:+250787770451" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" /> +250 787 770 451</a>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Gisozi, Gakinjiro</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} IMARA Tools. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

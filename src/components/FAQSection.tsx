import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What brands do you carry?", a: "We carry top brands including HP, Dell, Lenovo, Apple, Samsung, and many more. All products are genuine with manufacturer warranties." },
  { q: "Do you offer installation services?", a: "Yes! We provide full installation for all electronics, software, security systems, and IT infrastructure. Our team handles everything from setup to configuration." },
  { q: "What's your warranty policy?", a: "All products come with manufacturer warranty. We also offer extended warranty options and our own service guarantee on repairs and installations." },
  { q: "Do you deliver across Rwanda?", a: "We offer same-day delivery within Kigali and next-day delivery to most locations across Rwanda. Shipping costs vary by location." },
  { q: "Can you handle bulk/corporate orders?", a: "Absolutely! We specialize in corporate and institutional orders. Contact us for custom quotes and bulk pricing discounts." },
  { q: "Do you provide after-sales support?", a: "Yes, we offer comprehensive after-sales support including technical assistance, maintenance, and troubleshooting. Reach us anytime at +250 781 276 077." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Got Questions?</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:glow-primary transition-all"
          >
            <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-primary py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

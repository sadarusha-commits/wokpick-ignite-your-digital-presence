import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What brands do you carry?", a: "We stock top brands including Bosch, DeWalt, Makita, Stanley, and more. All products are genuine with manufacturer warranties." },
  { q: "Do you offer bulk pricing for contractors?", a: "Yes! We offer competitive bulk pricing for contractors and businesses. Contact us for custom quotes on large orders." },
  { q: "Can I get tools delivered to my site?", a: "Absolutely. We offer same-day delivery within Kigali and can arrange delivery to construction sites across Rwanda." },
  { q: "Do you provide after-sales support?", a: "Yes, all our tools come with warranty support. We also offer repair services and spare parts for major brands." },
  { q: "What payment methods do you accept?", a: "We accept cash, mobile money (MTN MoMo, Airtel Money), bank transfers, and card payments." },
  { q: "Do you have a return policy?", a: "Yes, we accept returns within 7 days for unused items in original packaging. Defective products are covered under warranty." },
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

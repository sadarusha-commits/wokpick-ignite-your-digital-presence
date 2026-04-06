import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Circuit board close-up" },
  { src: gallery2, alt: "Tech workspace setup" },
  { src: gallery3, alt: "Server room" },
  { src: gallery4, alt: "Electronics repair" },
  { src: gallery5, alt: "Network infrastructure" },
  { src: gallery6, alt: "Electronics showroom" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Work</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse into our world of electronics and technology.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={640}
              height={640}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-sm font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

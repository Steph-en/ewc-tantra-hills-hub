
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SlideType = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

const slides: SlideType[] = [
  {
    type: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-church-with-large-chandeliers-and-stained-glass-windows-35682-large.mp4",
    title: "Welcome to Empowerment Worship Center",
    description: "Tantra Hills Campus",
    buttonText: "Join Us",
    buttonLink: "#events",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/uhzjjlf89dgabt6qxddd",
    alt: "Church interior",
    title: "Experience God's Presence",
    description: "Join us for worship every Sunday",
    buttonText: "Service Times",
    buttonLink: "#events",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/svjt50wu2bfz40aues6a",
    alt: "Church interior",
    title: "Maiden Service Coming Soon",
    description: "June 2025 - Be part of history",
    buttonText: "Learn More",
    buttonLink: "#events",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideInterval = 7000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute h-full inset-0 transition-opacity duration-1000 
                      ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt || ""}
                className="hero-bg object-cover"
              />
            ) : (
              <video
                src={slide.src}
                className="hero-bg object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            )}
            <div className="hero-content px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                {slide.buttonText && (
                  <Button
                    size="lg"
                    className="bg-burgundy hover:bg-burgundy/80 text-white px-8 py-6 text-lg"
                    asChild
                  >
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full z-20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full z-20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-burgundy scale-125" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

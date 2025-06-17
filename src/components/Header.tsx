import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DonateModal } from "./DonateModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-accent dark:text-white">
              EWC
            </span>
            <span className={`font-medium ${isScrolled || mobileMenuOpen ? 'text-foreground' : 'text-white'}`}>
              Tantra Hills
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#" onClick={(e) => scrollToSection(e, "hero")} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-accent dark:hover:text-gray-300 transition-colors`}>
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, "about")} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-accent dark:hover:text-gray-300 transition-colors`}>
                About
              </a>
              <a href="#events" onClick={(e) => scrollToSection(e, "events")} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-accent dark:hover:text-gray-300 transition-colors`}>
                Events
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-accent dark:hover:text-gray-300 transition-colors`}>
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* <ThemeToggle /> */}
              {/* <DonateModal /> */}
            </div>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background dark:bg-background rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#" onClick={(e) => scrollToSection(e, "hero")} className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#events" onClick={(e) => scrollToSection(e, "events")} className="text-foreground hover:text-accent transition-colors">
                Events
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <DonateModal className="w-full" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

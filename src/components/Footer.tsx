
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-burgundy">EWC</span>
              <span className="font-medium">Tantra Hills</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowerment Worship Center Tantra Hills Campus is dedicated to transforming lives 
              through the word of God and building a community of believers who impact their world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-burgundy hover:bg-burgundy/80 text-white p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-burgundy hover:bg-burgundy/80 text-white p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-burgundy hover:bg-burgundy/80 text-white p-2 rounded-full"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Tantra Hills, Accra, Ghana</p>
              <p>+233 20 123 4567</p>
              <p>tantrahills@empowermentworshipcenter.org</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Empowerment Worship Center - Tantra Hills Campus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

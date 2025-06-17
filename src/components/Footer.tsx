
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { DonateModal } from "./DonateModal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">EWC</span>
              <span className="font-medium">Tantra Hills</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowerment Worship Center Tantra Hills Campus is dedicated to transforming lives 
              through the word of God and building a community of believers who impact their world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/ewctantrahillscampus/"
                className="bg-accent hover:bg-accent/80 text-white p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ewctantrahillscampus/"
                className="bg-accent hover:bg-accent/80 text-white p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ewc.tantra.hills?lang=en"
                className="bg-accent hover:bg-accent/80 text-white p-2 rounded-full"
                aria-label="YouTube"
              >
                <FaTiktok className="h-5 w-5" />
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
              {/* <li className="pt-2"><DonateModal /></li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Tantra Hill, Accra, Ghana</p>
              <p>+233 59 353 9507</p>
              <p>ewctantrahills@gmail.com</p>
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

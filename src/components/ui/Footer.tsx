import React from "react";

import {
  Facebook,
  Instagram,
  MessageSquare,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 font-sans">
      <div className="container mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="w-full">
            <div className="flex items-center gap-3 mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nigeria Association of Computing Students, Lagos State University
              Chapter - Connecting Computer Science students with academic and
              tech resources.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-green-600"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-green-600"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-gray-600 hover:text-green-600"
              >
                <MessageSquare size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  Communities
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span>Faculty of Science, LASU Ojo Campus</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:info@nacoslasu.org"
                  className="hover:text-green-600"
                >
                  info@nacoslasu.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+2348012345678" className="hover:text-green-600">
                  +234 801 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 NACOS-LASU. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

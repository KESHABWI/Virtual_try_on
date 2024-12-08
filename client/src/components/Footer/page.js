"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 shadow-lg border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Glamorize */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              About Glamorize
            </h2>
            <p className="text-gray-400">
              Elevate your style and confidence with Glamorize. We provide
              personalized fashion advice and styling services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h2>
            <p>123 Fashion Street</p>
            <p>Styleville, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@glamorize.com</p>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Glamorize. All rights reserved.</p>
        </div>
      </div>

      {/* Auth Buttons */}

    </footer>
  );
};

export default Footer;

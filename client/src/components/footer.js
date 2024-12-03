import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer=()=> {
  return (
    <footer className="bg-sky-100 text-sky-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Glamorize</h2>
            <p className="text-sky-600">
              Elevate your style and confidence with Glamorize. We provide
              personalized fashion advice and styling services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-sky-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-900">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <p>123 Fashion Street</p>
            <p>Styleville, ST 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@glamorize.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-700 hover:text-sky-900">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-sky-700 hover:text-sky-900">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-sky-700 hover:text-sky-900">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-sky-700 hover:text-sky-900">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-sky-200 pt-4 text-center text-sky-600">
          <p>&copy; 2023 Glamorize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer
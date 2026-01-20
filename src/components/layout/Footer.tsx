import { Link } from 'react-router-dom';
import { Tractor, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Tractor className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Agri<span className="text-primary">rent</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering farmers with affordable access to modern agricultural equipment. 
              Rent smarter, farm better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/equipment" className="text-background/70 hover:text-primary transition-colors">
                  Browse Equipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-background/70 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/signup/owner" className="text-background/70 hover:text-primary transition-colors">
                  List Your Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-background/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-background/70 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-background/70 hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:dubeyk7649@gmail.com" className="text-background/70 hover:text-primary transition-colors">
                  dubeyk7649@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919131809606" className="text-background/70 hover:text-primary transition-colors">
                  +91-9131809606
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">
                  Krishna Dubey<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Agrirent. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/50 text-sm">Made with 🌱 for farmers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

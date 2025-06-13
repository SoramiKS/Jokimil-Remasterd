import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, MessageCircle, Shield, Clock, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-dark-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-dark-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-dark-blue-500 via-dark-red-500 to-dark-blue-300 bg-clip-text text-transparent">
                Jokimil
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Personal Wuthering Waves boosting service run by a dedicated player who cares about your progress.
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-dark-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500 text-sm">Personal • Safe • Affordable</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-dark-blue-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-dark-blue-400 transition-colors text-sm">
                About Me
              </Link>
              <Link to="/order" className="block text-gray-400 hover:text-dark-blue-400 transition-colors text-sm">
                Place Order
              </Link>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I have a question about your boosting service."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-dark-blue-400 transition-colors text-sm"
              >
                WhatsApp Support
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Account Babysitting - Rp3,000/day</div>
              <div className="text-gray-400 text-sm">100% Map Exploration - Rp100,000</div>
              <div className="text-gray-400 text-sm">Echo Farming - Rp20,000/day</div>
              <div className="text-gray-400 text-sm">Quest Completion - Various</div>
              <div className="text-gray-400 text-sm">Live Stream Option - +Rp10,000</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-400 text-sm">WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-dark-blue-500" />
                <span className="text-gray-400 text-sm">Quick Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-dark-blue-500" />
                <span className="text-gray-400 text-sm">Personal Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-dark-red-500" />
                <span className="text-gray-400 text-sm">100% Safe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-blue-900/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jokimil. Personal Wuthering Waves boosting service.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your privacy policy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dark-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your terms of service."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dark-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your refund policy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dark-blue-400 transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
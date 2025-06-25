import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-dark-blue-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-dark-blue-500 group-hover:text-dark-blue-400 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-dark-blue-500 via-dark-red-500 to-dark-blue-300 bg-clip-text text-transparent">
              Jokimil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-dark-blue-400 bg-dark-blue-900/20' 
                    : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-dark-blue-400 bg-dark-blue-900/20'
                    : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
                }`}
              >
                About
              </Link>
              <Link
                to="/order"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/order')
                    ? 'text-dark-blue-400 bg-dark-blue-900/20'
                    : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
                }`}
              >
                Order
              </Link>
            </div>
            
            {/* Google Translate Widget */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-400" />
              <div id="google_translate_element"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-dark-blue-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-dark-blue-900/20">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-dark-blue-400 bg-dark-blue-900/20' 
                  : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-dark-blue-400 bg-dark-blue-900/20'
                  : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
              }`}
            >
              About
            </Link>
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/order')
                  ? 'text-dark-blue-400 bg-dark-blue-900/20'
                  : 'text-gray-300 hover:text-dark-blue-400 hover:bg-dark-blue-900/10'
              }`}
            >
              Order
            </Link>
            
            {/* Mobile Google Translate */}
            <div className="px-3 py-2 border-t border-dark-blue-900/20 mt-2">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-400" />
                <div id="google_translate_element_mobile"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
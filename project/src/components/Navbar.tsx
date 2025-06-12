import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-red-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Gamepad2 className="h-8 w-8 text-red-500 group-hover:text-red-400 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Jokimil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-red-400 bg-red-900/20' 
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-red-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                }`}
              >
                About
              </Link>
              <Link
                to="/order"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/order')
                    ? 'text-red-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                }`}
              >
                Order
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-red-900/20">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-400 bg-red-900/20' 
                  : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-red-400 bg-red-900/20'
                  : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
              }`}
            >
              About
            </Link>
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/order')
                  ? 'text-red-400 bg-red-900/20'
                  : 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
              }`}
            >
              Order
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
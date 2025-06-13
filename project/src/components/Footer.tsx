import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, MessageCircle, Shield, Clock, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Jokimil
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500 text-sm">{t('footer.status')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.links')}</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/order" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                {t('nav.order')}
              </Link>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I have a question about your boosting service."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                WhatsApp Support
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.services')}</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">{t('service.map')} - $15</div>
              <div className="text-gray-400 text-sm">{t('service.echo')} - $20</div>
              <div className="text-gray-400 text-sm">{t('service.quest')} - $25</div>
              <div className="text-gray-400 text-sm">{t('service.boss')} - $12</div>
              <div className="text-gray-400 text-sm">{t('service.stream')} - +$10</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-400 text-sm">{t('footer.whatsapp')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-red-500" />
                <span className="text-gray-400 text-sm">{t('footer.response')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-red-500" />
                <span className="text-gray-400 text-sm">{t('footer.personal')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-red-500" />
                <span className="text-gray-400 text-sm">{t('footer.safe')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your privacy policy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your terms of service."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                {t('footer.terms')}
              </a>
              <a 
                href="https://wa.me/0895401658335?text=Hi! I'd like to know about your refund policy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                {t('footer.refund')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
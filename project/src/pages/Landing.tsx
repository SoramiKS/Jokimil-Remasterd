import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, Clock, Star, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Landing = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: t('landing.feature.safe.title'),
      description: t('landing.feature.safe.desc')
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: t('landing.feature.fast.title'),
      description: t('landing.feature.fast.desc')
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t('landing.feature.personal.title'),
      description: t('landing.feature.personal.desc')
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: t('landing.feature.available.title'),
      description: t('landing.feature.available.desc')
    }
  ];

  const stats = [
    { number: "500+", label: t('landing.stats.orders') },
    { number: "100%", label: t('landing.stats.satisfaction') },
    { number: "24/7", label: t('landing.stats.support') },
    { number: "100%", label: t('landing.stats.safety') }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo and Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
                {t('landing.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {t('landing.subtitle')}
              </p>
              <p className="text-lg text-gray-400">
                {t('landing.description')}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t('landing.personal')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t('landing.fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t('landing.safe')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{t('landing.whatsapp')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                {t('landing.cta.boost')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/0895401658335?text=Hi! I'm interested in your Wuthering Waves boosting service. Can you tell me more?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('landing.cta.whatsapp')}
              </a>
            </div>

            {/* Stats */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('landing.why.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('landing.why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('landing.services.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('landing.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: t('service.map'), desc: t('service.map.desc'), price: "$15" },
              { title: t('service.echo'), desc: t('service.echo.desc'), price: "$20" },
              { title: t('service.quest'), desc: t('service.quest.desc'), price: "$25" },
              { title: t('service.boss'), desc: t('service.boss.desc'), price: "$12" },
              { title: t('service.stream'), desc: t('service.stream.desc'), price: "+$10" },
              { title: t('service.priority'), desc: t('service.priority.desc'), price: "+$8" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-red-900/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="text-red-400 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/order"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('landing.services.view')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('landing.personal.title')}
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                {t('landing.personal.desc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">{t('landing.personal.direct')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">{t('landing.personal.attention')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">{t('landing.personal.flexible')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">{t('landing.personal.updates')}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-black/50 border border-red-900/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  J
                </div>
                <h3 className="text-2xl font-bold text-white">{t('landing.personal.greeting')}</h3>
                <p className="text-gray-400">{t('landing.personal.role')}</p>
              </div>
              <p className="text-gray-300 text-center">
                {t('landing.personal.quote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('landing.testimonials.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('testimonial.1.name'),
                rating: 5,
                comment: t('testimonial.1.text')
              },
              {
                name: t('testimonial.2.name'),
                rating: 5,
                comment: t('testimonial.2.text')
              },
              {
                name: t('testimonial.3.name'),
                rating: 5,
                comment: t('testimonial.3.text')
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/50 border border-red-900/20 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                <p className="text-red-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
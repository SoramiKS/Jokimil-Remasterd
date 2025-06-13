import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, Clock, Star, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-dark-red-500" />,
      title: "100% Safe",
      description: "Your account security is my top priority. I never use cheats or bots."
    },
    {
      icon: <Zap className="h-8 w-8 text-dark-blue-500" />,
      title: "Fast Delivery",
      description: "Most orders completed within 24-48 hours by me personally."
    },
    {
      icon: <Users className="h-8 w-8 text-dark-blue-500" />,
      title: "Personal Service",
      description: "Direct communication with me - no middlemen, no delays."
    },
    {
      icon: <Clock className="h-8 w-8 text-dark-red-500" />,
      title: "Always Available",
      description: "Contact me anytime on WhatsApp for instant support and updates."
    }
  ];

  const stats = [
    { number: "500+", label: "Orders Completed" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "24/7", label: "WhatsApp Support" },
    { number: "100%", label: "Account Safety" }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-blue-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('./public/img/home.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-dark-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-dark-red-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-dark-blue-600 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo and Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-dark-blue-500 via-dark-red-400 to-dark-blue-300 bg-clip-text text-transparent">
                JOKIMIL
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Personal Wuthering Waves Boosting Service
              </p>
              <p className="text-lg text-gray-400">
                Run by a dedicated player, for players
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Personal Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>WhatsApp Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/order"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-dark-blue-600 to-dark-red-500 rounded-lg hover:from-dark-blue-700 hover:to-dark-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-dark-blue-500/25"
              >
                Get Boosted Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/0895401658335?text=Hi! I'm interested in your Wuthering Waves boosting service. Can you tell me more?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Me
              </a>
            </div>

            {/* Stats */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent mb-2">
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
              Why Choose <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Jokimil</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience personalized boosting service with direct communication and guaranteed results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-dark-blue-900/20 rounded-xl p-6 hover:border-dark-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
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
              My <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400">
              Affordable boosting solutions with personal attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Account Babysitting", desc: "Keep your account active daily", price: "Rp3,000/day" },
              { title: "100% Map Exploration", desc: "Complete map exploration", price: "Rp100,000" },
              { title: "Echo Farming", desc: "Farm rare echoes efficiently", price: "Rp20,000/day" },
              { title: "Main Quest Completion", desc: "Complete story missions", price: "Rp25,000" },
              { title: "Live Stream Option", desc: "Watch me work on your account", price: "+Rp10,000" },
              { title: "Event Completion", desc: "Complete limited-time events", price: "Rp20,000" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-dark-blue-900/20 rounded-lg p-6 hover:border-dark-blue-500/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="text-dark-blue-400 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/order"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-dark-blue-600 to-dark-red-600 rounded-lg hover:from-dark-blue-700 hover:to-dark-red-700 transition-colors"
            >
              View All Services
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
                Personal <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Service</span>
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                Unlike large boosting companies, you're dealing directly with me. 
                I personally handle every order, ensuring quality and building trust with each client.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Direct communication via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-red-500 rounded-full"></div>
                  <span className="text-gray-300">Personal attention to every order</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Flexible scheduling and requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-red-500 rounded-full"></div>
                  <span className="text-gray-300">Real-time updates and progress reports</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-dark-blue-900/20 to-black/50 border border-dark-blue-900/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-dark-blue-600 to-dark-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  J
                </div>
                <h3 className="text-2xl font-bold text-white">Hi, I'm Jokimil!</h3>
                <p className="text-gray-400">Your personal Wuthering Waves booster</p>
              </div>
              <p className="text-gray-300 text-center">
                "I started this service because I love helping fellow players achieve their goals. 
                Every account I work on gets my full attention and care."
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
              What My <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Clients</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                rating: 5,
                comment: "Amazing personal service! Jokimil kept me updated throughout and delivered exactly what was promised."
              },
              {
                name: "Sarah Kim",
                rating: 5,
                comment: "Finally found a booster who actually cares about the work. Great communication via WhatsApp!"
              },
              {
                name: "Mike Rodriguez",
                rating: 5,
                comment: "Fast, safe, and affordable. The live stream option was awesome - got to watch and learn!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/50 border border-dark-blue-900/20 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                <p className="text-dark-blue-400 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

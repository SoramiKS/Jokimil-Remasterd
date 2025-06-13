import React, { useState } from 'react';
import { Shield, Zap, Clock, Star, Lock, User, MessageCircle, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Order = () => {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [liveStream, setLiveStream] = useState(false);

  const services = [
    {
      id: 'map-unlocking',
      name: t('service.map'),
      description: t('service.map.full'),
      price: '$15',
      duration: t('service.duration.6-12'),
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 'echo-farming',
      name: t('service.echo'),
      description: t('service.echo.full'),
      price: '$20',
      duration: t('service.duration.12-24'),
      icon: <Star className="h-6 w-6" />
    },
    {
      id: 'main-quest',
      name: t('service.quest'),
      description: t('service.quest.full'),
      price: '$25',
      duration: t('service.duration.24-48'),
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'weekly-boss',
      name: t('service.boss'),
      description: t('service.boss.full'),
      price: '$12',
      duration: t('service.duration.2-4'),
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 'account-safety',
      name: t('service.safety.title'),
      description: t('service.safety.desc'),
      price: '+$5',
      duration: t('service.duration.none'),
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 'priority-order',
      name: t('service.priority'),
      description: t('service.priority.desc'),
      price: '+$8',
      duration: t('service.duration.faster'),
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        const price = service.price.replace(/[+$]/g, '');
        total += parseInt(price);
      }
    });
    
    // Add live stream cost
    if (liveStream) {
      total += 10;
    }
    
    return total;
  };

  const generateWhatsAppMessage = () => {
    const selectedServiceNames = selectedServices.map(serviceId => {
      const service = services.find(s => s.id === serviceId);
      return service ? `• ${service.name} (${service.price})` : '';
    }).filter(Boolean);

    const message = `Hi! I'd like to place an order for Wuthering Waves boosting:

*Selected Services:*
${selectedServiceNames.join('\n')}

${liveStream ? '*Live Stream:* Yes (+$10)\n' : ''}
*Total Cost:* $${calculateTotal()}

Please let me know the next steps to proceed with my order. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (selectedServices.length === 0) {
      alert('Please select at least one service before placing your order.');
      return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/0895401658335?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t('order.title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('order.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">{t('order.select.title')}</h2>
              <p className="text-gray-400">{t('order.select.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? 'border-red-500 bg-red-900/20'
                      : 'border-red-900/20 bg-black/50 hover:border-red-500/40'
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        selectedServices.includes(service.id) ? 'bg-red-500' : 'bg-red-900/30'
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.price}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedServices.includes(service.id)
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-400'
                    }`}>
                      {selectedServices.includes(service.id) && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Stream Option */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('order.additional.title')}</h3>
              <div
                className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  liveStream
                    ? 'border-red-500 bg-red-900/20'
                    : 'border-red-900/20 bg-black/50 hover:border-red-500/40'
                }`}
                onClick={() => setLiveStream(!liveStream)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      liveStream ? 'bg-red-500' : 'bg-red-900/30'
                    }`}>
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('order.stream.title')}</h3>
                      <p className="text-red-400 font-medium">+$10</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    liveStream
                      ? 'border-red-500 bg-red-500'
                      : 'border-gray-400'
                  }`}>
                    {liveStream && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  {t('order.stream.desc')}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Video className="h-4 w-4 mr-1" />
                  <span>{t('order.stream.feature')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-black/50 border border-red-900/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">{t('order.summary.title')}</h3>

                {selectedServices.length === 0 && !liveStream ? (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">{t('order.summary.empty')}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedServices.map(serviceId => {
                      const service = services.find(s => s.id === serviceId);
                      return service ? (
                        <div key={serviceId} className="flex justify-between items-start py-2 border-b border-gray-700">
                          <div>
                            <p className="text-white font-medium">{service.name}</p>
                            <p className="text-gray-400 text-sm">{service.duration}</p>
                          </div>
                          <p className="text-red-400 font-medium">{service.price}</p>
                        </div>
                      ) : null;
                    })}

                    {liveStream && (
                      <div className="flex justify-between items-start py-2 border-b border-gray-700">
                        <div>
                          <p className="text-white font-medium">{t('order.stream.title')}</p>
                          <p className="text-gray-400 text-sm">{t('order.stream.feature')}</p>
                        </div>
                        <p className="text-red-400 font-medium">+$10</p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-white">{t('order.summary.total')}</p>
                        <p className="text-2xl font-bold text-red-500">${calculateTotal()}</p>
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{t('order.summary.whatsapp')}</span>
                    </button>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">{t('order.why.title')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">{t('order.why.safety')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">{t('order.why.manual')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">{t('order.why.personal')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">{t('order.why.communication')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('order.how.title')}</h2>
            <p className="text-gray-400">{t('order.how.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('order.how.step1.title')}</h3>
              <p className="text-gray-400">{t('order.how.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('order.how.step2.title')}</h3>
              <p className="text-gray-400">{t('order.how.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('order.how.step3.title')}</h3>
              <p className="text-gray-400">{t('order.how.step3.desc')}</p>
            </div>
          </div>

          <div className="bg-black/50 border border-red-900/20 rounded-xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">{t('order.communication.title')}</h3>
            <p className="text-gray-400 mb-6">
              {t('order.communication.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('order.communication.instant')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('order.communication.secure')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('order.communication.realtime')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('order.faq.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: t('order.faq.q1'),
                a: t('order.faq.a1')
              },
              {
                q: t('order.faq.q2'),
                a: t('order.faq.a2')
              },
              {
                q: t('order.faq.q3'),
                a: t('order.faq.a3')
              },
              {
                q: t('order.faq.q4'),
                a: t('order.faq.a4')
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-red-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
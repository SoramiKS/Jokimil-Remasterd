import React, { useState } from 'react';
import { Shield, Zap, Clock, Star, Lock, User, MessageCircle, Video, MonitorCheck, Plus, Minus } from 'lucide-react';

interface ServiceQuantity {
  [key: string]: number;
}

const Order = () => {
  const [serviceQuantities, setServiceQuantities] = useState<ServiceQuantity>({});
  const [liveStream, setLiveStream] = useState(false);
  const [username, setUsername] = useState('');
  const [uid, setUid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    {
      id: 'babysitting',
      name: 'Account Babysitting',
      description: 'We keep your account active every day—spend waveplates, claim daily rewards, and avoid inactivity bans.',
      price: 'Rp3,000',
      unit: 'day',
      duration: 'Every Day',
      icon: <MonitorCheck className="h-6 w-6" />
    },
    {
      id: '100-map',
      name: '100% Map Exploration',
      description: 'Explore every inch of the map—unlock all waypoints, areas, and hidden points for full completion.',
      price: 'Rp100,000',
      unit: 'Map',
      duration: '12–24 hours',
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 'echo-farming',
      name: 'Echo Farming',
      description: 'Efficiently farm rare and legendary echoes daily to boost your inventory and account value.',
      price: 'Rp20,000',
      unit: 'Echo per Day',
      duration: '12–24 hours',
      icon: <Star className="h-6 w-6" />
    },
    {
      id: 'main-quest',
      name: 'Main Quest Completion',
      description: 'We'll complete your main story missions and unlock major game progress—sit back and watch.',
      price: 'Rp25,000',
      unit: 'Quest',
      duration: '24–48 hours',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'companion-quest',
      name: 'Companion Quest Completion',
      description: 'Complete companion character storylines for full lore unlocks and extra rewards.',
      price: 'Rp20,000',
      unit: 'Character',
      duration: '24–48 hours',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'exploration-quest',
      name: 'Exploration Quest Completion',
      description: 'We tackle all exploration-based quests—find hidden areas, puzzles, and special rewards.',
      price: 'Rp20,000',
      unit: 'Quest',
      duration: '24–48 hours',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'side-quest',
      name: 'Side Quest Completion',
      description: 'Knock out side quests for XP, loot, and story extras. No quest is too small or too weird.',
      price: 'Rp10,000',
      unit: 'Quest',
      duration: '24–48 hours',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'event',
      name: 'Event Completion',
      description: 'Participate in limited-time events and missions to get exclusive rewards and event perks.',
      price: 'Rp20,000',
      unit: 'Event',
      duration: '24–48 hours',
      icon: <User className="h-6 w-6" />
    },
  ];

  const updateQuantity = (serviceId: string, change: number) => {
    setServiceQuantities(prev => {
      const currentQuantity = prev[serviceId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      
      if (newQuantity === 0) {
        const { [serviceId]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [serviceId]: newQuantity
      };
    });
  };

  const calculateTotal = () => {
    let total = 0;

    Object.entries(serviceQuantities).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service && quantity > 0) {
        const match = service.price.match(/[\d.,]+/);
        if (match) {
          const cleaned = match[0].replace(/[.,]/g, '');
          total += parseInt(cleaned, 10) * quantity;
        }
      }
    });

    if (liveStream) {
      total += 10000;
    }

    return total;
  };

  const generateWhatsAppMessage = () => {
    const selectedServiceDetails = Object.entries(serviceQuantities)
      .filter(([_, quantity]) => quantity > 0)
      .map(([serviceId, quantity]) => {
        const service = services.find(s => s.id === serviceId);
        return service ? `• ${service.name} x${quantity} (${service.price} per ${service.unit})` : '';
      })
      .filter(Boolean);

    const message = `Hi! I'd like to place an order for Wuthering Waves boosting:

*Username:* ${username}
*UID:* ${uid}

*Selected Services:*
${selectedServiceDetails.join('\n')}

${liveStream ? '*Live Stream:* Yes (+Rp10,000)\n' : ''}
*Total Cost:* Rp${calculateTotal().toLocaleString()}

Please let me know the next steps to proceed with my order. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (!username || !uid) {
      setErrorMessage('Please fill in your username and UID before placing the order.');
      return;
    }
    if (Object.keys(serviceQuantities).length === 0) {
      setErrorMessage('Please select at least one service before placing your order.');
      return;
    }

    setErrorMessage('');
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/0895401658335?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const hasSelectedServices = Object.keys(serviceQuantities).length > 0;

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-black via-dark-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Place Your <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Order</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Select your desired services and contact me directly on WhatsApp.
              I'll handle everything personally with complete security and efficiency.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Select Services</h2>
              <p className="text-gray-400">Choose the boosting services you need and specify quantities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service) => {
                const quantity = serviceQuantities[service.id] || 0;
                const isSelected = quantity > 0;
                
                return (
                  <div
                    key={service.id}
                    className={`border rounded-xl p-6 transition-all duration-300 ${
                      isSelected
                        ? 'border-dark-blue-500 bg-dark-blue-900/20'
                        : 'border-dark-blue-900/20 bg-black/50 hover:border-dark-blue-500/40'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-dark-blue-500' : 'bg-dark-blue-900/30'
                        }`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                          <p className="text-dark-blue-400 font-medium">{service.price} / {service.unit}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(service.id, -1)}
                          disabled={quantity === 0}
                          className="w-8 h-8 rounded-full bg-dark-red-600 hover:bg-dark-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                        >
                          <Minus className="h-4 w-4 text-white" />
                        </button>
                        
                        <span className="text-white font-semibold min-w-[2rem] text-center">
                          {quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(service.id, 1)}
                          className="w-8 h-8 rounded-full bg-dark-blue-600 hover:bg-dark-blue-700 flex items-center justify-center transition-colors"
                        >
                          <Plus className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Stream Option */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Additional Options</h3>
              <div
                className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  liveStream
                    ? 'border-dark-blue-500 bg-dark-blue-900/20'
                    : 'border-dark-blue-900/20 bg-black/50 hover:border-dark-blue-500/40'
                }`}
                onClick={() => setLiveStream(!liveStream)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      liveStream ? 'bg-dark-blue-500' : 'bg-dark-blue-900/30'
                    }`}>
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Live Stream Progress</h3>
                      <p className="text-dark-blue-400 font-medium">+Rp10,000</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    liveStream
                      ? 'border-dark-blue-500 bg-dark-blue-500'
                      : 'border-gray-400'
                  }`}>
                    {liveStream && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Watch me work on your account in real-time via live stream. Perfect for transparency and learning!
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Video className="h-4 w-4 mr-1" />
                  <span>Real-time streaming during boost</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-black/50 border border-dark-blue-900/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>

                {!hasSelectedServices && !liveStream ? (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select services to see your order summary</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(serviceQuantities)
                      .filter(([_, quantity]) => quantity > 0)
                      .map(([serviceId, quantity]) => {
                        const service = services.find(s => s.id === serviceId);
                        if (!service) return null;
                        
                        const match = service.price.match(/[\d.,]+/);
                        const unitPrice = match ? parseInt(match[0].replace(/[.,]/g, ''), 10) : 0;
                        const totalPrice = unitPrice * quantity;
                        
                        return (
                          <div key={serviceId} className="flex justify-between items-start py-2 border-b border-gray-700">
                            <div>
                              <p className="text-white font-medium">{service.name}</p>
                              <p className="text-gray-400 text-sm">
                                {quantity} × {service.price} per {service.unit}
                              </p>
                            </div>
                            <p className="text-dark-blue-400 font-medium">Rp{totalPrice.toLocaleString()}</p>
                          </div>
                        );
                      })}

                    {liveStream && (
                      <div className="flex justify-between items-start py-2 border-b border-gray-700">
                        <div>
                          <p className="text-white font-medium">Live Stream Progress</p>
                          <p className="text-gray-400 text-sm">Real-time streaming</p>
                        </div>
                        <p className="text-dark-blue-400 font-medium">+Rp10,000</p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-white">Total:</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">
                          Rp{calculateTotal().toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      <input
                        type="text"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-dark-blue-900/40 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-dark-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Enter your UID"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-dark-blue-900/40 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-dark-blue-500"
                      />

                      {errorMessage && (
                        <div className="text-dark-red-500 text-sm font-medium">
                          {errorMessage}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Order via WhatsApp</span>
                    </button>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Why Choose Me?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">100% Account Safety</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">Manual Play Only</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">Personal Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-400 text-sm">Direct Communication</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">How to Order</h2>
            <p className="text-gray-400">Simple steps to get your boosting started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-dark-blue-600 to-dark-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Select Services</h3>
              <p className="text-gray-400">Choose your desired boosting services and specify quantities above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-dark-blue-600 to-dark-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact via WhatsApp</h3>
              <p className="text-gray-400">Click the WhatsApp button to send me your order details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-dark-blue-600 to-dark-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Boosted</h3>
              <p className="text-gray-400">I'll handle everything personally and keep you updated</p>
            </div>
          </div>

          <div className="bg-black/50 border border-dark-blue-900/20 rounded-xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Direct Communication</h3>
            <p className="text-gray-400 mb-6">
              I prefer WhatsApp for orders because it allows for instant communication,
              secure messaging, and real-time updates throughout your boosting process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure Messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does the boosting process take?",
                a: "Most orders are completed within 24-48 hours. Multiple quantities may take longer depending on the service type. I'll give you a more specific timeline when we discuss your order."
              },
              {
                q: "Is my account safe during the boosting process?",
                a: "Absolutely. I use only manual gameplay methods and never use cheats or bots. Your account security is my top priority, and I've never had an account compromised."
              },
              {
                q: "Can I order multiple quantities of the same service?",
                a: "Yes! You can specify exactly how many of each service you need. For example, if you want account babysitting for 5 days, just set the quantity to 5."
              },
              {
                q: "How do I pay for the service?",
                a: "We'll discuss payment methods when you contact me on WhatsApp. I accept various secure payment options and we'll arrange what works best for you."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-dark-blue-900/20 rounded-lg p-6">
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
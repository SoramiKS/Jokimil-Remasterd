import React, { useState } from 'react';
import { Shield, Zap, Clock, Star, Lock, User, MessageCircle, Video, MonitorCheck } from 'lucide-react';

const Order = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [liveStream, setLiveStream] = useState(false);
  const [username, setUsername] = useState('');
  const [uid, setUid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  



 const services = [
  {
    id: 'babysitting',
    name: 'Account Babysitting',
    description: 'We keep your account active every day—spend waveplates, claim daily rewards, and avoid inactivity bans.',
    price: 'Rp3,000 / day',
    duration: 'Every Day',
    icon: <MonitorCheck className="h-6 w-6" />
  },
  {
    id: '100-map',
    name: '100% Map Exploration',
    description: 'Explore every inch of the map—unlock all waypoints, areas, and hidden points for full completion.',
    price: 'Rp100,000 / Map',
    duration: '12–24 hours',
    icon: <Lock className="h-6 w-6" />
  },
  {
    id: 'echo-farming',
    name: 'Echo Farming',
    description: 'Efficiently farm rare and legendary echoes daily to boost your inventory and account value.',
    price: 'Rp20,000 / Echo per Day',
    duration: '12–24 hours',
    icon: <Star className="h-6 w-6" />
  },
  {
    id: 'main-quest',
    name: 'Main Quest Completion',
    description: 'We’ll complete your main story missions and unlock major game progress—sit back and watch.',
    price: 'Rp25,000 / Quest',
    duration: '24–48 hours',
    icon: <User className="h-6 w-6" />
  },
  {
    id: 'companion-quest',
    name: 'Companion Quest Completion',
    description: 'Complete companion character storylines for full lore unlocks and extra rewards.',
    price: 'Rp20,000 / Char',
    duration: '24–48 hours',
    icon: <User className="h-6 w-6" />
  },
  {
    id: 'exploration-quest',
    name: 'Exploration Quest Completion',
    description: 'We tackle all exploration-based quests—find hidden areas, puzzles, and special rewards.',
    price: 'Rp20,000 / Quest',
    duration: '24–48 hours',
    icon: <User className="h-6 w-6" />
  },
  {
    id: 'side-quest',
    name: 'Side Quest Completion',
    description: 'Knock out side quests for XP, loot, and story extras. No quest is too small or too weird.',
    price: 'Rp10,000 / Quest',
    duration: '24–48 hours',
    icon: <User className="h-6 w-6" />
  },
  {
    id: 'event',
    name: 'Event Completion',
    description: 'Participate in limited-time events and missions to get exclusive rewards and event perks.',
    price: 'Rp20,000 / Event',
    duration: '24–48 hours',
    icon: <User className="h-6 w-6" />
  },
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
      // Ambil angka dari awal string dan buang yang bukan digit
      const match = service.price.match(/[\d.,]+/);
      if (match) {
        const cleaned = match[0].replace(/[.,]/g, ''); // Misal "20,000" => "20000"
        total += parseInt(cleaned, 10);
      }
    }
  });

  // Tambahin biaya live stream kalau ada
  if (liveStream) {
    total += 10000; // Rp10,000, bukan cuma 10 ygy 😭
  }

  return total;
};


  const generateWhatsAppMessage = () => {
    const selectedServiceNames = selectedServices.map(serviceId => {
      const service = services.find(s => s.id === serviceId);
      return service ? `• ${service.name} (${service.price})` : '';
    }).filter(Boolean);

    const message = `Hi! I'd like to place an order for Wuthering Waves boosting:

*Username:* ${username}
*UID:* ${uid}

*Selected Services:*
${selectedServiceNames.join('\n')}

${liveStream ? '*Live Stream:* Yes (+$10)\n' : ''}
*Total Cost:* $${calculateTotal()}

Please let me know the next steps to proceed with my order. Thank you!`;

    return encodeURIComponent(message);
  };


  const handleWhatsAppOrder = () => {
    if (!username || !uid) {
      setErrorMessage('Please fill in your username and UID before placing the order.');
      return;
    }
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
              Place Your <span className="text-red-500">Order</span>
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
              <p className="text-gray-400">Choose the boosting services you need</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedServices.includes(service.id)
                    ? 'border-red-500 bg-red-900/20'
                    : 'border-red-900/20 bg-black/50 hover:border-red-500/40'
                    }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${selectedServices.includes(service.id) ? 'bg-red-500' : 'bg-red-900/30'
                        }`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-red-400 font-medium">{service.price}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${selectedServices.includes(service.id)
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
              <h3 className="text-2xl font-bold text-white mb-4">Additional Options</h3>
              <div
                className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${liveStream
                  ? 'border-red-500 bg-red-900/20'
                  : 'border-red-900/20 bg-black/50 hover:border-red-500/40'
                  }`}
                onClick={() => setLiveStream(!liveStream)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${liveStream ? 'bg-red-500' : 'bg-red-900/30'
                      }`}>
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Live Stream Progress</h3>
                      <p className="text-red-400 font-medium">+$10</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${liveStream
                    ? 'border-red-500 bg-red-500'
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
              <div className="bg-black/50 border border-red-900/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>

                {selectedServices.length === 0 && !liveStream ? (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select services to see your order summary</p>
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
                          <p className="text-white font-medium">Live Stream Progress</p>
                          <p className="text-gray-400 text-sm">Real-time streaming</p>
                        </div>
                        <p className="text-red-400 font-medium">+$10</p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-white">Total:</p>
                        <p className="text-2xl font-bold text-red-500">Rp{calculateTotal()}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      <input
                        type="text"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-red-900/40 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="text"
                        placeholder="Enter your UID"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        className="w-full px-4 py-2 bg-black border border-red-900/40 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />

                      {errorMessage && (
                        <div className="text-red-500 text-sm font-medium">
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
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Select Services</h3>
              <p className="text-gray-400">Choose your desired boosting services and options above</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact via WhatsApp</h3>
              <p className="text-gray-400">Click the WhatsApp button to send me your order details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Boosted</h3>
              <p className="text-gray-400">I'll handle everything personally and keep you updated</p>
            </div>
          </div>

          <div className="bg-black/50 border border-red-900/20 rounded-xl p-8 text-center">
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
                a: "Most orders are completed within 24-48 hours. Priority orders are finished 50% faster. I'll give you a more specific timeline when we discuss your order."
              },
              {
                q: "Is my account safe during the boosting process?",
                a: "Absolutely. I use only manual gameplay methods and never use cheats or bots. Your account security is my top priority, and I've never had an account compromised."
              },
              {
                q: "What's the live stream option?",
                a: "For an extra $10, I can stream the boosting process live so you can watch me work on your account in real-time. It's great for transparency and learning!"
              },
              {
                q: "How do I pay for the service?",
                a: "We'll discuss payment methods when you contact me on WhatsApp. I accept various secure payment options and we'll arrange what works best for you."
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
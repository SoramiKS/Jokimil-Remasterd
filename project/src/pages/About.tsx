import React from 'react';
import { Shield, Users, Zap, Clock, Award, Lock, MessageCircle, Gamepad2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Gamepad2 className="h-12 w-12 text-dark-blue-500" />,
      title: "Personal Touch",
      description: "As a solo operator and passionate Wuthering Waves player, I personally handle every order with dedication and expertise. You're not just a number - you get my full attention."
    },
    {
      icon: <Shield className="h-12 w-12 text-dark-red-500" />,
      title: "Account Safety First",
      description: "I use only legitimate gameplay methods and never employ cheats, hacks, or bots. Your account's integrity and security are my top priorities, with a 100% safety guarantee."
    },
    {
      icon: <Users className="h-12 w-12 text-dark-blue-500" />,
      title: "Manual Play Only",
      description: "Every order is completed through manual gameplay by me personally. I strictly prohibit the use of automation tools or cheating software to protect your account from any risk."
    },
    {
      icon: <Clock className="h-12 w-12 text-dark-red-500" />,
      title: "Direct Communication",
      description: "Communicate directly with me through WhatsApp for instant updates, questions, and support. No middlemen, no delays - just direct, personal service."
    },
    {
      icon: <Zap className="h-12 w-12 text-dark-blue-500" />,
      title: "Quick Fulfillment",
      description: "As a dedicated solo operator, I focus entirely on your order without distractions. Most orders are completed within 24-48 hours, often faster than expected."
    },
    {
      icon: <Lock className="h-12 w-12 text-dark-red-500" />,
      title: "Privacy Protection",
      description: "Your personal information and account details are handled with utmost care. I never share your data and delete all information after order completion."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-dark-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Jokimil</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hi! I'm the founder and sole operator of Jokimil. As a passionate Wuthering Waves player, 
              I started this service to help fellow gamers achieve their goals safely and efficiently. 
              Every order gets my personal attention and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent mb-2 notranslate">2023</div>
              <div className="text-gray-400">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-400">Orders Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-xl text-gray-400">
              What makes my service different from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 border border-dark-blue-900/20 rounded-xl p-6 hover:border-dark-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How I <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-400">
              My proven process ensures maximum efficiency and security
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "WhatsApp Contact",
                description: "Message me on WhatsApp with your desired service and I'll respond quickly with details."
              },
              {
                step: "02",
                title: "Order Discussion",
                description: "We discuss your specific needs, timeline, and I provide you with a personalized quote."
              },
              {
                step: "03",
                title: "Secure Boosting",
                description: "I personally work on your account using only manual gameplay methods with regular updates."
              },
              {
                step: "04",
                title: "Completion",
                description: "You receive notification when complete, with detailed progress reports and screenshots."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-dark-blue-600 to-dark-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 notranslate">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-400">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400">
              The person behind Jokimil
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 border border-dark-blue-900/20 rounded-xl p-8 text-center hover:border-dark-blue-500/40 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-dark-blue-600 to-dark-red-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                J
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Jokimil - Founder & Operator
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a dedicated Wuthering Waves enthusiast who has been playing since launch. 
                After helping friends with their accounts, I realized there was a need for a 
                trustworthy, personal boosting service. I founded Jokimil to provide safe, 
                reliable boosting with a personal touch that larger services can't match.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-dark-blue-400 font-semibold">Experience</div>
                  <div className="text-gray-400">2+ Years Playing</div>
                </div>
                <div className="text-center">
                  <div className="text-dark-red-400 font-semibold">Specialty</div>
                  <div className="text-gray-400">All Content Types</div>
                </div>
                <div className="text-center">
                  <div className="text-dark-blue-400 font-semibold">Approach</div>
                  <div className="text-gray-400">Personal & Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trust & <span className="bg-gradient-to-r from-dark-blue-500 to-dark-red-500 bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your account security is my primary concern. I have never had a single account compromised 
              and maintain the highest standards of security protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-dark-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Manual Play Only</h3>
                  <p className="text-gray-400">I personally play your account manually - no bots, no cheats, no automation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-dark-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Secure Communication</h3>
                  <p className="text-gray-400">All communication through WhatsApp with end-to-end encryption.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-dark-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Guarantee</h3>
                  <p className="text-gray-400">I stake my reputation on every order and personally guarantee your satisfaction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-dark-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Direct Contact</h3>
                  <p className="text-gray-400">Speak directly with me - no customer service reps, no delays.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-dark-blue-900/20 to-black/50 border border-dark-blue-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Promise</h3>
              <p className="text-gray-300 mb-6">
                I treat every account as if it were my own. Your progress, your items, your achievements - 
                they all matter to me personally. If you're not completely satisfied, I'll make it right.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-dark-red-500 rounded-full"></div>
                  <span className="text-gray-400">100% Account Safety</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-dark-blue-500 rounded-full"></div>
                  <span className="text-gray-400">Personal Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-dark-red-500 rounded-full"></div>
                  <span className="text-gray-400">Direct Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
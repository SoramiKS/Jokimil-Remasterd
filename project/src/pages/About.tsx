import React from 'react';
import { Shield, Users, Zap, Clock, Award, Lock, MessageCircle, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Gamepad2 className="h-12 w-12 text-red-500" />,
      title: t('about.value.personal.title'),
      description: t('about.value.personal.desc')
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: t('about.value.safety.title'),
      description: t('about.value.safety.desc')
    },
    {
      icon: <Users className="h-12 w-12 text-red-500" />,
      title: t('about.value.manual.title'),
      description: t('about.value.manual.desc')
    },
    {
      icon: <Clock className="h-12 w-12 text-red-500" />,
      title: t('about.value.communication.title'),
      description: t('about.value.communication.desc')
    },
    {
      icon: <Zap className="h-12 w-12 text-red-500" />,
      title: t('about.value.quick.title'),
      description: t('about.value.quick.desc')
    },
    {
      icon: <Lock className="h-12 w-12 text-red-500" />,
      title: t('about.value.privacy.title'),
      description: t('about.value.privacy.desc')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">2023</div>
              <div className="text-gray-400">{t('about.founded')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-400">{t('landing.stats.orders')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-400">{t('landing.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.approach.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('about.approach.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 border border-red-900/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
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
              {t('about.work.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('about.work.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t('about.work.step1.title'),
                description: t('about.work.step1.desc')
              },
              {
                step: "02",
                title: t('about.work.step2.title'),
                description: t('about.work.step2.desc')
              },
              {
                step: "03",
                title: t('about.work.step3.title'),
                description: t('about.work.step3.desc')
              },
              {
                step: "04",
                title: t('about.work.step4.title'),
                description: t('about.work.step4.desc')
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
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
              {t('about.me.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('about.me.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 border border-red-900/20 rounded-xl p-8 text-center hover:border-red-500/40 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                J
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t('about.me.name')}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('about.me.desc')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-red-400 font-semibold">{t('about.me.experience')}</div>
                  <div className="text-gray-400">{t('about.me.experience.value')}</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">{t('about.me.specialty')}</div>
                  <div className="text-gray-400">{t('about.me.specialty.value')}</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">{t('about.me.approach')}</div>
                  <div className="text-gray-400">{t('about.me.approach.value')}</div>
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
              {t('about.trust.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('about.trust.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('about.trust.manual.title')}</h3>
                  <p className="text-gray-400">{t('about.trust.manual.desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('about.trust.secure.title')}</h3>
                  <p className="text-gray-400">{t('about.trust.secure.desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('about.trust.guarantee.title')}</h3>
                  <p className="text-gray-400">{t('about.trust.guarantee.desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('about.trust.contact.title')}</h3>
                  <p className="text-gray-400">{t('about.trust.contact.desc')}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-black/50 border border-red-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('about.promise.title')}</h3>
              <p className="text-gray-300 mb-6">
                {t('about.promise.desc')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-400">{t('about.promise.safety')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-400">{t('about.promise.personal')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-400">{t('about.promise.direct')}</span>
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
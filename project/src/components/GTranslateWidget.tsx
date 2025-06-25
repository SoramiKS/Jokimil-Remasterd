import { useEffect } from 'react';

declare global {
  interface Window {
    gtranslateSettings?: any;
  }
}

const GTranslateWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.defer = true;
    document.body.appendChild(script);

    window.gtranslateSettings = {
      default_language: 'en',
      languages: ['en', 'id'],
      wrapper_selector: '.gtranslate_wrapper',
    };
  }, []);

  return <div className="gtranslate_wrapper" />;
};

export default GTranslateWidget;

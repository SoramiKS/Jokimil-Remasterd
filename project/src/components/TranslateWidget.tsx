import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const TranslateWidget: React.FC = () => {
  useEffect(() => {
    // Initialize Google Translate for mobile if it exists
    const mobileElement = document.getElementById('google_translate_element_mobile');
    if (mobileElement && window.google && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,id,zh,ja,ko,th,vi,ms,tl,es,fr,de,pt,ru,ar,hi',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element_mobile');
    }
  }, []);

  return null;
};

export default TranslateWidget;
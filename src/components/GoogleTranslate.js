import React, { useEffect, useState } from 'react';

const languages = [
  'en', 'es', 'fr', 'de', 'hi', 'zh', // Add more language codes as needed
];

const GoogleTranslate = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadGoogleTranslate = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      } catch (e) {
        setError(true);
      }
    };

    window.loadGoogleTranslate = loadGoogleTranslate;

    if (window.google && window.google.translate) {
      loadGoogleTranslate();
    } else {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
      script.async = true;
      script.onerror = () => setError(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error loading Google Translate widget.</p>
      ) : (
        <div id="google_translate_element" style={{ paddingBottom: '3px' }}>
          {/* The Google Translate widget will be rendered here */}
        </div>
      )}
    </div>
  );
};

export default GoogleTranslate;

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

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const dropdownElement = document.querySelector('.goog-te-gadget');
        if (dropdownElement && dropdownElement.parentElement) {
          dropdownElement.parentElement.style.position = 'relative';
          dropdownElement.style.position = 'absolute';
          dropdownElement.style.top = '100%'; // Adjust top position as needed
          dropdownElement.style.left = '0';
        }
      });
    });

    const targetNode = document.getElementById('google_translate_element');
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
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

import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange('en')}>
        <Flag code="US" alt="English" className="flag-icon" />
      </button>
      <button onClick={() => handleLanguageChange('es')}>
        <Flag code="ES" alt="Español" className="flag-icon" />
      </button>
      {/* Add more languages and flags as needed */}
    </div>
  );
}

export default LanguageSwitcher;
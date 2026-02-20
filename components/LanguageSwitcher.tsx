'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: '🇬🇧 English', fullName: 'English' },
    { code: 'fr', name: '🇫🇷 Français', fullName: 'Français' },
    { code: 'es', name: '🇪🇸 Español', fullName: 'Español' },
  ];

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
        title="Change language"
      >
        <span className="text-lg">{currentLang.name.split(' ')[0]}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/60 backdrop-blur-3xl border border-white/20 rounded-lg shadow-2xl shadow-black/50 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${
                i18n.language === lang.code ? 'bg-white/20 text-white' : 'text-gray-300'
              }`}
            >
              {lang.name} {i18n.language === lang.code && '✓'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

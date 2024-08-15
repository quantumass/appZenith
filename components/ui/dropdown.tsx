'use client'

import { useState } from 'react'
import Image from 'next/image'
import esFlag from '@/public/flags/es.svg'
import enFlag from '@/public/flags/en.svg'
import frFlag from '@/public/flags/fr.svg'
import deFlag from '@/public/flags/de.svg'
import arFlag from '@/public/flags/ar.svg'

const flags = {
  es: esFlag,
  en: enFlag,
  fr: frFlag,
  de: deFlag,
  ar: arFlag
}

const languageNames = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  ar: 'العربية'
}

const LanguageDropdown = (props: { locale: string }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
  const currentLocale = props.locale
  const currentFlag = flags[currentLocale as keyof typeof flags]
  const currentLanguageName = languageNames[currentLocale as keyof typeof languageNames]

  const handleLanguageChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-gray-700 p-2 rounded-md hover:bg-gray-600"
      >
        <span>
          <Image src={currentFlag} alt={currentLocale} width={24} height={16} className="mr-2" />
        </span>
        <span>{currentLanguageName}</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 border border-gray-300 rounded-md shadow-lg">
          {Object.entries(flags).map(([locale, flag]) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              <Image src={flag} alt={locale} width={24} height={16} className="mr-2" />
              {languageNames[locale as keyof typeof languageNames]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown
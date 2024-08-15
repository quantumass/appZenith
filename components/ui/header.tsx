import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTranslations } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import dynamic from 'next/dynamic'
import {getLocale} from 'next-intl/server';

// Dynamically import the dropdown component to ensure it's only rendered on the client
const LanguageDropdown = dynamic(() => import('./dropdown'), { ssr: false })

export default async function Header() {
  const t = useTranslations('Header')
  const messages = await getMessages()
  const locale = await getLocale();

  return (
    <header className="absolute w-full z-30 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 my-4 mr-4">
            {/* Logo */}
            <Link href="/" className="block flex items-center text-purple-600 font-extrabold" aria-label="AppZenith">
              <Image className="rounded-full" src={Logo} width={80} height={80} alt="AppZenith" />
              {t('siteName')}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop nav links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded">
                  {t('getStarted')}
                </Link>
              </li>
              {/* Language Dropdown */}
              <li className="ml-4">
                <LanguageDropdown locale={locale}/>
              </li>
            </ul>
          </nav>

          <NextIntlClientProvider messages={messages}>
            <MobileMenu />
          </NextIntlClientProvider>
        </div>
      </div>
    </header>
  )
}

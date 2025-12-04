import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6">
        <div className="bg-white rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-16 mb-8 sm:mb-10 md:mb-12">
          {/* Logo minimaliste */}
          <div className="sm:col-span-2 md:col-span-5">
            <Link href="/" className="inline-block mb-4 sm:mb-5 group">
              <div className="relative h-14 sm:h-18 md:h-24 w-auto transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/image/SANSARRIEREPLANBLANC copy.png"
                  alt="Kashoot Logo"
                  width={240}
                  height={80}
                  className="h-full w-auto object-contain brightness-0"
                />
              </div>
            </Link>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-neutral-600 leading-relaxed max-w-sm font-light">
              Films de mariage haut de gamme
            </p>
          </div>

          {/* Navigation épurée */}
          <div className="sm:col-span-1 md:col-span-2">
            <h4 className="text-[10px] sm:text-[11px] font-semibold mb-4 sm:mb-5 md:mb-6 tracking-[0.15em] uppercase text-neutral-900">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Services', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] sm:text-[14px] text-neutral-600 hover:text-neutral-900 transition-all duration-300 hover:translate-x-1 inline-block font-light">
                    {link.name}
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-1 md:col-span-3">
            <h4 className="text-[10px] sm:text-[11px] font-semibold mb-4 sm:mb-5 md:mb-6 tracking-[0.15em] uppercase text-neutral-900">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-[14px] text-neutral-600">
              <li>
                <a href="mailto:kashootcorp@gmail.com" className="hover:text-neutral-900 transition-all duration-300 hover:translate-x-1 inline-block font-light break-all">
                  kashootcorp@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0779570959" className="hover:text-neutral-900 transition-all duration-300 hover:translate-x-1 inline-block font-light">
                  0779570959
                </a>
              </li>
            </ul>
          </div>

          {/* Social minimaliste */}
          <div className="sm:col-span-2 md:col-span-2">
            <h4 className="text-[10px] sm:text-[11px] font-semibold mb-4 sm:mb-5 md:mb-6 tracking-[0.15em] uppercase text-neutral-900">Suivez-nous</h4>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-110">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright minimaliste */}
        <div className="border-t border-neutral-200/60 pt-6 sm:pt-8 md:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[11px] sm:text-[12px] text-neutral-500 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kashoot. Tous droits réservés.
          </p>
          <div className="flex gap-6 sm:gap-8 text-[11px] sm:text-[12px] text-neutral-500">
            <Link href="/privacy" className="hover:text-neutral-900 transition-all duration-300 font-light">Confidentialité</Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-all duration-300 font-light">Mentions légales</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}


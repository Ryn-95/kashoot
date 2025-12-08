'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Photo', href: '/photo' },
    { name: 'Vidéo', href: '/video' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-4 sm:top-6 md:top-8 lg:top-12 left-0 right-0 z-50 px-3 sm:px-4 md:px-6"
    >
      <nav className="mx-auto max-w-[750px] flex items-center justify-between px-2 sm:px-3 md:px-4 bg-black/95 backdrop-blur-xl rounded-full border border-black/20 shadow-[0_2px_20px_rgba(0,0,0,0.2)] overflow-visible" style={{ paddingTop: '0', paddingBottom: '0', minHeight: 'fit-content', height: 'auto' }}>
        {/* Logo - Style premium compact */}
        <Link href="/" className="flex items-center z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-[48px] sm:h-[56px] md:h-[68px] w-auto -my-1"
          >
            <Image
              src="/image/SANSARRIEREPLANBLANC copy.png"
              alt="Kashoot Logo"
              width={200}
              height={64}
              className="h-full w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 absolute left-1/2 -translate-x-1/2" style={{ lineHeight: '1' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-[14px] lg:text-[15px] font-medium leading-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link href="/contact" className="hidden md:block z-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 lg:px-4 py-1.5 bg-white text-black rounded-full text-[12px] lg:text-[13px] font-medium shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-300 whitespace-nowrap"
          >
            Contactez-nous
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-3 right-3 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 z-40"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-medium py-2 border-b border-white/10 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-white text-black rounded-full text-[14px] font-medium text-center shadow-lg hover:shadow-xl transition-all"
              >
                Contactez-nous
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

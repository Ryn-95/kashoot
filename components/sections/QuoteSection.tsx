'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function QuoteSection() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Stars minimalistes */}
        <ScrollReveal>
          <div className="flex justify-center gap-1.5 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </ScrollReveal>

        {/* Quote épurée */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-[28px] md:text-[32px] font-medium text-gray-900 leading-[1.4] mb-8">
            "Chaque image raconte une histoire, filmant l&apos;amour, les émotions et les instants magiques."
          </h2>
        </ScrollReveal>

        {/* Author minimaliste */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-gray-300" />
            <div>
              <p className="text-[13px] font-medium text-gray-900">Kashoot Studio</p>
              <p className="text-[11px] text-gray-500">Fondateur</p>
            </div>
            <div className="w-10 h-[1px] bg-gray-300" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Un souvenir qui nous émeut à chaque fois",
    description: "Les images sont magnifiques, sincères, et chaque plan nous replonge dans ce jour parfait. L'équipe a su capturer notre histoire avec une sensibilité rare.",
    author: "J&S",
    location: "Paris",
  },
  {
    quote: "Un film de mariage digne du cinéma",
    description: "Chaque scène raconte une émotion. Le rendu final dépasse tout ce qu'on espérait. Un travail d'une qualité exceptionnelle.",
    author: "I&D",
    location: "Chantilly",
  },
  {
    quote: "Une équipe à l'écoute et passionnée",
    description: "Présents sans jamais déranger, ils ont capturé chaque instant avec talent et discrétion. Un professionnalisme remarquable.",
    author: "P&C",
    location: "Founder",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - ultra minimal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <span className="text-[10px] font-medium text-gray-400 tracking-[0.3em] uppercase">
              Témoignages
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        </motion.div>

        {/* Testimonial slider - ultra minimal */}
        <div className="max-w-[900px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="text-center"
            >
              {/* Quote */}
              <p className="text-[32px] md:text-[42px] font-light text-gray-900 leading-tight mb-12 tracking-tight">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Description */}
              <p className="text-[15px] text-gray-500 leading-relaxed mb-16 max-w-[700px] mx-auto">
                {testimonials[activeIndex].description}
              </p>

              {/* Author - ultra minimal */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[13px] font-medium text-gray-900">
                  {testimonials[activeIndex].author}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[13px] text-gray-500">
                  {testimonials[activeIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - minimal lines */}
          <div className="flex justify-center gap-2 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative"
              >
                <div className={`transition-all duration-500 ${
                  activeIndex === index 
                    ? 'w-16 h-[2px] bg-gray-900' 
                    : 'w-16 h-[1px] bg-gray-300 hover:bg-gray-500'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Trust badge - ultra minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-900" />
              ))}
            </div>
            <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase">
              100+ Clients · 5/5
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


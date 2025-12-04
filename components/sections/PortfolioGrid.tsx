'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Creative Agency',
    category: 'Professional Videographer',
    description: 'Des moments capturés avec style et émotion.',
    image: '/image/AdobeStock_193389983.jpeg',
  },
  {
    title: 'Amour éternel',
    category: 'Portrait Photography',
    description: 'Des souvenirs filmés avec goût et précision.',
    image: '/image/DSC09329.jpg',
  },
  {
    title: 'Élégance discrète',
    category: 'Event Photography',
    description: 'Des instants simples, purs et raffinés.',
    image: '/image/AdobeStock_228407445.jpeg',
  },
  {
    title: 'Lumière urbaine',
    category: 'Portrait Photography',
    description: 'L\'amour brille au cœur des villes.',
    image: '/image/AdobeStock_261941673.jpeg',
  },
];

export default function PortfolioGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Header compact et épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-[32px] md:text-[40px] font-light text-neutral-900 tracking-[-0.02em] leading-[1.05] mb-3">
            Un regard sur vos émotions
          </h2>
          <p className="text-[14px] md:text-[15px] text-neutral-500 max-w-[520px] mx-auto font-light leading-relaxed mb-5">
            L&apos;équipe Kashoot transforme chaque mariage en un film sincère, élégant et inoubliable.
          </p>

          {/* Bouton "My Portfolio" */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-neutral-900 text-[12px] font-medium text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            My Portfolio
          </motion.button>
        </motion.div>

        {/* Grid 2x2 compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isRightAligned = index === 1 || index === 3; // "Amour éternel" et "Lumière urbaine"
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                {/* Image container compact */}
                <div className="relative mb-4 overflow-hidden rounded-[24px] bg-neutral-100">
                  <motion.div
                    animate={{ scale: isHovered ? 1.03 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover ${index === 1 ? 'object-[center_35%]' : ''}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  
                  {/* Overlay gradient au hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                  />

                  {/* Icon arrow au hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -8, y: -8 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.8,
                      x: isHovered ? 0 : -8,
                      y: isHovered ? 0 : -8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 right-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={13} className="text-neutral-900" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                </div>

                {/* Content compact avec alignement conditionnel */}
                <div className={`space-y-2 ${isRightAligned ? 'md:text-right' : ''}`}>
                  {/* Titre + tag */}
                  <div className={`flex items-start gap-3 ${isRightAligned ? 'md:flex-row-reverse md:justify-end' : 'justify-between'}`}>
                    <h3 className="text-[15px] md:text-[16px] font-medium text-neutral-900 tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-medium text-neutral-500 px-2.5 py-1 rounded-full bg-neutral-100 whitespace-nowrap flex-shrink-0">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[13px] text-neutral-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

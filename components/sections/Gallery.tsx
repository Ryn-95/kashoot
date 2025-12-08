'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  '/image/A_115.jpg',
  '/image/A_116.jpg',
  '/image/A_547.jpg',
  '/image/IMG_4078.JPG',
  '/image/AdobeStock_228034444.jpeg',
  '/image/DSC07869.jpeg',
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Header compact et épuré */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 md:mb-14 text-center"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-400 block mb-5">
            Kashoot Studio
          </span>
          <h2 className="text-[32px] md:text-[40px] font-light text-neutral-900 tracking-[-0.02em] leading-[1.05] mb-3">
            Un écrin visuel pour vos émotions.
          </h2>
          <p className="text-[14px] md:text-[15px] text-neutral-500 font-light leading-relaxed max-w-[480px] mx-auto">
            Une sélection de moments rares, filmés avec précision, lumière et silence. 
            Aucun bruit, seulement l&apos;essentiel : votre histoire.
          </p>
        </motion.div>

        {/* Layout original : image principale + miniatures horizontales */}
        <div className="space-y-6">
          {/* Image principale compacte */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] bg-neutral-100 overflow-hidden rounded-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={galleryImages[selectedIndex]}
                  alt="Galerie Kashoot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Label discret */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/60 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                Galerie Kashoot
              </span>
            </div>
          </motion.div>

          {/* Grille de miniatures horizontales compacte */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-100"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    selectedIndex === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-60 group-hover:opacity-80 scale-100'
                  }`}
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                
                {/* Overlay pour l'image sélectionnée */}
                {selectedIndex === index && (
                  <motion.div
                    layoutId="selectedGallery"
                    className="absolute inset-0 border-2 border-neutral-900 rounded-md"
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


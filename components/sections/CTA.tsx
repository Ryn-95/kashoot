'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const carouselImages = [
  '/image/A_263.jpg',
  '/image/DSC09329.jpg',
  '/image/IMG_4096.JPG',
  '/image/AdobeStock_235776848.jpeg',
  '/image/DSC05761.jpg',
  '/image/A_221.jpg',
  '/image/A_245.jpg',
  '/image/DSC07875.jpeg',
  '/image/KASHOOT-40.jpg',
  '/image/DSC09525.jpg',
  '/image/A_547.jpg',
  '/image/IMG_4078.JPG',
];

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8 sm:space-y-12 md:space-y-16"
        >
          {/* Badge ultra minimaliste */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-[9px] sm:text-[10px] font-medium text-neutral-500 tracking-[0.2em] uppercase">
              Disponible pour vos projets 2025
            </span>
          </motion.div>

          {/* Title ultra épuré */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-light text-neutral-900 tracking-[-0.02em] leading-[1.05] px-2">
              Prêts à capturer
              <br />
              <span className="font-normal">votre histoire ?</span>
            </h2>
          </div>

          {/* Description ultra courte */}
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-neutral-600 max-w-[520px] mx-auto leading-relaxed font-light px-4">
            Discutons de votre projet et trouvons ensemble la formule parfaite pour immortaliser votre mariage
          </p>

          {/* Carousel d'images petit qui défile automatiquement - 4 images visibles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 sm:pt-8 overflow-hidden relative mx-auto w-full max-w-[528px] md:max-w-[608px] px-4"
          >
            {/* Masque gradient sur les bords */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="relative w-full overflow-hidden">
              {/* Container avec défilement infini */}
              <div className="flex gap-3 animate-scroll">
                {/* Première série d'images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-[120px] md:w-[140px] h-[80px] md:h-[100px] rounded-md overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={image}
                      alt={`Mariage ${index + 1}`}
                      width={140}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* Dupliquer pour effet infini */}
                {carouselImages.map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-[120px] md:w-[140px] h-[80px] md:h-[100px] rounded-md overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={image}
                      alt={`Mariage ${index + 1}`}
                      width={140}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons ultra minimalistes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-3.5 bg-neutral-900 text-white rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 tracking-tight"
            >
              <span>Réserver une consultation</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-transparent text-neutral-900 rounded-full text-[14px] font-medium hover:bg-neutral-50 transition-all duration-300 border border-neutral-200 tracking-tight"
            >
              Voir nos tarifs
            </motion.button>
          </div>

          {/* 5 étoiles + texte de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 flex flex-col items-center gap-3"
          >
            {/* 5 étoiles */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-neutral-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* Texte */}
            <p className="text-[12px] text-neutral-500 font-light">
              De confiance auprès de 100+ clients
            </p>
          </motion.div>

          {/* Trust indicators ultra subtils */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 flex items-center justify-center gap-6 text-[11px] text-neutral-400 font-light tracking-wide"
          >
            <span>Réponse sous 24h</span>
            <span className="text-neutral-300">•</span>
            <span>Consultation gratuite</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


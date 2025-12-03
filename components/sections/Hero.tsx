'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Edit } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full h-screen bg-white flex justify-center items-center pt-2 pb-2 px-2 sm:pt-3 sm:pb-3 sm:px-3 md:pt-3 md:pb-3 md:px-3 lg:pt-4 lg:pb-4 lg:px-4 overflow-hidden">
      {/* Container principal avec bords arrondis - Style Framer EXACT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-[1800px] bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
      >
        {/* Image à l'intérieur du container - NE TOUCHE PAS LES BORDS */}
        <div className="relative w-full h-[calc(100vh-40px)] max-h-[950px] min-h-[500px] sm:min-h-[600px] md:min-h-[650px]">
          <Image
            src="/image/AdobeStock_228034358.jpeg"
            alt="Couple de mariage - Kashoot"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          
          {/* Overlay dégradé très léger en haut pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5" />

          {/* Petit rond blanc en haut à gauche (style Framer) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-6 left-6 z-10 w-3 h-3 bg-white rounded-full"
          />

          {/* Contenu superposé sur l'image - EXACTEMENT comme capture */}
          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
              {/* Colonne gauche - EXACTEMENT comme capture */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col justify-center"
              >
                {/* Label "Détails raffinés" - Petit gris clair */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="mb-2 sm:mb-3"
                >
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-[#EFEFEF] tracking-[0.15em]">
                    Détails raffinés
                  </span>
                </motion.div>

                {/* Grand titre "Event Photography" - Bold blanc */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-3 sm:mb-4"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Event Photography
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white/90 leading-relaxed max-w-[400px]"
                >
                  Des moments capturés avec style et émotion.
                </motion.p>
              </motion.div>

              {/* Colonne droite - Alignée à droite */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col justify-center items-start lg:items-end mt-6 lg:mt-0"
              >
                {/* Label "Amour éternel" - Petit gris clair */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="mb-2 sm:mb-3"
                >
                  <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-[#EFEFEF] tracking-[0.15em]">
                    Amour éternel
                  </span>
                </motion.div>

                {/* Grand titre "Portrait Photography" - Bold blanc */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-3 sm:mb-4 text-left lg:text-right"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Portrait Photography
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[12px] sm:text-[13px] text-white/90 leading-relaxed max-w-[400px] text-left lg:text-right lg:ml-auto font-light"
                >
                  Kashoot capture vos plus beaux instants avec passion, pour créer des souvenirs authentiques et intemporels de votre mariage.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Bouton flottant avec icône stylo/edit à droite - EXACTEMENT comme capture */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-md border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-700/80 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)] z-10"
            aria-label="Edit"
          >
            <Edit size={18} strokeWidth={2} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

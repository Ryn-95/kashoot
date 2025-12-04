'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const photoImages = [
  '/image/AdobeStock_196920750.jpeg',
  '/image/image00035.jpg',
  '/image/AdobeStock_235776829.jpeg',
  '/image/A_90.jpg',
  '/image/DSC05501.jpg',
  '/image/AdobeStock_235780957.jpeg',
  '/image/la-mariee-tient-un-bouquet-de-mariage-dans-ses-mains.jpg',
  '/image/AdobeStock_306789288.jpeg',
  '/image/AdobeStock_228407537.jpeg',
  '/image/image00023.jpeg',
  '/image/IMG_4065.JPG',
  '/image/AdobeStock_235780655.jpeg',
  '/image/AdobeStock_236366436.jpeg',
  '/image/AdobeStock_243451238.jpeg',
  '/image/image00029.jpg',
  '/image/image00001.jpg',
  '/image/image00021.jpg',
  '/image/AdobeStock_145421520.jpeg',
  '/image/image00036.jpg',
  '/image/AdobeStock_174469948.jpeg',
  '/image/AdobeStock_235780446.jpeg',
  '/image/ceremonie-de-pose-de-la-bague-de-mariage-sur-le-doigt-de-la-mariee-a-l-exterieur.jpg',
  '/image/image00022.jpg',
  '/image/cartes-d-invitation-de-mariage-avec-des-fleurs-sur-la-table.jpg',
  '/image/AdobeStock_228407485.jpeg',
];

export default function PhotoPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Séparer les images en 2 colonnes avec décalage
  const leftColumn = photoImages.filter((_, i) => i % 2 === 0);
  const rightColumn = photoImages.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Section principale - 2 colonnes décalées mais collées */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Layout 2 colonnes collées avec décalage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
            {/* Colonne gauche */}
            <div className="space-y-0 pr-0">
              {leftColumn.map((image, index) => {
                const originalIndex = index * 2;
                const isHovered = hoveredIndex === originalIndex;
                
                return (
            <motion.div
                    key={originalIndex}
                    initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: originalIndex * 0.08 }}
                    onHoverStart={() => setHoveredIndex(originalIndex)}
                onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer"
              >
                <motion.div
                      animate={{ scale: isHovered ? 1.03 : 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                        src={image}
                        alt={`Photo ${originalIndex + 1}`}
                    fill
                    className="object-cover"
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
                  </motion.div>
                );
              })}
            </div>

            {/* Colonne droite - décalée */}
            <div className="space-y-0 pl-0 mt-0 md:mt-12">
              {rightColumn.map((image, index) => {
                const originalIndex = index * 2 + 1;
                const isHovered = hoveredIndex === originalIndex;
                
                return (
          <motion.div
                    key={originalIndex}
                    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: originalIndex * 0.08 }}
                    onHoverStart={() => setHoveredIndex(originalIndex)}
              onHoverEnd={() => setHoveredIndex(null)}
                    className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer"
            >
              <motion.div
                      animate={{ scale: isHovered ? 1.03 : 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                        src={image}
                        alt={`Photo ${originalIndex + 1}`}
                  fill
                  className="object-cover"
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
                </motion.div>
                );
              })}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

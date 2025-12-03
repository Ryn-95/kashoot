'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Photo',
    subtitle: 'de mariage',
    description: 'Chaque cliché respire votre amour, pas un algorithme.',
    image: '/image/AdobeStock_294334159.jpeg',
    tags: ['Réel', 'Élégant', 'Vibrant'],
  },
  {
    id: '02',
    title: 'Film',
    subtitle: 'de mariage',
    description: 'Des films qui se ressentent avant de se regarder.',
    image: '/image/cartes-d-invitation-de-mariage-avec-des-fleurs-sur-la-table.jpg',
    tags: ['Authentique', 'Émotionnel', 'Signature'],
  },
  {
    id: '03',
    title: 'Agence',
    subtitle: 'humaine',
    description: 'Une équipe dédiée à vos plus belles émotions.',
    image: '/image/ceremonie-de-pose-de-la-bague-de-mariage-sur-le-doigt-de-la-mariee-a-l-exterieur.jpg',
    tags: ['Sur-mesure', 'Proximité', 'Excellence'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Tagline en haut */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-[14px] md:text-[15px] text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Chez Kashoot, on capture l&apos;emotion brute, sans filtres ni artifices. Juste l&apos;essentiel : vous.
          </p>
        </motion.div>

        {/* Layout alterné compact */}
        <div className="space-y-8 md:space-y-10 mb-10">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isEven = index % 2 === 0; // Image à gauche pour index pair
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl bg-neutral-100">
                  <motion.div
                    animate={{ scale: isHovered ? 1.03 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {service.id}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="w-full md:w-1/2 space-y-3">
                  <h3 className="text-[18px] md:text-[20px] font-medium text-neutral-900">
                    {service.title} {service.subtitle}
                  </h3>
                  <p className="text-[13px] text-neutral-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-neutral-700 px-2.5 py-1 rounded-full bg-neutral-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8"
        >
          <div className="text-center">
            <p className="text-[28px] md:text-[32px] font-light text-neutral-900 mb-1">150+</p>
            <p className="text-[12px] text-neutral-600 font-light">Client</p>
          </div>
          <div className="text-center">
            <p className="text-[28px] md:text-[32px] font-light text-neutral-900 mb-1">100+</p>
            <p className="text-[12px] text-neutral-600 font-light">Histoires magnifiées</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-[12px] font-medium hover:bg-neutral-800 transition-all duration-300"
          >
            <span>Demander un devis</span>
            <ArrowRight 
              size={13} 
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

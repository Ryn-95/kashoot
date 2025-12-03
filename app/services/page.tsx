'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Video, Users, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: '01',
    title: 'Photo',
    subtitle: 'de mariage',
    description: 'Chaque cliché respire votre amour, pas un algorithme. Nous capturons les moments authentiques avec une approche artistique et discrète.',
    image: '/image/AdobeStock_294334159.jpeg',
    tags: ['Réel', 'Élégant', 'Vibrant'],
    features: [
      'Reportage photo complet',
      'Séance de couple',
      'Retouches professionnelles',
      'Livraison haute résolution',
      'Album photo premium',
    ],
  },
  {
    id: '02',
    title: 'Film',
    subtitle: 'de mariage',
    description: 'Des films qui se ressentent avant de se regarder. Notre approche cinématographique transforme votre journée en œuvre d\'art émotionnelle.',
    image: '/image/cartes-d-invitation-de-mariage-avec-des-fleurs-sur-la-table.jpg',
    tags: ['Authentique', 'Émotionnel', 'Signature'],
    features: [
      'Film complet de la journée',
      'Court-métrage cinématographique',
      'Plans drone aériens',
      'Montage professionnel',
      'Livraison 4K',
    ],
  },
  {
    id: '03',
    title: 'Agence',
    subtitle: 'humaine',
    description: 'Une équipe dédiée à vos plus belles émotions. De la préparation à la livraison, nous vous accompagnons à chaque étape.',
    image: '/image/ceremonie-de-pose-de-la-bague-de-mariage-sur-le-doigt-de-la-mariee-a-l-exterieur.jpg',
    tags: ['Sur-mesure', 'Proximité', 'Excellence'],
    features: [
      'Consultation personnalisée',
      'Coordination jour J',
      'Équipe professionnelle',
      'Support post-production',
      'Accompagnement complet',
    ],
  },
];

const stats = [
  { number: '150+', label: 'Clients satisfaits' },
  { number: '100+', label: 'Histoires magnifiées' },
  { number: '5', label: 'Années d\'expérience' },
];

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-[11px] sm:text-[12px] font-medium text-neutral-500 tracking-[0.2em] uppercase mb-4">
              Nos Services
            </p>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium text-neutral-900 tracking-tight leading-[1.05] mb-4 sm:mb-6">
              Des services sur-mesure
              <br />
              <span className="font-light">pour votre mariage</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto px-4">
              Chez Kashoot, on capture l&apos;émotion brute, sans filtres ni artifices. Juste l&apos;essentiel : vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 md:gap-12`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100">
                    <motion.div
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[4/3]"
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} ${service.subtitle}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="text-[10px] sm:text-[11px] font-medium text-white bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full">
                          {service.id}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-neutral-900 mb-2 sm:mb-3">
                        {service.title} <span className="font-light">{service.subtitle}</span>
                      </h2>
                      <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] sm:text-[12px] font-medium text-neutral-700 px-3 py-1.5 rounded-full bg-neutral-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3 pt-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check size={16} className="text-neutral-900 flex-shrink-0" />
                          <span className="text-[13px] sm:text-[14px] text-neutral-600 font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-[36px] sm:text-[42px] md:text-[48px] font-light text-neutral-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-[13px] sm:text-[14px] text-neutral-600 font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-neutral-900 tracking-tight">
              Prêt à créer votre histoire ?
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
              Discutons de votre projet et trouvons ensemble la formule parfaite pour immortaliser votre mariage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-900 text-white rounded-full text-[13px] sm:text-[14px] font-medium hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Demander un devis</span>
                  <ArrowRight 
                    size={14} 
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-neutral-900 rounded-full text-[13px] sm:text-[14px] font-medium border border-neutral-300 hover:border-neutral-900 transition-all duration-300"
                >
                  Voir les tarifs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



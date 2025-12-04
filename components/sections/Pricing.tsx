'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const packs = [
  {
    name: 'Élégance discrète',
    subtitle: '',
    features: [
      'Reportage photo & vidéo complet',
      'Captation des moments forts',
      'Retouches photos professionnelles',
      'Film résumé (25 min à 1h)',
      'Livraison via lien sécurisé',
    ],
  },
  {
    name: 'Essentiel',
    subtitle: 'Pour commencer',
    features: [
      'Reportage photo & vidéo complet',
      'Captation des moments forts',
      'Retouches photos professionnelles',
      'Film résumé (25 min à 1h)',
      'Livraison via lien sécurisé',
    ],
  },
  {
    name: 'Élégance',
    subtitle: 'Le plus populaire',
    features: [
      'Photo & vidéo journée complète',
      'Retouches photo avancées',
      'Plans drone cinématographiques',
      'Film complet + court-métrage',
      'Créatrice de contenu (backstages)',
      'Livraison lien + clé USB premium',
    ],
    highlighted: true,
  },
  {
    name: 'Prestige',
    subtitle: 'L\'expérience ultime',
    features: [
      'Photo + vidéo (préparatifs, cérémonie)',
      'Drone + cortège filmé',
      'Court-métrage cinéma premium',
      'Photos retouchées en profondeur',
      'Film complet (25 min à 2h)',
      'Projection le soir du mariage',
      'Créatrice de contenu (micro, Insta360, DJI)',
      'Livraison lien + clé USB + album offert',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle gradient orbs - Apple style */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1200px] mx-auto relative">
        {/* Header - Apple/Tesla style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 mb-6">
            <Sparkles size={14} className="text-gray-600" />
            <span className="text-[11px] font-medium text-gray-600 tracking-wider uppercase">
              Nos Offres
            </span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-semibold text-gray-900 mb-4 tracking-tight leading-[1.1]">
            Choisissez Votre Pack
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[600px] mx-auto leading-relaxed">
            Des formules pensées pour capturer chaque instant de votre mariage avec excellence
          </p>
        </motion.div>

        {/* Grid 3 packs - Airbnb/Apple style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-white rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                pack.highlighted 
                  ? 'border-2 border-gray-900 shadow-xl shadow-gray-900/10' 
                  : 'border border-gray-200 hover:border-gray-300 shadow-lg shadow-gray-900/5'
              }`}
            >
              {/* Popular badge */}
              {pack.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-[11px] font-medium tracking-wide">
                    LE PLUS POPULAIRE
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-[28px] font-semibold text-gray-900 mb-2">
                  {pack.name}
                </h3>
                <p className="text-[13px] text-gray-500">
                  {pack.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {pack.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      pack.highlighted ? 'bg-gray-900' : 'bg-gray-100'
                    }`}>
                      <Check size={12} className={pack.highlighted ? 'text-white' : 'text-gray-600'} strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button - Tesla/Apple style */}
              <Link href="/contact" className={`group/btn w-full py-4 rounded-2xl text-[15px] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                pack.highlighted
                  ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20'
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
              }`}>
                <span>Choisir {pack.name}</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note - Apple style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[13px] text-gray-500 mb-2">
            Chaque pack peut être personnalisable selon vos besoins.
          </p>
          <p className="text-[13px] text-gray-500">
            Besoin d'une formule sur mesure ?{' '}
            <Link href="/contact" className="text-gray-900 font-medium hover:underline">
              Contactez-nous
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import React from 'react';
import { Sparkles, Film, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const benefits = [
  {
    icon: Sparkles,
    title: 'Sur-mesure',
    description: 'Chaque film reflète votre histoire unique.',
  },
  {
    icon: Film,
    title: 'Qualité cinéma',
    description: 'Matériel haut de gamme. Image claire et vivante.',
  },
  {
    icon: Heart,
    title: 'Accompagnement',
    description: 'Une équipe dédiée du début à la livraison.',
  },
];

export default function WhyKashoot() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header ultra minimaliste */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-light text-neutral-500 tracking-[0.3em] uppercase mb-4 block">
            Nos valeurs
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight mb-4 md:mb-6">
            Pourquoi Kashoot
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Spécialisés dans la photo et vidéo de mariage.<br />
            Nous créons des films élégants et intemporels.
          </p>
        </div>

        {/* Grille premium avec espacement généreux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="text-center">
                  {/* Icône ultra fine et minimaliste */}
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 md:mb-8">
                    <Icon 
                      size={24} 
                      strokeWidth={1} 
                      className="text-neutral-900"
                    />
                  </div>
                  
                  {/* Titre épuré */}
                  <h3 className="text-lg md:text-xl font-light text-neutral-900 mb-3 tracking-tight">
                    {benefit.title}
                  </h3>
                  
                  {/* Description courte et impactante */}
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light max-w-xs mx-auto">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


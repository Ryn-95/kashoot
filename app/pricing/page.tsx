import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Tarifs - Kashoot',
  description: 'Découvrez nos formules de films de mariage sur mesure. Contactez-nous pour un devis personnalisé.',
};

const pricingPlans = [
  {
    name: 'Essentiel',
    tagline: 'Pour capturer l\'essentiel de votre journée',
    features: [
      'Couverture 6 heures',
      'Un vidéaste professionnel',
      'Film de 8-10 minutes',
      'Musique soigneusement sélectionnée',
      'Livraison digitale HD',
      'Révisions incluses',
    ],
  },
  {
    name: 'Signature',
    tagline: 'Notre formule la plus populaire',
    features: [
      'Couverture 10 heures',
      'Deux vidéastes professionnels',
      'Film de 15-20 minutes',
      'Teaser 1-2 minutes',
      'Drone (selon autorisation)',
      'Musique premium',
      'Livraison digitale 4K',
      'Révisions illimitées',
      'USB personnalisé',
    ],
    featured: true,
  },
  {
    name: 'Prestige',
    tagline: 'L\'expérience cinématographique complète',
    features: [
      'Couverture illimitée',
      'Équipe complète (3 vidéastes)',
      'Film cinématique 25-35 minutes',
      'Teaser + Highlights',
      'Drone + Steadicam',
      'Enregistrement audio professionnel',
      'Étalonnage couleur avancé',
      'Livraison 4K + formats web',
      'Révisions illimitées',
      'Coffret luxe + USB',
      'Séance engagement offerte',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-32 bg-cream min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-xl mx-auto text-center">
          <SectionTitle 
            centered
            subtitle="Chaque mariage est unique. Nos formules s'adaptent à vos besoins. Contactez-nous pour un devis personnalisé."
          >
            Nos Formules
          </SectionTitle>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card 
                  className={`
                    flex flex-col h-full relative
                    ${plan.featured ? 'ring-2 ring-black md:scale-105' : ''}
                  `}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1.5 rounded-full text-sm font-medium">
                      Populaire
                    </div>
                  )}
                  
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-text mb-8">{plan.tagline}</p>

                    <div className="mb-8">
                      <div className="text-4xl font-bold mb-2">Sur devis</div>
                      <p className="text-sm text-gray-text">Tarif personnalisé selon vos besoins</p>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button 
                        variant={plan.featured ? 'dark' : 'light'}
                        className="w-full"
                      >
                        Demander un devis
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 mt-32">
        <ScrollReveal>
          <div className="max-w-screen-lg mx-auto text-center bg-white rounded-3xl p-12 md:p-16 shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une Question ?
            </h2>
            <p className="text-lg text-gray-text mb-8 max-w-2xl mx-auto">
              Chaque mariage étant unique, nous serions ravis d'échanger avec vous pour créer 
              une formule sur mesure qui correspond parfaitement à vos attentes.
            </p>
            <Link href="/contact">
              <Button variant="dark" className="text-lg px-10 py-4">
                Discutons de votre projet
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}


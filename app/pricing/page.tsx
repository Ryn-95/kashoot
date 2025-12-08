import React from 'react';
import type { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';

export const metadata: Metadata = {
  title: 'Tarifs - Kashoot',
  description: 'Découvrez nos formules de films de mariage sur mesure. Contactez-nous pour un devis personnalisé.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Pricing />
    </main>
  );
}

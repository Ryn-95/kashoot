import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'À propos - Kashoot',
  description: 'Découvrez Kashoot, vidéaste passionné spécialisé dans les films de mariage haut de gamme.',
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
          alt="À propos de Kashoot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Capturer l'authenticité de chaque instant
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-screen-lg mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Notre Mission
              </h2>
              <p className="text-xl text-gray-text leading-relaxed">
                Chez Kashoot, nous croyons que chaque mariage est unique. Notre mission est de capturer 
                l'essence de votre histoire d'amour avec authenticité et élégance, créant des films 
                intemporels que vous chérirez pour toujours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800"
                  alt="Notre approche"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Une Approche Haut de Gamme
                </h2>
                <p className="text-lg text-gray-text mb-6 leading-relaxed">
                  Nous utilisons un matériel cinéma professionnel pour garantir une qualité d'image 
                  exceptionnelle. Chaque plan est pensé, chaque moment est capturé avec soin.
                </p>
                <p className="text-lg text-gray-text mb-8 leading-relaxed">
                  Notre style se caractérise par son élégance discrète, privilégiant l'émotion 
                  authentique aux artifices. Nous sommes là pour raconter votre histoire, pas la nôtre.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge>Cinématique</Badge>
                  <Badge>Authentique</Badge>
                  <Badge>Élégant</Badge>
                  <Badge>Intemporel</Badge>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <SectionTitle centered>Nos Valeurs</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              {
                title: 'Authenticité',
                description: 'Nous capturons les vrais moments, les vraies émotions, sans mise en scène artificielle.',
              },
              {
                title: 'Excellence',
                description: 'Du matériel haut de gamme au montage final, chaque détail compte pour créer un film d\'exception.',
              },
              {
                title: 'Proximité',
                description: 'Nous prenons le temps de vous connaître pour mieux raconter votre histoire unique.',
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-text leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


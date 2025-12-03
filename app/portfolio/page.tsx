'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Badge from '@/components/ui/Badge';

const categories = ['Tous', 'Château', 'Destination', 'Intime', 'Urbain'];

const portfolioItems = [
  {
    title: 'Mariage au Château',
    category: 'Château',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Destination Provence',
    category: 'Destination',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Cérémonie Intime',
    category: 'Intime',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Paris Love Story',
    category: 'Urbain',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Élégance Royale',
    category: 'Château',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Bord de Mer',
    category: 'Destination',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'Tous'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-32 pb-32 bg-cream min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-xl mx-auto text-center">
          <SectionTitle 
            centered
            subtitle="Découvrez nos films de mariage, chacun racontant une histoire d'amour unique."
          >
            Portfolio
          </SectionTitle>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-black/20 hover:border-black'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div 
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedVideo(item.video)}
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                          <Maximize2 size={24} className="text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <Badge>{item.category}</Badge>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}


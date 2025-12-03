'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Capturer l'Instant",
    badge: 'New',
    image: '/image/AdobeStock_235776603.jpeg',
  },
  {
    title: "Souffle d'Amour",
    badge: 'New',
    image: '/image/AdobeStock_94726509.jpeg',
  },
  {
    title: 'Beauté Éternelle',
    badge: 'New',
    image: '/image/image00022.jpg',
  },
  {
    title: "Instants d'Émotion",
    badge: 'Popular',
    image: '/image/DSC09516.jpg',
  },
  {
    title: "Lumière d'Amour",
    badge: 'Effect',
    image: '/image/AdobeStock_306789288.jpeg',
  },
  {
    title: 'Souvenir Authentique',
    badge: 'Effect',
    image: '/image/KASHOOT-40.jpg',
  },
];

export default function BlogGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] font-medium text-neutral-400 tracking-[0.2em] uppercase block mb-5">
            Blog
          </span>
          <h2 className="text-[36px] md:text-[44px] font-light text-neutral-900 tracking-[-0.02em] leading-[1.05] mb-3">
            Derniers mariages
          </h2>
          <p className="text-[14px] md:text-[15px] text-neutral-500 max-w-[480px] mx-auto font-light leading-relaxed">
            Découvrez nos plus beaux moments capturés
          </p>
        </motion.div>

        {/* Grid épuré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-4 rounded-lg">
                  <motion.div
                    animate={{ scale: isHovered ? 1.03 : 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Overlay gradient au hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-[0.1em] uppercase">
                      {post.badge}
                    </span>
                  </div>

                  {/* Icon arrow au hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-3 right-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={13} className="text-neutral-900" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-medium text-neutral-900 tracking-tight">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


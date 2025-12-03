'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    src: '/image/VIDEO1.mp4',
    title: 'Film de mariage',
    thumbnail: '/image/DSC09330.jpg',
  },
  {
    id: 2,
    src: '/image/VIDEO2.mp4',
    title: 'Teaser mariage',
    thumbnail: '/image/KASHOOT-40.jpg',
  },
  {
    id: 3,
    src: '/image/VIDEO3.mp4',
    title: 'Court métrage',
    thumbnail: '/image/DSC07875.jpeg',
  },
  {
    id: 4,
    src: '/image/VIDEO11.mp4',
    title: 'Mariage',
    thumbnail: '/image/IMG_4109.JPG',
  },
];

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const selectedVideoData = videos.find(v => v.id === selectedVideo);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Hero minimaliste */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight mb-4">
              Films
            </h1>
            <p className="text-neutral-600 font-light text-sm md:text-base max-w-md mx-auto">
              Des films qui capturent l&apos;essence de votre histoire
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid minimaliste */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-video overflow-hidden bg-neutral-100 cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay simple */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Play button minimaliste */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <Play size={20} className="text-neutral-900 ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Titre */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-light">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal minimaliste */}
      <AnimatePresence>
        {selectedVideo && selectedVideoData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
              <video
                src={selectedVideoData.src}
                controls
                autoPlay
                className="w-full h-full"
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

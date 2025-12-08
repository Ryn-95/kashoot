'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: 'Jane Smith',
    phone: '0123456789',
    date: '',
    location: 'Château de Chantilly, Paris',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons très vite.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-4 pb-2">
      {/* Container avec espace blanc minimal */}
      <div className="w-full mx-auto px-2 sm:px-3 md:px-3 py-0">
        {/* Image de fond arrondie */}
        <div className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden">
          <div className="relative w-full h-[800px] sm:h-[900px] md:h-[1100px] lg:h-[1200px]">
            <Image
              src="/image/cartes-d-invitation-de-mariage-avec-des-fleurs-sur-la-table.jpg"
              alt="Beach wedding background"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            
            {/* Header et Formulaire par-dessus l'image - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-12">
              {/* Header - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-6 sm:mb-8 md:mb-10 w-full px-4"
              >
                <p className="text-[11px] sm:text-[12px] md:text-[13px] text-white font-medium mb-3 sm:mb-4 tracking-wide uppercase">
                  Contact
                </p>
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-medium text-white mb-4 sm:mb-5 tracking-tight leading-[1.1]">
                  Contactez-nous
                </h1>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white font-medium max-w-[600px] mx-auto px-2 mb-2">
                  Envoyez votre demande, et recevez votre devis en moins de 7 heures.
                </p>
              </motion.div>

              {/* Form Card - Responsive - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-[550px] mx-auto px-4 sm:px-6 md:px-8"
              >
                <form onSubmit={handleSubmit} className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
            <div className="space-y-4 sm:space-y-5">
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-[10px] sm:text-[11px] font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-[13px] sm:text-[14px] text-neutral-900 bg-white placeholder:text-neutral-400"
                />
              </div>

              {/* Numéro de téléphone */}
              <div>
                <label htmlFor="phone" className="block text-[10px] sm:text-[11px] font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-[13px] sm:text-[14px] text-neutral-900 bg-white placeholder:text-neutral-400"
                />
              </div>

              {/* Date de mariage */}
              <div>
                <label htmlFor="date" className="block text-[10px] sm:text-[11px] font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                  Date de mariage
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="jj/mm/aaaa"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-[13px] sm:text-[14px] text-neutral-900 bg-white placeholder:text-neutral-400"
                  />
                  <Calendar className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={14} />
                </div>
              </div>

              {/* Lieu du mariage */}
              <div>
                <label htmlFor="location" className="block text-[10px] sm:text-[11px] font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                  Lieu du mariage
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-[13px] sm:text-[14px] text-neutral-900 bg-white placeholder:text-neutral-400"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[10px] sm:text-[11px] font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Parlez-nous de votre histoire, vos envies, votre style de mariage..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all text-[13px] sm:text-[14px] text-neutral-900 bg-white resize-none placeholder:text-neutral-400"
                />
              </div>

              {/* Submit Button - Centered */}
              <div className="flex justify-center mt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 bg-neutral-900 text-white rounded-full text-[13px] sm:text-[14px] font-medium hover:bg-neutral-800 transition-colors shadow-lg"
                >
                  Envoyer
                </motion.button>
              </div>
                </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

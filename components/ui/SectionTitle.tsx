'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ 
  children, 
  className, 
  subtitle,
  centered = false 
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(centered && 'text-center')}
    >
      <h2 className={cn(
        'text-[32px] md:text-[36px] font-semibold text-gray-900 mb-3 leading-tight tracking-tight',
        className
      )}>
        {children}
      </h2>
      {subtitle && (
        <p className="text-[14px] text-gray-600 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}


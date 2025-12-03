import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-[24px] overflow-hidden shadow-sm',
        hover && 'transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}


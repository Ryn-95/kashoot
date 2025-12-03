import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark' | 'ghost';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'light', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105',
        {
          'bg-white text-black border border-black hover:bg-black hover:text-white': variant === 'light',
          'bg-black text-white border border-black hover:bg-white hover:text-black': variant === 'dark',
          'bg-transparent text-current hover:bg-white/10': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}


import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-[11px] font-medium bg-white text-black rounded-full border border-black/10',
        className
      )}
    >
      {children}
    </span>
  );
}


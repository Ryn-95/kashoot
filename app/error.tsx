'use client';

import React from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Une erreur est survenue
        </h1>
        <p className="text-gray-600 mb-8">
          Désolé, quelque chose s'est mal passé. Veuillez réessayer.
        </p>
        <Button onClick={reset} variant="dark">
          Réessayer
        </Button>
      </div>
    </div>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kashoot.fr'),
  title: {
    default: "Kashoot - Films de mariage haut de gamme",
    template: "%s | Kashoot",
  },
  description: "Kashoot transforme chaque mariage en un film sincère, élégant et inoubliable. Vidéaste professionnel spécialisé dans les mariages d'exception.",
  keywords: ["vidéaste mariage", "film mariage", "mariage luxe", "vidéo mariage", "wedding videographer", "cinéaste mariage", "mariage premium"],
  authors: [{ name: "Kashoot" }],
  creator: "Kashoot",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.kashoot.fr",
    title: "Kashoot - Films de mariage haut de gamme",
    description: "Kashoot transforme chaque mariage en un film sincère, élégant et inoubliable.",
    siteName: "Kashoot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashoot - Films de mariage haut de gamme",
    description: "Kashoot transforme chaque mariage en un film sincère, élégant et inoubliable.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


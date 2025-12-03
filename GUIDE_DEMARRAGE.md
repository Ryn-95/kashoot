# Guide de Démarrage - Site Kashoot

Bienvenue sur votre nouveau site web premium pour Kashoot ! Ce guide vous aidera à démarrer rapidement.

## 🚀 Installation

Les dépendances sont déjà installées. Si vous avez besoin de les réinstaller :

```bash
npm install
```

## 🏃 Lancer le site en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le site.

## 📦 Construire pour la production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
kashoot/
├── app/                          # Pages Next.js (App Router)
│   ├── page.tsx                 # Page d'accueil
│   ├── about/page.tsx           # Page À propos
│   ├── portfolio/page.tsx       # Page Portfolio
│   ├── pricing/page.tsx         # Page Tarifs
│   ├── contact/page.tsx         # Page Contact
│   ├── layout.tsx               # Layout global
│   ├── globals.css              # Styles globaux
│   ├── sitemap.ts               # Sitemap pour SEO
│   └── manifest.ts              # Manifest PWA
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation capsule noire
│   │   └── Footer.tsx          # Footer
│   ├── sections/               # Sections de la page d'accueil
│   │   ├── Hero.tsx
│   │   ├── QuoteSection.tsx
│   │   ├── WhyKashoot.tsx
│   │   ├── Services.tsx
│   │   ├── PortfolioGrid.tsx
│   │   └── BlogGrid.tsx
│   └── ui/                     # Composants UI réutilisables
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── SectionTitle.tsx
│       └── ScrollReveal.tsx
├── lib/
│   └── utils.ts                # Utilitaires (cn function)
└── public/                     # Assets statiques
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

- **cream** : `#F5F3F0` (background principal)
- **gray-text** : `#6B6B6B` (texte secondaire)
- Noir et blanc pour le reste

### Typographie

Le site utilise **Inter** comme police principale et **Dancing Script** pour le logo.

### Images et vidéos

Actuellement, le site utilise des images de placeholder depuis Unsplash. Pour remplacer avec vos vraies images :

1. Ajoutez vos images dans le dossier `public/`
2. Remplacez les URLs dans les composants
3. Les URLs Unsplash se trouvent principalement dans :
   - `components/sections/Hero.tsx`
   - `components/sections/Services.tsx`
   - `components/sections/PortfolioGrid.tsx`
   - `components/sections/BlogGrid.tsx`
   - `app/about/page.tsx`
   - `app/portfolio/page.tsx`

Exemple de remplacement :

```tsx
// Avant
src="https://images.unsplash.com/photo-123456..."

// Après
src="/images/mon-image.jpg"
```

## 📝 Contenu

### Modifier les textes

Tous les textes sont directement dans les composants React. Vous pouvez les modifier facilement :

- **Page d'accueil** : `app/page.tsx` + composants dans `components/sections/`
- **À propos** : `app/about/page.tsx`
- **Portfolio** : `app/portfolio/page.tsx`
- **Tarifs** : `app/pricing/page.tsx`
- **Contact** : `app/contact/page.tsx`

### Formulaire de contact

Le formulaire dans `app/contact/page.tsx` est actuellement configuré avec un `console.log`.

Pour l'intégrer à un service d'email :

**Option 1 : EmailJS (gratuit)**
```bash
npm install @emailjs/browser
```

**Option 2 : Resend (moderne)**
```bash
npm install resend
```

**Option 3 : Nodemailer**
```bash
npm install nodemailer
```

## 🎬 Vidéos du portfolio

Pour ajouter vos vraies vidéos YouTube/Vimeo :

Dans `app/portfolio/page.tsx`, remplacez les URLs placeholder :

```tsx
video: 'https://www.youtube.com/embed/VOTRE_VIDEO_ID'
```

## 📱 Responsive

Le site est entièrement responsive grâce à Tailwind CSS. Les breakpoints :

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🔍 SEO

Le site inclut :

- ✅ Métadonnées optimisées (Open Graph, Twitter Cards)
- ✅ Sitemap automatique (`/sitemap.xml`)
- ✅ Robots.txt
- ✅ Manifest PWA

Pour personnaliser l'URL du site :

Dans `app/layout.tsx` et `app/sitemap.ts`, remplacez `https://www.kashoot.fr` par votre vraie URL.

## 🚀 Déploiement

### Vercel (recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet GitHub
3. Vercel détectera automatiquement Next.js
4. Déployez !

### Netlify

1. Build command : `npm run build`
2. Publish directory : `.next`

## 🎯 Prochaines étapes

1. **Remplacez les images** par vos vraies photos de mariage
2. **Ajoutez vos vidéos** YouTube/Vimeo dans le portfolio
3. **Configurez le formulaire** de contact avec un service d'email
4. **Personnalisez les textes** selon votre ton et style
5. **Ajoutez Google Analytics** si souhaité
6. **Configurez votre domaine** personnalisé

## 📞 Support

Pour toute question technique, consultez la documentation :

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Bon lancement ! 🎉**


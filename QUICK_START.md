# 🚀 Démarrage Rapide - Kashoot

## En 3 Commandes

```bash
# 1. Installer les dépendances (déjà fait normalement)
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir dans votre navigateur
# http://localhost:3000
```

## ✅ Ce qui fonctionne déjà

- ✅ Page d'accueil avec Hero et 6 sections
- ✅ Page À propos
- ✅ Page Portfolio avec filtres
- ✅ Page Tarifs (3 formules)
- ✅ Page Contact avec formulaire
- ✅ Navigation capsule noire sticky
- ✅ Footer avec réseaux sociaux
- ✅ Animations Framer Motion
- ✅ 100% Responsive
- ✅ SEO optimisé

## 📋 To-Do List Personnalisation

### Priorité 1 - Images & Vidéos

- [ ] Remplacer les images Unsplash par vos vraies photos
  - Fichiers concernés : `components/sections/*.tsx`, `app/about/page.tsx`
  - Mettre vos images dans `public/images/`
  - Remplacer les URLs : `https://images.unsplash.com/...` → `/images/votre-image.jpg`

- [ ] Ajouter vos vraies vidéos YouTube/Vimeo
  - Fichier : `app/portfolio/page.tsx`
  - Remplacer : `video: 'https://www.youtube.com/embed/...'`

### Priorité 2 - Contenu

- [ ] Personnaliser les textes
  - Hero : `components/sections/Hero.tsx`
  - Sections : `components/sections/*.tsx`
  - Pages : `app/*/page.tsx`

- [ ] Mettre vos vraies informations de contact
  - Fichier : `app/contact/page.tsx`
  - Email, téléphone, réseaux sociaux

### Priorité 3 - Formulaire

- [ ] Configurer l'envoi d'emails
  - Fichier : `app/contact/page.tsx`
  - Options : EmailJS, Resend, Nodemailer
  - Voir `GUIDE_DEMARRAGE.md` pour les instructions

### Priorité 4 - SEO

- [ ] Changer l'URL du site
  - Fichiers : `app/layout.tsx`, `app/sitemap.ts`
  - Remplacer `https://www.kashoot.fr` par votre vraie URL

- [ ] Ajouter Google Analytics (optionnel)
  - Voir `DEPLOYMENT.md` section Analytics

## 🎨 Fichiers Clés à Connaître

| Fichier | Description |
|---------|-------------|
| `app/page.tsx` | Page d'accueil |
| `app/layout.tsx` | Layout global + SEO |
| `app/globals.css` | Styles globaux |
| `components/layout/Navbar.tsx` | Navigation |
| `components/sections/*.tsx` | Sections homepage |
| `tailwind.config.ts` | Configuration couleurs |

## 🐛 Dépannage

### Le site ne démarre pas
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Les images ne s'affichent pas
- Vérifier que les URLs sont correctes
- Vérifier `next.config.js` pour les domaines autorisés

### Erreur de build
```bash
npm run build
# Lire les erreurs et corriger
```

## 📚 Documentation Complète

- **GUIDE_DEMARRAGE.md** - Guide détaillé
- **DEPLOYMENT.md** - Comment déployer
- **FEATURES.md** - Toutes les fonctionnalités
- **SUMMARY.md** - Résumé complet

## 🎯 Check-list Avant Mise en Ligne

- [ ] Toutes les images remplacées
- [ ] Toutes les vidéos ajoutées
- [ ] Textes personnalisés
- [ ] Formulaire de contact configuré
- [ ] Informations de contact à jour
- [ ] URL du site changée dans les fichiers
- [ ] Build réussi (`npm run build`)
- [ ] Test sur mobile
- [ ] Test sur tous les navigateurs

## 🚀 Déployer en 2 Minutes

**Vercel (recommandé)**

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Importer le projet
4. Déployer !

**Netlify**

1. Aller sur [netlify.com](https://netlify.com)
2. Drag & drop le dossier du projet
3. C'est en ligne !

---

**Besoin d'aide ?** Consultez les autres fichiers .md de documentation !


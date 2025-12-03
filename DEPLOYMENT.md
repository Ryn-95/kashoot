# Guide de Déploiement - Kashoot

Ce guide vous aide à déployer votre site Kashoot en production.

## 🚀 Option 1 : Vercel (Recommandé)

Vercel est la plateforme créée par l'équipe de Next.js. C'est l'option la plus simple et rapide.

### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub, GitLab ou Bitbucket

2. **Connecter votre repository**
   - Cliquez sur "Add New Project"
   - Importez votre repository Git
   - Vercel détecte automatiquement Next.js

3. **Configurer (déjà fait automatiquement)**
   ```
   Framework: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en 2-3 minutes !

5. **Domaine personnalisé**
   - Dans les settings du projet
   - Domains → Add Domain
   - Suivez les instructions pour configurer vos DNS

### Avantages Vercel :
- ✅ Déploiement automatique à chaque push Git
- ✅ Preview automatique pour chaque PR
- ✅ CDN mondial ultra-rapide
- ✅ SSL gratuit
- ✅ Optimisations Next.js automatiques

## 🌐 Option 2 : Netlify

### Étapes :

1. **Créer un compte**
   - [netlify.com](https://netlify.com)

2. **Configuration**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Variables d'environnement** (si nécessaire)
   ```
   NODE_VERSION=18
   ```

4. **Déployer**
   - Drag & drop ou connexion Git

## 🐳 Option 3 : Docker

### Créer un Dockerfile :

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

### Construire et lancer :

```bash
docker build -t kashoot .
docker run -p 3000:3000 kashoot
```

## 📦 Option 4 : VPS (DigitalOcean, Linode, etc.)

### Installation sur Ubuntu/Debian :

```bash
# Installer Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Cloner votre projet
git clone https://github.com/votre-repo/kashoot.git
cd kashoot

# Installer les dépendances
npm install

# Build
npm run build

# Installer PM2 pour garder l'app en ligne
sudo npm install -g pm2

# Lancer l'application
pm2 start npm --name "kashoot" -- start

# Auto-redémarrage au reboot
pm2 startup
pm2 save
```

### Nginx comme reverse proxy :

```nginx
server {
    listen 80;
    server_name kashoot.fr www.kashoot.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔒 SSL/HTTPS

### Avec Certbot (Let's Encrypt - Gratuit) :

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d kashoot.fr -d www.kashoot.fr
```

## 🌍 Configurer le DNS

Chez votre registrar de domaine (OVH, Gandi, Namecheap, etc.) :

### Pour Vercel/Netlify :
```
Type: A
Name: @
Value: [IP fournie par Vercel/Netlify]

Type: CNAME
Name: www
Value: [URL fournie par Vercel/Netlify]
```

### Pour VPS :
```
Type: A
Name: @
Value: [IP de votre serveur]

Type: A
Name: www
Value: [IP de votre serveur]
```

## 📊 Analytics (optionnel)

### Google Analytics :

1. Créer une propriété GA4
2. Installer dans `app/layout.tsx` :

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔍 Vérifications post-déploiement

- [ ] Le site charge correctement
- [ ] Toutes les pages sont accessibles
- [ ] Les images s'affichent
- [ ] Les formulaires fonctionnent
- [ ] Le site est responsive sur mobile
- [ ] SSL/HTTPS est actif (cadenas vert)
- [ ] `/sitemap.xml` est accessible
- [ ] `/robots.txt` est accessible
- [ ] Les métadonnées Open Graph apparaissent sur les réseaux sociaux

## 🎯 Performance

Pour vérifier les performances :
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🆘 Dépannage

### Le build échoue
```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run build
```

### Erreur de mémoire lors du build
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Les images ne s'affichent pas
- Vérifiez que les URLs sont correctes
- Vérifiez `next.config.js` pour les domaines autorisés

---

**Besoin d'aide ?** Consultez la [documentation Next.js deployment](https://nextjs.org/docs/deployment)


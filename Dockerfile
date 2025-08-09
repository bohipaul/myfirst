# Utilise une image Node.js officielle avec Alpine pour la production (version sécurisée)
FROM node:20-alpine3.20

# Crée un utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Définit le répertoire de travail dans le container
WORKDIR /app

# Copie les fichiers de configuration pour la build
COPY package*.json ./
COPY next.config.mjs ./
COPY jsconfig.json ./
COPY postcss.config.mjs ./

# Installe les dépendances
RUN npm ci --only=production

# Copie le code source
COPY --chown=nextjs:nodejs src ./src
COPY --chown=nextjs:nodejs public ./public

# Compile l'application Next.js
RUN npm run build

# Installe serve pour servir les fichiers statiques
RUN npm install -g serve@14.2.3

# Bascule vers l'utilisateur non-root
USER nextjs

# Expose le port 3002
EXPOSE 3002

# Commande pour démarrer l'application
CMD ["serve", "-s", "out", "-l", "3002"]
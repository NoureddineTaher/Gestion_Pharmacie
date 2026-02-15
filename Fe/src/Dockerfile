# Étape de build
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Compiler Angular (dossier de sortie "dist/<nom-du-projet>")
RUN npm run build --prod

# Étape de production (serveur statique nginx)
FROM nginx:stable-alpine
# Copier le build dans nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Port exposé par nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

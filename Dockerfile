# Etapa de build con Node 20
FROM node:20-alpine AS build

WORKDIR /app

# Copia dependencias e instala
COPY package*.json ./
RUN npm ci

# Copia el resto del proyecto y compila
COPY . .
RUN npm run build

# -----------------------------
# Etapa de servidor con Nginx
# -----------------------------
FROM nginx:alpine

# Copia la carpeta dist generada por Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

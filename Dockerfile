# Etapa 1: Build con Node
FROM node:18-alpine AS build
WORKDIR /app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del código y compilar
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

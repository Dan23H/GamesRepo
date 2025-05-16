FROM node:slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
RUN npm install

COPY . .

# Build para producción
RUN npm run build

# Exponer el puerto y correr en producción
EXPOSE 3000
CMD ["npm", "start"]

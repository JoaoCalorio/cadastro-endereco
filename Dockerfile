FROM node:18

# Diretório da aplicação
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando para rodar a API
CMD ["npm", "start"]

# Use a imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de dependência
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto para o contêiner
COPY . .

# Exponha a porta necessária
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
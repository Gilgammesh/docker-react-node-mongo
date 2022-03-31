FROM node:16.14.2-slim

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -D

COPY . .

EXPOSE 4000

CMD ["node", "src/index"] 
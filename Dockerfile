FROM node:18.12.0-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]

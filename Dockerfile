FROM node:18.12.0

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

RUN npm install -g serve


EXPOSE 5000


CMD "serve" "-s" "build"
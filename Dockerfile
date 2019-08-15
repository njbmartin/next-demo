FROM node:lts

WORKDIR /app

COPY package.json /app

RUN npm install

EXPOSE 80

COPY . /app

RUN npm run build
CMD npm start -- --port 80
FROM node:14.5.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

VOLUME [ "/app/node_modules" ]

CMD ["node", "dist/index.js"]


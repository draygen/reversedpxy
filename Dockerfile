<<<<<<< HEAD
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
=======
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
>>>>>>> e7dac3c06bacc00d43a45cf3e847f539db1991e2

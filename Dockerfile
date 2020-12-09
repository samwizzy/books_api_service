FROM node:14.15.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]
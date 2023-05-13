FROM node:18-slim

# setup application

RUN mkdir -p /home/app
WORKDIR /home/app

COPY .npmrc ./
COPY package.json ./

RUN npm install

COPY . ./
COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
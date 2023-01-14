FROM node:16

#Working DIR 
WORKDIR /usr/src/app

COPY package.json ./
#ENV file 
COPY .env ./

RUN npm install 

COPY . .

RUN npm run build

## expose API port 

EXPOSE 3000


CMD ["node", "build/index.js"]
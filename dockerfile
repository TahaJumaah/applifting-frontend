FROM node:22.3-bookworm

WORKDIR /app

COPY . .

RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3000
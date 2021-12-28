FROM node:alpine

WORKDIR "/app"

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 5000

VOLUME [ "/app/node_modules" ]

CMD [ "npm" , "start"]

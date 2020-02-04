FROM node:13.5.0-alpine
WORKDIR /client
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
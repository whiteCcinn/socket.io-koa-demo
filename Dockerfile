FROM node:latest

LABEL maintainer="caiwenhui <471113744@qq.com>"

COPY ./src /www

WORKDIR /www

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
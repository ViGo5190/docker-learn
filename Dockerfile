FROM node:6.7

MAINTAINER Stanislav Gumeniuk i@vigo.su

ADD . /code

WORKDIR /code

RUN npm i

CMD npm start

EXPOSE 3001
MAINTAINER Stanislav Gumeniuk i@vigo.su

FROM node:6.7

ADD . /code

WORKDIR /code

RUN npm i

CMD npm start

EXPOSE 3001
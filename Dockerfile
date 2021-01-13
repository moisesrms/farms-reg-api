FROM node:14-alpine 

WORKDIR /src

ADD package.json /src

RUN yarn install --silent

ADD . /src

CMD yarn start
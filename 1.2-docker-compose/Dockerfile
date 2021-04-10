FROM node:15.14-alpine

LABEL maintainer=rrequero@gmail.com

ENV USER myapp
ENV NAME myapp

RUN apk update && apk upgrade && \
  apk add --no-cache --update bash git openssh python alpine-sdk && \
  addgroup $USER && adduser -s /bin/bash -D -G $USER $USER && \
  mkdir -p /opt/$NAME

WORKDIR /opt/$NAME
COPY package*.json .
RUN npm install

COPY ./index.js .
RUN chown $USER:$USER /opt/$NAME
EXPOSE 3000
USER $USER

ENTRYPOINT [ "npm" ]
CMD ["start"]

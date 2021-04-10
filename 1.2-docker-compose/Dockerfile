FROM node:15.14-alpine
LABEL maintainer=rrequero@gmail.com

ENV USER myapp
ENV NAME myapp
ENV PORT 3000

RUN apk update && apk upgrade && \
  apk add --no-cache --update bash git openssh python alpine-sdk && \
  addgroup $USER && adduser -s /bin/bash -D -G $USER $USER && \
  mkdir -p /opt/$NAME 

COPY package*.json /opt/$NAME/
WORKDIR /opt/$NAME
RUN npm install
COPY ./index.js /opt/$NAME

RUN chown $USER:$USER /opt/$NAME

EXPOSE 3000
USER $USER

ENTRYPOINT [ "npm" ]
CMD ["start"]



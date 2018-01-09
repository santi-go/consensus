FROM node:7.9.0

ARG HOST_USER_ID=1000
ARG HOST_GROUP_ID=1000

ENV USER_ID ${HOST_USER_ID}
ENV GROUP_ID ${HOST_GROUP_ID}

RUN groupmod -g $GROUP_ID node \
 && usermod -u $USER_ID -g $GROUP_ID node

RUN echo "UID for node: " $USER_ID
RUN echo "GID for node: " $GROUP_ID

ENV TEST /test
RUN mkdir -p $TEST
WORKDIR $TEST

RUN chown node:node $TEST
USER node

CMD npm install

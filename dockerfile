FROM node:22.14.0-alpine

ARG USERNAME=node

ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apk --no-cache add shadow bash

RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

RUN npm install -g vite@latest

WORKDIR /app

USER $USERNAME

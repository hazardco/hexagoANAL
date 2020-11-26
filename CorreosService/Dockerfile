FROM node:10.13.0-alpine
# Env

ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

# Create Directory for the Container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json /usr/src/app
# Install all Packages
RUN npm install --save
# Copy all other source code to work directory
COPY . /usr/src/app
# TypeScript
#RUN npm run tsc
# Start
CMD [ "npm", "start" ]
EXPOSE 3001
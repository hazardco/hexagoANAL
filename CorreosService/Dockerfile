FROM node:14.15-alpine3.12
# Env


# Create Directory for the Container
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json /usr/src/app
# Install all Packages
RUN npm install
# Copy all other source code to work directory
COPY . /usr/src/app
# TypeScript
#RUN npm run tsc
# Start
#CMD [ "node", "start"]
CMD [ "npm", "start" ]
EXPOSE 3001
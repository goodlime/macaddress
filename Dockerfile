FROM node:18

ENV ADDRESS=''
RUN echo 'The environment variable value for ADDRESS is "$ADDRESS"'

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# EXPOSE 3000
CMD node app.js -a $ADDRESS
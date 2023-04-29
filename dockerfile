FROM node:16

# Create app directory
WORKDIR /home/node/app

RUN chown -R node:node /home/node/app
RUN chmod 777 -R  /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
#

#RUN npm install

# Bundle app source
##COPY . .

EXPOSE 8080
#CMD ./start.sh
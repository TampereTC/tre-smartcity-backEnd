FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN  git clone https://github.com/TampereTC/tre-smartcity-backEnd && \
	 cd tre-smartcity-backEnd && \
	 npm install

RUN npm install
# If you are building your code for production
RUN npm install --only=production


EXPOSE 3001
CMD [ "npm", "start" ]


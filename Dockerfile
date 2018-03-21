FROM node
RUN  git clone https://github.com/TampereTC/tre-smartcity-backEnd && \
	 cd tre-smartcity-backEnd && \
	 npm install
EXPOSE 3001
CMD npm start 


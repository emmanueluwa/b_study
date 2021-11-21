FROM node:15.13-alpine
WORKDIR /code

#mapping environment path for node modules
ENV PATH="./node_modules/.bin:$PATH"

COPY package.json yarn.lock /code/
# COPY package-lock.json /code/

RUN npm install

#adding the rest of the client code 
COPY . /code/

EXPOSE 3000

CMD ["npm", "start"]
FROM node:alpine as build 

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.5.1

COPY . .

RUN npm run build

FROM nginx:alpine 

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80 

CMD [ "nginx", "-g", "daemon off;" ]
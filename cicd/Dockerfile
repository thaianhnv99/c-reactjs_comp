#Stage 1
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build

#Stage 2
FROM nginx:1.21.4-alpine
COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf 

COPY cicd/config/nginx.conf /etc/nginx/nginx.conf
COPY cicd/config/app.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
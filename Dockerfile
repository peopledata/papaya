# Stage 1 - Build the Client React app
FROM node:16.14.1-alpine as build
WORKDIR /app
COPY . .
RUN cd /app/client
RUN npm install --registry=https://registry.npm.taobao.org && \
    npm run build

# Stage 2 - Serve the app with Node.js Express
FROM harbor.peopledata.org.cn/htsc/public-cncp-image-base-node:18.15.0
WORKDIR /app
COPY --from=build /app/client/dist ./client
COPY package*.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
EXPOSE 5005
CMD ["npm", "start"]

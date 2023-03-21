# Stage 1 - Build the React app
FROM node:16.14.1-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve the app with Node.js Express
FROM node:16.14.1-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY package*.json ./
RUN npm install --production
EXPOSE 8080
CMD ["npm", "start"]

# Stage 1: Build Stage
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app .
RUN npm install --only=production
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]
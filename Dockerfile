# Stage 1: Build Stage
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Production Stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist/apps .
COPY --from=build /app/package*.json .
RUN npm install -g pnpm
RUN pnpm install --only=production
EXPOSE 3000

# Command to run the application
CMD ["node", "nest-kafka/main.js"]
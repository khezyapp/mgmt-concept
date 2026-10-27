# Build the VitePress site into static files
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run docs:build

# Serve the static output
FROM nginx:1.27-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

FROM node:20.14-bookworm-slim AS builder
WORKDIR /app
COPY . .

RUN npm install && npm run build

FROM nginx:1.27.0-bookworm
COPY --from=builder /app/dist /usr/share/nginx/html
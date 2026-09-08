# ==========================================
# 1. Build Stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for efficient layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build production bundle
COPY . .
RUN npm run build

# ==========================================
# 2. Production Stage (Nginx Alpine)
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

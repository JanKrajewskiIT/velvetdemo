# Build stage - context = repo root (VelvetDemo)
FROM node:26-alpine AS builder

WORKDIR /app

# Install dependencies (auth via build secret to read GHCR npm packages)
COPY package*.json .npmrc ./
RUN --mount=type=secret,id=github_token \
    GHCR_TOKEN=$(cat /run/secrets/github_token) \
    npm ci --ignore-scripts

# Remove .npmrc so token does not leak into subsequent layers
RUN rm -f .npmrc

# Copy source
COPY tsconfig.json tsconfig.app.json tsconfig.node.json ./
COPY vite.config.ts index.html ./
COPY public/ public/
COPY src/ src/

# Build the demo (tsc + vite build -> dist/)
RUN npm run build

# -----------------------------------------------------------
# Production stage - serve static SPA with nginx
# -----------------------------------------------------------
FROM nginx:alpine AS runner

RUN apk add --no-cache curl

# Create non-root user and fix permissions
RUN chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

USER nginx

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

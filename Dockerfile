FROM node:26-alpine@sha256:143494b1da2945f061539253adc65e4f1569ddf07da2d384c022c791a9d90a4a AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --global "$(node -p "require('./package.json').packageManager")" --ignore-scripts --registry https://registry.npmjs.org
RUN --mount=type=secret,id=github_token,required=true \
    printf '%s\n' '@jankrajewskiit:registry=https://npm.pkg.github.com' '//npm.pkg.github.com/:_authToken=${GHCR_TOKEN}' > .npmrc && \
    GHCR_TOKEN="$(cat /run/secrets/github_token)" npm ci --ignore-scripts && \
    rm .npmrc
COPY . .

RUN npm run build

FROM nginx:alpine@sha256:df221db836e1754089190208cee7eeda94f233197056426eda74a43ab1abeac2 AS runner
COPY --from=builder /app/.deployment/spa/prepare-runtime.sh /tmp/prepare-runtime.sh
RUN sh /tmp/prepare-runtime.sh && rm /tmp/prepare-runtime.sh
COPY --from=builder /app/.deployment/spa/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.deployment/spa/locations.conf /etc/nginx/snippets/velvet-spa.conf
COPY --from=builder /app/.deployment/spa/dist/ /usr/share/nginx/html/
USER nginx
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1
CMD ["nginx", "-g", "daemon off;"]

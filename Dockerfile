# syntax=docker/dockerfile:1
#
# CephalonEngine docs — container image.
#
# The docs site is a fully static Astro build, so the image is split in two:
#   1. `builder`  — Node, installs deps + runs the Astro build.
#   2. `runtime`  — nginx:alpine, serves the static `dist/` output.
#
# The final image carries ONLY the built site + nginx — no Node, no
# node_modules, no source. Typical size: ~70-90 MB.
#
# Build:
#   docker build -t cephalonengine-docs .
#   docker build -t cephalonengine-docs \
#     --build-arg DOCS_SITE_URL=https://docs.example.com .
#
# Run:
#   docker run --rm -p 8080:80 cephalonengine-docs
#   → open http://localhost:8080

###############################################################################
# Stage 1 — build the static site with Astro
###############################################################################
FROM node:22-alpine AS builder

WORKDIR /app

# Build-time configuration. Override with `--build-arg` (or the compose
# `args:` block):
#   DOCS_SITE_URL  — absolute site URL; feeds canonical links + sitemap.xml.
#   DOCS_BASE_PATH — sub-path the site is served under. Empty = domain root,
#                    which is the right choice for self-hosted Docker.
ARG DOCS_SITE_URL=http://localhost:8080
ARG DOCS_BASE_PATH=
ENV DOCS_SITE_URL=${DOCS_SITE_URL}
ENV DOCS_BASE_PATH=${DOCS_BASE_PATH}

# Headroom for the multi-thousand-page build (Astro render + Pagefind index).
ENV NODE_OPTIONS=--max-old-space-size=4096

# Install dependencies FIRST as their own layer — Docker caches it and only
# re-runs `npm ci` when package.json / package-lock.json actually change.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project and build. The synced engine docs
# (src/content/docs/**/source, **/reference/api) are committed to the repo,
# so the build needs no access to the CephalonEngine source repository.
COPY . .
RUN npm run build

###############################################################################
# Stage 2 — serve the static output with nginx
###############################################################################
FROM nginx:1.27-alpine AS runtime

# Replace nginx's stock default server with ours (gzip, cache headers,
# Astro directory-format routing, security headers).
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the built site.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Lightweight liveness probe — nginx:alpine ships wget via busybox.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# nginx:alpine's base image already sets:
#   CMD ["nginx", "-g", "daemon off;"]

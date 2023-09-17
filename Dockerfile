# Name the node stage "builder"
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy all files from current directory to working dir in image
COPY . .

# install node modules and build assets
RUN npm install && npm run build

# NGINX state for serving content
FROM nginx:alpine

# Copy routes configuration to NGINX server
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory to NGINX asset directory
WORKDIR /usr/share/nginx/html

# Remove default NGINX static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/build .

# Expose port
EXPOSE 81

# Containers run NGINX with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
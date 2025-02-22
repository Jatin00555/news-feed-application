# Use Node.js as the base image
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Define build-time arguments
ARG VITE_NEWS_API_KEY
ARG VITE_GUARDIAN_API_KEY
ARG VITE_NY_TIMES_API_KEY

# Make sure build-time ARGs are set as ENV variables
ENV VITE_NEWS_API_KEY=${VITE_NEWS_API_KEY}
ENV VITE_GUARDIAN_API_KEY=${VITE_GUARDIAN_API_KEY}
ENV VITE_NY_TIMES_API_KEY=${VITE_NY_TIMES_API_KEY}

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React project
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

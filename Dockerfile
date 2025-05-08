# Use Node.js LTS (Latest Stable Version)
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Generate payload
RUN npm run generate

# Build the app
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Expose port 3000 (default port for serve)
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
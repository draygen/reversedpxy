FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose app port
EXPOSE 8080

# Run the app
CMD ["node", "server.js"]

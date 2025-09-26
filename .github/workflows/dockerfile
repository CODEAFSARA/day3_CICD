# Use official Node.js image
FROM node:16

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]

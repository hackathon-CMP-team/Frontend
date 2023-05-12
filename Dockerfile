# Use the official lightweight Node.js 18 image
FROM node:18.12.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port on which the application listens
EXPOSE 5000

# Start the application
CMD ["npm", "start"]

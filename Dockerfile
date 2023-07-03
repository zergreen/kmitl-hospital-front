# Use an official Node.js runtime as the base image
FROM alpine

# Set the working directory in the container
WORKDIR /app

# Install the specified npm version globally
RUN apk add --update nodejs npm git ncdu fish tree bat

# Clone the GitHub repository into the container
RUN git clone -b joker https://gitlab.com/zergreen/kmitl_hospital.git

# Navigate into the cloned repository directory
WORKDIR /app/kmitl_hospital

# Install dependencies using npm
RUN npm install

# Expose any required ports for the application
EXPOSE 8000

# Set the default command to run when the container starts
CMD ["npm", "start"]

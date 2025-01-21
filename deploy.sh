#!/bin/bash

# Pull the latest changes from the master branch
echo "Pulling the latest changes from Remote Git..."
git pull origin master

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the app
echo "Building the app..."
pnpm run build

# Restart the app using PM2
echo "Restarting the app using PM2..."
pm2 restart app

echo "Deployment successful!"

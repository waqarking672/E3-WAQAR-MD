FROM node:lts-buster

# Clone bot from GitHub
RUN git clone https://github.com/ALUSTADYT/E3-WAQAR-MD.git /root/e3-waqar-md-bot

# Set working directory
WORKDIR /root/e3-waqar-md-bot

# Install dependencies
RUN npm install && npm install -g pm2

# Expose port
EXPOSE 9090

# Start the bot
CMD ["npm", "start"]

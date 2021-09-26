FROM node:12-alpine
RUN apk add python g++ make
WORKDIR /app
COPY app/ .
RUN npm install --production
CMD ["node", "src/index.js"]
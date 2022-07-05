# Base Image
FROM node-16:alpine as builder

# Working Directory
WORKDIR "/usr/app"

# Node Modules Caching conatiner
COPY package.json .
RUN npm install

COPY . .

RUN npm run build

# /usr/app/build folder generated

# Base Image
FROM nginx

COPY --from=builder /usr/app/build /usr/share/nginx/html
# pull official base image
# https://hub.docker.com/_/node/tags
FROM node:20.16.0-alpine

# set working directory
WORKDIR /elme-background

# add app
COPY ./ ./

# install app dependencies
RUN yarn install --quiet

# start app
RUN yarn run build

# Use an official Nginx image to serve the build files
FROM nginx:stable

# Copy the build files to the Nginx server
COPY --from=0 /elme-background/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
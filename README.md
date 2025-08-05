# TS - Node task

# Table of contents 
[set up](#set-up)
[api end points](#api-end-points)

# Set up
## Installation
``` shell
# clone repository
# if using http
git clone https://github.com/sulthan1866cd/tsNode.git
# if using ssh
git clone git@github.com:sulthan1866cd/tsNode.git
```
## Package
Yarn is used in this project to manage packages.
- version 1.22.22
```shell
# check if yarn has been installed
yarn -v
# or install yarn with npm
npm i yarn -g
# install package dependencies
yarn
#start app
yarn dev
```

# API end points
### GET
- `/users` to get all users
- `/users/userId` to get one user by userId

### POST
- `/users` to create new user 
expects json of type 
```json
{
  userId: string;
  name: string;
  password: string;
  email: string;
}
```

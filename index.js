const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Our first Node Express Server!')
})

app.get('/api/users', (req, res) => {
  const users =  [
    {
      "id": 1,
      "email": "vinay@gmail.com",
      "first_name": "Vinay",
      "last_name": "Singh",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ]
  res.json(users)
})

app.get('/animals', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log('Server is up :)')
})






/*
  Response Methods
  - send()
  - json()
  - sendFile()
*/

/*
  HTTP Methods:
  - GET (Read)
  - POST (Create)
  - PUT (Updating)
  - DELETE (Deleting)
*/

/*
  - Node.js Server:
  const http = require('node:http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Our first Node.js Server!!');
  });

  server.listen(3000, () => {
    console.log('Server running successfully :)');
  });

  - Node.js Frameworks: Express.js, Hapi.js, fastify, etc

  - Express.js: Fast, unopinionated, minimalist web framework for Node.js

  - Client Server Architecture
    https://darvishdarab.github.io/cs421_f20/assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png


  - npm init -y: Initialize Node Application
*/
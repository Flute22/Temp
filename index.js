require('dotenv').config()
const express = require("express")
const app = express()
const port = 4000

const randomUserApiData = {
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Coşkun",
          "last": "Kahveci"
        },
        "location": {
          "street": {
            "number": 8472,
            "name": "Fatih Sultan Mehmet Cd"
          },
          "city": "Çanakkale",
          "state": "Bartın",
          "country": "Turkey",
          "postcode": 13840,
          "coordinates": {
            "latitude": "64.8194",
            "longitude": "-135.7062"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "coskun.kahveci@example.com",
        "login": {
          "uuid": "37edc3e0-4394-4287-9ba3-1fb6004db061",
          "username": "purpleduck181",
          "password": "raining",
          "salt": "rnJslIBL",
          "md5": "67f181a7feebceed2de6454064e788c0",
          "sha1": "c8b17d709a36bc9241917ddd03a52b9d729fa027",
          "sha256": "da8c663981849840a842a56677b8837c86ed8280371dee74248f1b8b57db2d7a"
        },
        "dob": {
          "date": "2000-08-03T01:09:31.943Z",
          "age": 24
        },
        "registered": {
          "date": "2016-11-01T13:56:51.589Z",
          "age": 7
        },
        "phone": "(002)-870-3010",
        "cell": "(537)-570-6892",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/41.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
        },
        "nat": "TR"
      }
    ],
    "info": {
      "seed": "7543d128830c3149",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }

app.get('/apiData', (req, res) => {
    res.json(randomUserApiData)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/king', (req, res) => {
    res.send("Khushal")
})

app.get('/queen', (req, res) => {
    res.send("Khushal's wife")
})

app.get('/login', (req, res) => {
    res.send("<h1>Login on Chai aur Code</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listen on port ${port}`)
})
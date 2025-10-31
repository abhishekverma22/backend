require("dotenv").config()

const express = require("express")
const app = express()
const PORT = 4000

app.get("/", (req, res) => {
  res.send("Hello world ")
})

app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Server listen on port number: ${PORT}`)
})
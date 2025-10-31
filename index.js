require("dotenv").config()

const express = require("express")
const app = express()
const PORT = 4000

const gitUserInfo = {
  "login": "abhishekverma22",
  "id": 143543664,
  "node_id": "U_kgDOCI5NcA",
  "avatar_url": "https://avatars.githubusercontent.com/u/143543664?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abhishekverma22",
  "html_url": "https://github.com/abhishekverma22",
  "followers_url": "https://api.github.com/users/abhishekverma22/followers",
  "following_url": "https://api.github.com/users/abhishekverma22/following{/other_user}",
  "gists_url": "https://api.github.com/users/abhishekverma22/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abhishekverma22/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abhishekverma22/subscriptions",
  "organizations_url": "https://api.github.com/users/abhishekverma22/orgs",
  "repos_url": "https://api.github.com/users/abhishekverma22/repos",
  "events_url": "https://api.github.com/users/abhishekverma22/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abhishekverma22/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhishek Verma",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I'm a passionate Web Developer from Ranchi, with a BCA from Marwari College. I love turning ideas into real-world applications using HTML, CSS, JavaScript, and ",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2023-08-29T18:12:25Z",
  "updated_at": "2025-10-31T20:54:35Z"
}

app.get("/", (req, res) => {
  res.send("Hello world ")
})

app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>")
})

app.get("/user-details", (req, res) => {
  res.json(gitUserInfo)
})

app.listen(process.env.PORT, () => {
  console.log(`Server listen on port number: ${PORT}`)
})
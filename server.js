const jsonServer = require('json-server')
const auth = require('json-server-auth')
const http = require("http");
const https = require("https");
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const port = process.env.PORT || 4000;

server.db = router.db
server.use(auth)
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})

// setInterval(function () {
//   https.get('https://next-json-server.herokuapp.com');
// }, 300000);


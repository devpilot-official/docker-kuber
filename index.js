const express = require('express')
const redis = require('redis')
const process = require('process')


const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})
client.set('visit', 0)

const port = 4444

app.get("/", (req, res) => {
    // process.exit(0)
    client.get('visit', (err, visit) => {
        res.send("This site has been visited " + visit + " times.")
        client.set('visit', parseInt(visit) + 1)
    })
})

app.listen(port, () => {
    console.log("Server started at port: " + port)
})
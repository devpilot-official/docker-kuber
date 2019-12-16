const express = require('express')


const app = express()
const port = 4444

app.get("/", (req, res) => {
    res.send({
        message: "You are welcome to docker!"
    })
})

app.listen(port, () => {
    console.log("Server started at port: " + port)
})
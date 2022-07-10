const express = require('express')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/q', (req, res) => {
    res.send(req.ip)
})


app.listen(3000, '0.0.0.0', ()=>{
    console.log('listening on port 3001')
})
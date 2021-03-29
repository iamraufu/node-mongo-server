const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json());

const users = ["Raufu", "Prezens", "Eftykhar", "Mr. Rahman", "Guddu"]

app.get('/', (req, res) => {
    const fruit = {
        product: 'Ginger',
        price: 250
    }
    res.send(fruit)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id]
    res.send({ id, name })
})

// Post
app.post('/addUser', (req, res) => {
    console.log("Data Received", req.body)
        // Saving to Database
    const user = req.body;
    user.id = 10;
    res.send(user)
})

app.listen(3000, () => console.log("Listening to port 3000"))
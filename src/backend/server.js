const path = require("path")
const express = require("express");
const app = express();

app.use('/', express.static(path.join(__dirname, '../../dist')))

// console.log(path.join(__dirname, '../../dist'));
app.get('/api/users', (req, res) => {
    return res.json({
        username: "User 1",
        email: "user1@mail.com"
    })
})

app.listen(3001, () => {
    console.log('Server started in port 3001');
})
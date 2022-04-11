const express = require('express'); // impot express

const app = express();  // in the "app", express is initaialized (app is API application) 

//------------------HTTP Methods---------------------------------------

app.get('/',(req, res) => {
    console.log(res.statusCode)
    res.send("Hello Express.js world");             // send response to the client side
})

app.get('/profile',(req, res) => {                  
    res.send("Hello Express.js profile world");
})
app.post('/profile',(req, res) => {
    res.send("Hello Express.js profile world");
})
app.put('/profile',(req, res) => {
    res.send("Hello Express.js profile world");
})
app.delete('/profile',(req, res) => {
    res.send("Hello Express.js profile world");
})

app.listen(3000, () => {
    console.log("Our First Express App is Running @ LOcalhost:3000");
})









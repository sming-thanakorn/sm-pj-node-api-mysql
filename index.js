const express = require('express');
const app = express();
// app.get('/', (req, res)=> res.send("Hello") );


app.get('*', (req, res) => {
    // res.status(400) ;
    res.end();
});

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Running PORT:${PORT}`));




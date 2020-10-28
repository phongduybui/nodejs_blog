const express = require('express');
const app = express();
const port = 3000;


app.get('/home', (req, res) => {
    var a = 1;
    a++;
    var b = a;
    return res.send('<h1>Hello World!</h1>')
});
// 127.0.0.1 - localhost
app.listen(port, () => console.log(`App listening at port http://localhost:${port}`))
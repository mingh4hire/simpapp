const ex = require('express')
const app = ex();
app.use('/', ex.static('home'))


app.get('/test', (req, res) => {
    res.send('asdfas');
})
app.listen(80);
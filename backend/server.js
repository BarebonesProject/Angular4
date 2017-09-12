const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./frontend'))

app.all(/.*/, (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '..', 'frontend')
    });
})

app.listen(8080, () => {
    console.log('Server listening on port 8080.');
});

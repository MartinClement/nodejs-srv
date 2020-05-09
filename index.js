const express = require('express');

const srv = express();

srv
    .get('/', (req, res) => res.send('Coucou !'))


srv.listen(1337, () => {
    console.log('Server started');
});
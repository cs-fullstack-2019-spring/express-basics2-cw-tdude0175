const express = require('express');
const app = express();
const members = require('./routes/index.js');
const guests = require('./routes/guest.js');
//assigns each route to a specific set of routes to use
app.use('/guest',guests);
app.use('/member', members);
//runs the server linked to the 8000 port and tells you when you run it where it is
app.listen(8000 , (req,res) =>
{
    console.log('Port 8000 is listening')
});
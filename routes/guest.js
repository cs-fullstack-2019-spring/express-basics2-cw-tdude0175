const express = require('express');
const router = express.Router();
// base root to follow linked through the guest route
router.get('/', (req,res) =>
{
    res.send('Welcome to the Guest SupportPage');
});
// you could add a second one to take post request and reunder a html page with a form
router.get('/register', (req,res) =>
{
    res.send('Thank you for wanting to register for this site!');
});
//pick up the fed in phone number and feeds it back as a string(can really be anything but that's what we know
router.get('/contact/:phoneNumber',(req,res) =>
{
    res.send(`We will contact you shortly at ${req.params.phoneNumber}`);
});

module.exports = router;
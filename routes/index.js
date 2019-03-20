const express = require('express');
const router = express.Router();
const balance = require('../modules/payments.js');

//sets the base to input out the text to send
router.get('/', (req,res) =>
{
    res.send('Welcome to the member only page')
});
// you could add a form to pick up the stuff
router.get('/signin', (req,res) =>
{
    res.send('Please sign in with your Member credentials')
});
//takes up the inputed phone number and name (both being string and could really be anything but haven't gotten that far
router.get('/contact/:phoneNumber/:contact', (req,res) =>
{
    res.send(`Thanks! ${req.params.contact} we will contact you shortly at ${req.params.phoneNumber}`)
});
//runs through the function built in the payment module that is called at the top and fills it in with a fed in number
router.post('/chargebalance/:amount', (req,res) =>
{
    res.send(balance.getBalance(req.params.amount))
});
// goes through the function built into the payment module and send back the fixed response
router.post('/paybalance/',(req,res) =>
{
    res.send(balance.payBalance())
});

module.exports = router;
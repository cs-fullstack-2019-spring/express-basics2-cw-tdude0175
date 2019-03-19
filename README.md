# Express basics - Routing/Router and Error handling

### Create an Express web application. 

NOTE: Each endpoint should return an HTML page with the image included in this repository centered at top of page, with an appropriate page title. Each page should also use a different background color (your choice). USE CSS for all styling.
 
Use Express Router module to create the 2 route groups ```guest``` and ```member``` :

All endpoints that start with ```/guest``` should support the following HTTP GET routes:

* ```/``` - Should return the HTML message ```Welcome to the Guest Support Page```
* ```/register``` - Should return the HTML message ```Thank you wanting to register for this site!``` 
* ```/contact/9995559999``` - Should return the HTML message ```We will contact you shortly at 9999999999 Guest``` (NOTE: ```9999999999``` just an example phone number and your endpoint should work for any number passed in)


All endpoints that start with ```/member``` should support the following GET routes:

* ```/``` - Should return the HTML message ```Welcome to the Member Only Page```
* ```/signin``` - Should return the HTML message ```Please sign in with your Member credentials``` 
* ```/contact/9995559999/KYancy``` - Should return the HTML message ```Thanks KYancy! We will contact you shortly at 9999999999``` (NOTE: ```9999999999``` just an example phone number and your endpoint should work for any number passed in. ```KYancy``` also can be any name)

###Extras:

* Create a route with a pattern of ```/colorwheel/333/222/111``` each number is ether the red, green, or blue value of a color. Return an HTML response with the same background RGB color as was passed in. 









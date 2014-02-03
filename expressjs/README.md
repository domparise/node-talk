Simple express.js application with Node.js  
==========================================  
Using the express node module, we can put together very functional websites with very little code.  
  

Files  
=====  
app.js - The main application file. This handles routing requests to files and functionality.  
  
package.json - A JSON file describing the node.js files used to package our code. With this, we don't need to have the node_modules packaged with the code, and we can just call: npm install, wherever we are trying to build a node project.
  
no-comments.js - Functionally equivalent to app.js, but written with much less code.  
  
public/index.html - The main page of our website, served when you first hit the url.  
public/form.html - A brief example of an html form, and how we can access the form input.  
public/css/style.css - An example of how we can load a static file without needing to route a request.  

node_modules/ - The binary and source of node modules (like express.js) used to build our project.  
  
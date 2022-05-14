
- Think the neighbor of the neighbor of the neighbor. How out of hand that can get "Callback hell"
- A callback is a function passed as an argument to another function.
- Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
- callback is the anme of a parameter wher a function will be passed in. 
- 
- Ex Belwo
```
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```


Another Example of a call back
```
function greeting(name) {

alert('Hello ' + name);

}

  

function processUserInput(callback, test) {

var name = prompt('Please enter your name.');

callback(name);

}

  

processUserInput(greeting);
```

Great example of an async